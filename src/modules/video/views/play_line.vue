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
			<!-- 批量检查按钮 -->
			<el-button
				:disabled="checking"
				:loading="checking"
				type="warning"
				@click="handleBatchCheck"
			>
				<template v-if="checking">
					{{ checkProgressText }}
				</template>
				<template v-else>
					{{ t('批量检查链接') }}
				</template>
			</el-button>
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
		<cl-upsert ref="Upsert">
			<template #slot-video-line-select="{ scope }">
				<video-line-select
					:onChange="videoLineSelectChange"
					:video-line-id="scope.video_line_id"
				></video-line-select>
			</template>
		</cl-upsert>
	</cl-crud>
	<cl-dialog v-model="visible" :before-close="beforeClose" :title="t('视频预览')" height="auto">
		<div id="playerRefDom"></div>
	</cl-dialog>
</template>

<script lang="ts" name="video-play_line" setup>
import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { computed, nextTick, ref, watch } from 'vue';
import Artplayer from 'artplayer';
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';
import Hls from 'hls.js';
import { useI18n } from 'vue-i18n';
import { ElMessage, ElMessageBox } from 'element-plus';
import collectionSelect from '../components/collection-select.vue';
import videoSelect from '/$/video/components/video-select.vue';
import videoLineSelect from '../components/video-line-select.vue';

const ArtplayerContainer = ref<Artplayer>();
const { service, route, router } = useCool();
const { t } = useI18n();

const visible = ref<boolean>(false);
const checking = ref<boolean>(false);
const checkProgress = ref<{ current: number; total: number }>({ current: 0, total: 0 });

// 进度文本
const checkProgressText = computed(() => {
	if (checkProgress.value.total === 0) {
		return t('检查中...');
	}
	return `${t('检查中')} ${checkProgress.value.current}/${checkProgress.value.total}`;
});
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
				vm: collectionSelect,
				props: {
					onChange(data) {
						if (data) {
							Search.value.setForm('collection_id', data.id);
						} else {
							Search.value.setForm('collection_id', undefined);
						}
					}
				}
			}
		},
		{
			label: t('影视'),
			prop: 'video_id',
			component: {
				vm: videoSelect,
				props: {
					onChange(data) {
						if (data) {
							Search.value.setForm('video_id', data.id);
						} else {
							Search.value.setForm('video_id', undefined);
						}
					}
				}
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

const videoLineSelectChange = data => {
	Upsert.value.setForm('video_line_id', data.id);
	Upsert.value.setForm('collection_id', data.collection_id);
	Upsert.value.setForm('collection_name', data.collection_name);
	Upsert.value.setForm('tag', data.tag);
	Upsert.value.setForm('video_id', data.video_id);
	Upsert.value.setForm('video_name', data.video_name);

	console.log(Upsert.value);
};

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('线路'),
			prop: 'video_line_id',
			hook: 'number',
			component: {
				name: 'slot-video-line-select'
			},
			required: true
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
			span: 12,
			value: 0
		},
		{
			label: t('status'),
			prop: 'status',
			flex: false,
			component: { name: 'cl-switch' },
			span: 12,
			value: 1
		},

		{
			label: t('文件地址'),
			prop: 'file',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } },
			required: true
		},
		{
			label: t('副标题'),
			prop: 'sub_title',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('排序'),
			prop: 'sort',
			hook: 'number',
			component: {
				name: 'el-input-number',
				props: {
					//限制只能输入整数
					step: 1,
					min: 0,
					clearable: true
				}
			},
			value: 1
		},
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

// 检查链接连通性
async function checkLink(url: string): Promise<boolean> {
	if (!url || !url.trim()) {
		return false;
	}

	const cleanUrl = url.trim();

	// 方法1: 尝试使用 HEAD 请求（最轻量）
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 8000); // 8秒超时

		const response = await fetch(cleanUrl, {
			method: 'HEAD',
			mode: 'cors',
			signal: controller.signal,
			credentials: 'omit'
		});

		clearTimeout(timeoutId);

		// 检查状态码，2xx 和 3xx 都认为可用
		if (response.ok || (response.status >= 300 && response.status < 400)) {
			return true;
		}
	} catch (error: any) {
		// CORS 错误或其他错误，继续尝试其他方法
		if (error.name !== 'AbortError') {
			// 不是超时错误，继续尝试
		} else {
			// 超时，直接返回 false
			return false;
		}
	}

	// 方法2: 尝试使用 GET 请求（只请求少量数据）
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 8000);

		const response = await fetch(cleanUrl, {
			method: 'GET',
			mode: 'cors',
			signal: controller.signal,
			credentials: 'omit',
			headers: {
				Range: 'bytes=0-512' // 只请求前512字节
			}
		});

		clearTimeout(timeoutId);

		// 检查状态码
		if (
			response.ok ||
			response.status === 206 ||
			(response.status >= 300 && response.status < 400)
		) {
			return true;
		}
	} catch (error: any) {
		// 如果还是失败，尝试使用 XMLHttpRequest
		if (error.name === 'AbortError') {
			return false;
		}
	}

	// 方法3: 使用 XMLHttpRequest（兼容性更好，但可能遇到 CORS）
	return new Promise(resolve => {
		const xhr = new XMLHttpRequest();
		const timeoutId = setTimeout(() => {
			xhr.abort();
			resolve(false);
		}, 8000);

		xhr.open('HEAD', cleanUrl, true);
		xhr.timeout = 8000;

		xhr.onload = () => {
			clearTimeout(timeoutId);
			// 2xx 和 3xx 都认为可用
			if (xhr.status >= 200 && xhr.status < 400) {
				resolve(true);
			} else {
				resolve(false);
			}
		};

		xhr.onerror = () => {
			clearTimeout(timeoutId);
			resolve(false);
		};

		xhr.ontimeout = () => {
			clearTimeout(timeoutId);
			resolve(false);
		};

		try {
			xhr.send();
		} catch (e) {
			clearTimeout(timeoutId);
			resolve(false);
		}
	});
}

// 批量检查链接
async function handleBatchCheck() {
	const selection = Table.value?.selection || [];

	if (selection.length === 0) {
		ElMessage.warning(t('请先选择要检查的数据'));
		return;
	}

	// 确认对话框
	try {
		await ElMessageBox.confirm(
			`确定要检查选中的 ${selection.length} 条数据的链接连通性吗？`,
			t('批量检查'),
			{
				type: 'warning',
				confirmButtonText: t('确定'),
				cancelButtonText: t('取消')
			}
		);
	} catch {
		return; // 用户取消
	}

	checking.value = true;
	checkProgress.value = { current: 0, total: selection.length };
	let successCount = 0;
	let failCount = 0;
	const updatePromises: Promise<any>[] = [];

	try {
		// 遍历选中的数据
		for (let i = 0; i < selection.length; i++) {
			const item = selection[i];
			const fileUrl = item.file;

			// 更新进度
			checkProgress.value.current = i + 1;

			if (!fileUrl || !fileUrl.trim()) {
				// 如果没有链接，标记为异常
				updatePromises.push(
					service.video.play_line.update({
						id: item.id,
						status: 0
					})
				);
				failCount++;
				continue;
			}

			// 检查链接连通性
			const isAvailable = await checkLink(fileUrl.trim());

			// 更新状态
			updatePromises.push(
				service.video.play_line.update({
					id: item.id,
					status: isAvailable ? 1 : 0
				})
			);

			if (isAvailable) {
				successCount++;
			} else {
				failCount++;
			}
		}

		// 等待所有更新完成
		await Promise.all(updatePromises);

		ElMessage.success(`检查完成：正常 ${successCount} 条，异常 ${failCount} 条`);

		// 刷新列表
		Crud.value?.refresh();
	} catch (error: any) {
		console.error('批量检查失败：', error);
		ElMessage.error(t('批量检查失败：') + (error.message || error));
	} finally {
		checking.value = false;
		// 延迟重置进度，让用户看到完成状态
		setTimeout(() => {
			checkProgress.value = { current: 0, total: 0 };
		}, 1000);
	}
}

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
