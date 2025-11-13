<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 导出按钮 -->
			<cl-export-btn :columns="Table?.columns" />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<!-- 关键字搜索 -->
			<cl-search ref="Search" />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
	<cl-dialog v-model="visible" :before-close="beforeClose" height="auto" :title="t('视频预览')">
		<div id="playerRefDom"></div>
	</cl-dialog>
</template>

<script lang="ts" name="video-play_line" setup>
import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { nextTick, ref, watch } from 'vue';
import Artplayer from 'artplayer';
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';
import Hls from 'hls.js';
import { useI18n } from 'vue-i18n';
import collectionSelect from '../components/collection-select.vue';

const ArtplayerContainer = ref<Artplayer>();
const { service, route, router } = useCool();
const { t } = useI18n();

const visible = ref<boolean>(false);
const beforeClose = (done: () => void) => {
	if (ArtplayerContainer.value) {
		ArtplayerContainer.value.destroy();
	}
	done();
};
const handleError = (error: Error) => {
	// 处理错误，给用户合适的反馈
	console.error('播放错误：', error);
};

const Search = useSearch({
	items: [
		{
			label: t('资源名称'),
			prop: 'collection_id',
			component: {
				vm: collectionSelect
			}
		},
		{
			label: t('状态'),
			prop: 'status',
			component: {
				name: 'cl-select',
				props: {
					options: [
						{
							label: t('正常'),
							value: 1
						},
						{
							label: t('异常'),
							value: 0
						}
					]
				}
			}
		},
		{
			label: t('视频ID'),
			prop: 'video_id',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		},
		{
			label: t('视频名称'),
			prop: 'video_name',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		}
	],
	onChange(data, prop) {
		// 当 video_id 字段变化时，同步更新路由参数
		if (prop === 'video_id') {
			const videoId = String(data.video_id || '').trim();

			if (videoId) {
				// 有值时更新路由参数
				router.replace({
					path: route.path,
					query: {
						...route.query,
						video_id: videoId
					}
				});
			} else {
				// 空值时移除路由参数中的 video_id
				const query = { ...route.query };
				delete query.video_id;
				router.replace({
					path: route.path,
					query
				});
			}
		}
	}
});
const play = async (url: string) => {
	await nextTick();
	visible.value = true;
	if (!url) {
		handleError(new Error(t('URL为空，无法播放视频。')));
		return;
	}
	setTimeout(() => {
		try {
			ArtplayerContainer.value = new Artplayer({
				container: '#playerRefDom',
				url: url,
				setting: true,
				plugins: [
					artplayerPluginHlsQuality({
						// Show quality in control
						control: true,

						// Show quality in setting
						setting: true,

						// Get the resolution text from level
						getResolution: level => level.height + 'P',

						// I18n
						title: t('Quality'),
						auto: t('Auto')
					})
				],
				customType: {
					m3u8: function playM3u8(video, url, art) {
						if (Hls.isSupported()) {
							if (art.hls) art.hls.destroy();
							const hls = new Hls();
							hls.loadSource(url);
							hls.attachMedia(video);
							art.hls = hls;
							art.on('destroy', () => hls.destroy());
						} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
							video.src = url;
						} else {
							art.notice.show = t('Unsupported playback format: m3u8');
						}
					}
				}
			});
		} catch (error: unknown) {
			handleError(error as Error);
		}
	}, 0);
};
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('影视ID'),
			prop: 'video_id',
			hook: 'number',
			component: { name: 'el-input-number' }
		},
		{
			label: t('资源ID'),
			prop: 'video_line_id',
			hook: 'number',
			component: { name: 'el-input-number' }
		},
		{
			label: t('名称'),
			prop: 'name',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: t('vip'),
			prop: 'vip',
			flex: false,
			component: { name: 'cl-switch' },
			span: 8,
			group: 'base'
		},
		{
			label: t('文件地址'),
			prop: 'file',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } }
		},
		{
			label: t('副标题'),
			prop: 'sub_title',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{ label: t('排序'), prop: 'sort', hook: 'number', component: { name: 'el-input-number' } },
		{
			label: t('标识'),
			prop: 'tag',
			component: { name: 'el-input', props: { clearable: true } }
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('影视名称'), prop: 'video_name', minWidth: 140 },
		{ label: t('影视ID'), prop: 'video_id', minWidth: 140 },
		{ label: t('资源名'), prop: 'collection_name', minWidth: 140 },
		{ label: t('资源ID'), prop: 'collection_id', minWidth: 140 },
		{ label: t('副标题'), prop: 'sub_title', minWidth: 140 },
		{ label: t('名称'), prop: 'name', minWidth: 140 },
		{
			label: t('vip'),
			prop: 'vip',
			flex: false,
			component: { name: 'cl-switch' },
			span: 8,
			group: 'base'
		},
		{
			label: t('状态'),
			prop: 'status',
			minWidth: 140,
			dict: [
				{ value: 1, label: t('正常') },
				{ value: 0, label: t('异常') }
			]
		},
		{ label: t('文件地址'), prop: 'file', showOverflowTooltip: true, minWidth: 200 },
		{ label: t('排序'), prop: 'sort', minWidth: 140 },
		{ label: t('标识'), prop: 'tag', minWidth: 140 },
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updateTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{ label: t('创建人'), prop: 'createUserId', minWidth: 140 },
		{ label: t('修改人'), prop: 'updateUserId', minWidth: 140 },
		{
			type: 'op',
			width: 300,
			buttons: [
				'edit',
				'delete',
				{
					label: t('播放'),
					async onClick({ scope }) {
						play(scope.row.file);
					}
				}
			]
		}
	]
});

// 处理路由参数变化，更新搜索条件并刷新列表
function handleRouteQuery(crudInstance?: any) {
	const crudApp = crudInstance || Crud.value;
	const videoId = route.query.video_id;
	const videoIdStr = videoId ? String(videoId).trim() : '';

	if (videoIdStr) {
		// 设置搜索表单的 video_id 值
		Search.value?.setForm('video_id', videoIdStr);

		// 刷新列表，带上 video_id 参数
		crudApp?.refresh({
			video_id: videoIdStr,
			page: 1
		});
	} else {
		// 清空搜索条件
		Search.value?.setForm('video_id', '');
		// 刷新列表，显式设置 video_id 为 undefined，确保不携带参数
		crudApp?.refresh({
			video_id: undefined,
			page: 1
		});
	}
}

// cl-crud
const Crud = useCrud(
	{
		service: service.video.play_line
	},
	app => {
		// 初始化时处理路由参数
		handleRouteQuery(app);
	}
);

// 监听路由查询参数变化，当 video_id 变化时重新搜索
watch(
	() => route.query.video_id,
	(newVideoId, oldVideoId) => {
		// 只有当 video_id 真的变化时才处理
		if (newVideoId !== oldVideoId) {
			handleRouteQuery();
		}
	},
	{ immediate: false }
);
</script>
<style lang="scss" scoped>
#playerRefDom {
	width: 100%;
	height: 500px;
}
</style>
