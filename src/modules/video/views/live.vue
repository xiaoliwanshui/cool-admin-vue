<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 快速导入按钮 -->
			<el-button type="success" @click="openQuickImport">快速导入</el-button>
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
			<cl-filter :label="t('分类')">
				<cl-select
					:options="dict.get('live_category')"
					:width="140"
					check-strictly
					prop="category_id"
					tree
				/>
			</cl-filter>
			<cl-filter :label="t('状态')">
				<cl-select
					:options="[
						{
							label: t('正常'),
							value: 1
						},
						{
							label: t('异常'),
							value: 0
						}
					]"
					:width="140"
					check-strictly
					prop="status"
					tree
				/>
			</cl-filter>
			<!-- 关键字搜索 -->
			<cl-search-key />
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
	<!-- 快速导入表单 -->
	<cl-form ref="ImportForm"></cl-form>
	<!-- 播放器弹窗 -->
	<cl-dialog v-model="visible" :before-close="beforeClose" :title="t('直播预览')" height="auto">
		<div id="playerRefDom"></div>
	</cl-dialog>
</template>

<script lang="ts" name="video-live" setup>
import { useCrud, useForm, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useDict } from '/$/dict';
import { useI18n } from 'vue-i18n';
import { ElMessage, ElMessageBox } from 'element-plus';
import { computed, nextTick, ref } from 'vue';
import Artplayer from 'artplayer';
import artplayerPluginHlsQuality from 'artplayer-plugin-hls-quality';
import Hls from 'hls.js';

const { service } = useCool();
const { dict } = useDict();
const { t } = useI18n();
const ImportForm = useForm();
const image: string = `https://cool-file-1300398902.cos.ap-nanjing.myqcloud.com/app%2Fbase%2F693631ad5c0d48ea95c4db3cadbea02e_%E7%94%B5%E8%A7%86%E5%8F%B0%E5%9B%BE%E6%A0%87%402x%20(2).png`;

const checking = ref<boolean>(false);
const checkProgress = ref<{ current: number; total: number }>({ current: 0, total: 0 });
const visible = ref<boolean>(false);
const ArtplayerContainer = ref<Artplayer>();

// 播放器相关函数
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

const play = async (url: string) => {
	await nextTick();
	visible.value = true;
	if (!url) {
		handleError(new Error(t('URL为空，无法播放直播流。')));
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

// 进度文本
const checkProgressText = computed(() => {
	if (checkProgress.value.total === 0) {
		return t('检查中...');
	}
	return `${t('检查中')} ${checkProgress.value.current}/${checkProgress.value.total}`;
});
// cl-upsert
const Upsert = useUpsert({
	items: [
		{ label: t('标题'), prop: 'title', required: true, component: { name: 'el-input' } },
		{
			label: t('分类'),
			prop: 'category_id',
			required: true,
			component: {
				name: 'el-select',
				options: dict.get('live_category')
			}
		},
		{
			label: t('状态'),
			prop: 'status',
			component: {
				name: 'cl-switch'
			},
			required: true
		},
		{
			label: t('图片'),
			prop: 'image',
			required: true,
			component: {
				name: 'cl-upload',
				props: {
					text: t('选择图片')
				}
			},
			value: image
		},
		{ label: t('拉流地址'), prop: 'pullUrl', component: { name: 'el-input' } }
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id' },
		{ label: t('房间号'), prop: 'roomId' },
		{ label: t('标题'), prop: 'title' },
		{ label: t('分类'), prop: 'category_id', dict: dict.get('live_category') },
		{ label: t('图片'), prop: 'image', component: { name: 'cl-image' } },
		{
			label: t('状态'),
			prop: 'status',
			component: {
				name: 'cl-switch'
			},
			required: true
		},
		() => {
			return {
				label: t('推流服务器'),
				prop: 'pushUrl'
			};
		},
		() => {
			return {
				label: t('推流码'),
				prop: 'pushCode'
			};
		},
		() => {
			return {
				label: t('拉流地址'),
				prop: 'pullUrl'
			};
		},
		{ label: t('创建时间'), prop: 'createTime' },
		{ label: t('更新时间'), prop: 'updateTime' },
		{
			type: 'op',
			width: 300,
			buttons: [
				'info',
				'edit',
				'delete',
				{
					label: t('播放'),
					async onClick({ scope }) {
						play(scope.row.pullUrl);
					}
				}
			]
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.live
	},
	app => {
		app.refresh();
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
				Range: 'bytes=0-512' // 只请求前52字节
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
			const pullUrl = item.pullUrl;

			// 更新进度
			checkProgress.value.current = i + 1;

			if (!pullUrl || !pullUrl.trim()) {
				// 如果没有链接，标记为异常
				updatePromises.push(
					service.video.live.update({
						id: item.id,
						status: 0
					})
				);
				failCount++;
				continue;
			}

			// 检查链接连通性
			const isAvailable = await checkLink(pullUrl.trim());

			// 更新状态
			updatePromises.push(
				service.video.live.update({
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

// 打开快速导入表单
function openQuickImport() {
	ImportForm.value?.open({
		title: '快速导入',
		width: '800px',
		items: [
			{
				label: '导入数据',
				prop: 'importData',
				component: {
					name: 'el-input',
					props: {
						type: 'textarea',
						rows: 10,
						placeholder:
							'请输入数据，格式：标题,拉流地址（每行一条）\n例如：\n澳视澳门,http://103.233.191.134:1935/ch1/ch1.live/playlist.m3u8'
					}
				}
			},
			{
				label: '默认分类',
				prop: 'category_id',
				required: true,
				component: {
					name: 'el-select',
					options: dict.get('live_category')
				}
			},
			{
				label: '默认状态',
				prop: 'status',
				component: {
					name: 'cl-switch'
				},
				value: 1
			}
		],
		on: {
			async submit(data, { close, done }) {
				try {
					// 解析导入数据
					const lines = data.importData
						.split('\n')
						.map(line => line.trim())
						.filter(line => line);

					if (lines.length === 0) {
						ElMessage.warning('请输入要导入的数据');
						done();
						return;
					}

					// 解析每行数据
					const importList: Array<{ title: string; pullUrl: string }> = [];
					const errors: string[] = [];

					// URL验证函数
					function isValidM3U8Url(url: string): boolean {
						if (!url || typeof url !== 'string') {
							return false;
						}

						// 检查是否是有效的URL格式
						try {
							const parsedUrl = new URL(url);

							// 检查协议是否为http或https
							if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
								return false;
							}

							// 检查URL路径是否以.m3u8结尾（不区分大小写）
							const pathname = parsedUrl.pathname.toLowerCase();
							return pathname.endsWith('.m3u8');
						} catch (e) {
							// 如果URL格式无效，则返回false
							return false;
						}
					}

					for (let i = 0; i < lines.length; i++) {
						const line = lines[i];
						const parts = line.split(',');

						if (parts.length < 2) {
							errors.push(`第 ${i + 1} 行格式错误：${line}`);
							continue;
						}

						const title = parts[0].trim();
						const pullUrl = parts.slice(1).join(',').trim(); // 处理URL中可能包含逗号的情况

						if (!title || !pullUrl) {
							errors.push(`第 ${i + 1} 行数据不完整：${line}`);
							continue;
						}

						// 验证URL格式和m3u8后缀
						if (!isValidM3U8Url(pullUrl)) {
							errors.push(`第 ${i + 1} 行URL格式错误或非m3u8格式：${pullUrl}`);
							continue;
						}

						importList.push({ title, pullUrl });
					}

					if (errors.length > 0) {
						ElMessageBox.alert(errors.join('\n'), '数据格式错误', {
							type: 'warning',
							dangerouslyUseHTMLString: false
						});
						done();
						return;
					}

					if (importList.length === 0) {
						ElMessage.warning('没有有效的数据可导入');
						done();
						return;
					}

					// 确认导入
					await ElMessageBox.confirm(
						`将导入 ${importList.length} 条数据，是否继续？`,
						'确认导入',
						{
							type: 'info'
						}
					);

					// 批量创建
					let successCount = 0;
					let failCount = 0;

					for (const item of importList) {
						try {
							await service.video.live.add({
								title: item.title,
								pullUrl: item.pullUrl,
								category_id: data.category_id,
								status: data.status || 1,
								image: image
							});
							successCount++;
						} catch (error: any) {
							failCount++;
							console.error(`导入失败：${item.title}`, error);
						}
					}

					ElMessage.success(`导入完成！成功：${successCount} 条，失败：${failCount} 条`);

					// 刷新列表
					Crud.value?.refresh();
					close();
				} catch (error: any) {
					if (error !== 'cancel') {
						ElMessage.error(error.message || '导入失败');
					}
					done();
				}
			}
		}
	});
}
</script>

<style lang="scss" scoped>
#playerRefDom {
	width: 100%;
	height: 500px;
}
</style>
