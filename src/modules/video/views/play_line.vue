<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<!--			<cl-filter label="状态">-->
			<!--				<cl-select-->
			<!--					:options="[-->
			<!--						{-->
			<!--							label: '正常',-->
			<!--							value: 1-->
			<!--						},-->
			<!--						{-->
			<!--							label: '异常',-->
			<!--							value: 0-->
			<!--						}-->
			<!--					]"-->
			<!--					:width="140"-->
			<!--					check-strictly-->
			<!--					prop="status"-->
			<!--					tree-->
			<!--				/>-->
			<!--			</cl-filter>-->
			<!--			<cl-filter label="资源名">-->
			<!--				<cl-input prop="collection_name" />-->
			<!--			</cl-filter>-->
			<!--			<cl-filter label="资源ID">-->
			<!--				<el-input prop="collection_id" />-->
			<!--			</cl-filter>-->
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
	<cl-dialog v-model="visible" :before-close="beforeClose" height="auto" title="视频预览">
		<div id="playerRefDom"></div>
	</cl-dialog>
</template>

<script lang="ts" name="video-play_line" setup>
import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { nextTick, ref } from 'vue';
import Artplayer from 'artplayer';
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';
import Hls from 'hls.js';

const ArtplayerContainer = ref<Artplayer>();
const { service } = useCool();
const visible = ref<boolean>(false);
const beforeClose = done => {
	ArtplayerContainer.value.destroy();
	done();
};
const handleError = (error: Error) => {
	// 处理错误，给用户合适的反馈
	console.error('播放错误：', error);
};

const Search = useSearch({
	items: [
		{
			label: '视频ID',
			prop: 'video_id',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		},
		{
			label: '视频名称',
			prop: 'video_name',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		},
		{
			label: '资源ID',
			prop: 'collection_id',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		},
		{
			label: '资源名称',
			prop: 'collection_name',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		}
	]
});
const play = async (url: string) => {
	await nextTick();
	visible.value = true;
	if (!url) {
		handleError(new Error('URL为空，无法播放视频。'));
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
						title: 'Quality',
						auto: 'Auto'
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
							art.notice.show = 'Unsupported playback format: m3u8';
						}
					}
				}
			});
		} catch (error) {
			handleError(error);
		}
	}, 0);
};
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: '影视ID',
			prop: 'video_id',
			hook: 'number',
			component: { name: 'el-input-number' }
		},
		{
			label: '资源ID',
			prop: 'video_line_id',
			hook: 'number',
			component: { name: 'el-input-number' }
		},
		{
			label: '名称',
			prop: 'name',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: '文件地址',
			prop: 'file',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } }
		},
		{
			label: '副标题',
			prop: 'sub_title',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{ label: '排序', prop: 'sort', hook: 'number', component: { name: 'el-input-number' } },
		{ label: '标识', prop: 'tag', component: { name: 'el-input', props: { clearable: true } } }
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: '影视名称', prop: 'video_name', minWidth: 140 },
		{ label: '资源名', prop: 'collection_name', minWidth: 140 },
		{ label: '资源ID', prop: 'collection_id', minWidth: 140 },
		{ label: '副标题', prop: 'sub_title', minWidth: 140 },
		{ label: '名称', prop: 'name', minWidth: 140 },
		{
			label: '状态',
			prop: 'status',
			minWidth: 140,
			dict: [
				{ value: 1, label: '正常' },
				{ value: 0, label: '异常' }
			]
		},
		{ label: '文件地址', prop: 'file', showOverflowTooltip: true, minWidth: 200 },
		{ label: '排序', prop: 'sort', minWidth: 140 },
		{ label: '标识', prop: 'tag', minWidth: 140 },
		{
			label: '创建时间',
			prop: 'createTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{
			label: '更新时间',
			prop: 'updateTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{ label: '创建人', prop: 'createUserId', minWidth: 140 },
		{ label: '修改人', prop: 'updateUserId', minWidth: 140 },
		{
			type: 'op',
			width: 300,
			buttons: [
				'edit',
				'delete',
				{
					label: '播放',
					async onClick({ scope }) {
						play(scope.row.file);
					}
				}
			]
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.play_line
	},
	app => {
		app.refresh();
	}
);
</script>
<style lang="scss" scoped>
#playerRefDom {
	width: 100%;
	height: 500px;
}
</style>
