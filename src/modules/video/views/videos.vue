<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<el-button @click="open">采集数据</el-button>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 导出按钮 -->
			<cl-export-btn :columns="Table?.columns" />
			<cl-flex1 />
			<!-- 字典 -->
			<cl-filter :label="t('分类')">
				<cl-select
					:options="dict.get('video_category')"
					:width="140"
					allLevelsId
					check-strictly
					prop="category_id"
					tree
				/>
			</cl-filter>
			<!-- <cl-filter :label="t('视频ID')">
				<el-input
					v-model="videoIdValue"
					:style="{ width: '140px' }"
					clearable
					@blur="handleIdChange"
					@clear="handleIdClear"
				/>
			</cl-filter> -->
			<cl-filter :label="t('入库')">
				<cl-select :options="play_url_put_inDict" :width="140" prop="play_url_put_in" />
			</cl-filter>
			<cl-filter :label="t('搜索榜单分类')">
				<cl-select
					:options="dict.get('search_type')"
					:width="140"
					prop="searchRecommendType"
				/>
			</cl-filter>
			<!-- 关键字搜索 -->
			<cl-search-key />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table">
				<template #column-video_class="{ scope }">
					<template v-if="scope.row.video_class">
						<el-tag
							v-for="(item, index) in typeof scope.row.video_class === 'string'
								? scope.row.video_class.split(',').filter(Boolean)
								: Array.isArray(scope.row.video_class)
									? scope.row.video_class
									: []"
							:key="index"
							size="small"
							style="margin-right: 4px; margin-bottom: 4px"
						>
							{{ item.trim() }}
						</el-tag>
					</template>
				</template>
				<template #column-video_tag="{ scope }">
					<template v-if="scope.row.video_tag">
						<el-tag
							v-for="(item, index) in typeof scope.row.video_tag === 'string'
								? scope.row.video_tag.split(',').filter(Boolean)
								: Array.isArray(scope.row.video_tag)
									? scope.row.video_tag
									: []"
							:key="index"
							size="small"
							style="margin-right: 4px; margin-bottom: 4px"
						>
							{{ item.trim() }}
						</el-tag>
					</template>
				</template>
			</cl-table>
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
	<cl-form ref="Form">
		<!-- 动态编辑标签插槽 - 共用 -->
		<template #slot-tags="{ scope }">
			<div class="tag-editor">
				<!-- 标签列表 -->
				<div
					class="tag-list"
					style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px"
				>
					<el-tag
						v-for="(title, index) in scope.titles"
						:key="index"
						:type="scope.selectedKeyword === title ? 'primary' : undefined"
						closable
						style="cursor: pointer"
						@click="handleTagSelect(scope, title)"
						@close.stop="handleTagClose(scope, index)"
					>
						{{ title }}
					</el-tag>
				</div>
				<!-- 输入框用于添加新标签 -->
				<el-input
					v-model="tagInputValue"
					clearable
					placeholder="输入剧名，支持用逗号(,)或分号(;)分割多个标题，或输入数组格式如：[标题1,标题2]"
					@clear="tagInputValue = ''"
					@keyup.enter="handleAddTag(scope)"
				>
					<template #append>
						<el-button @click="handleAddTag(scope)">添加</el-button>
					</template>
				</el-input>
			</div>
		</template>
	</cl-form>
</template>

<script lang="ts" name="video-videos" setup>
import { useCrud, useForm, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useDict } from '/$/dict';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import { ElMessage } from 'element-plus';

const Form = useForm();

const { service, router, route } = useCool();
const { dict } = useDict();
const { t } = useI18n();

// 视频ID输入框的值
const videoIdValue = ref<string | number>('');

// 存储选中的标题列表
const selectedTitles = ref<string[]>([]);

// 标签输入框的值
const tagInputValue = ref<string>('');

// 当前激活的 tab
const activeTab = ref<string>('collection');

const play_url_put_inDict = [
	{ value: 1, label: t('已入库') },
	{ value: 0, label: t('未入库') }
];
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			type: 'tabs',
			props: {
				labels: [
					{
						label: t('基础信息'),
						value: 'base'
					},
					{
						label: t('评分'),
						value: 'score'
					},
					{
						label: t('图片'),
						value: 'image'
					}
				]
			}
		},
		{
			label: t('影片标题'),
			prop: 'title',
			component: { name: 'el-input', props: { clearable: true } },
			group: 'base'
		},
		{
			label: t('影片副标题'),
			prop: 'sub_title',
			component: { name: 'el-input', props: { clearable: true } },
			group: 'base'
		},
		{
			label: t('影片封面图'),
			prop: 'surface_plot',
			component: { name: 'cl-upload' },
			group: 'image'
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
			label: t('是否推荐'),
			prop: 'recommend',
			flex: false,
			component: { name: 'cl-switch' },
			span: 8,
			group: 'base'
		},
		{
			label: t('是否轮播'),
			prop: 'cycle',
			flex: false,
			component: { name: 'cl-switch' },
			span: 8,
			group: 'base'
		},

		{
			label: t('影片分类'),
			prop: 'video_class',
			hook: 'splitJoin',
			component: { name: 'el-input-tag', props: { clearable: true, delimiter: ',' } },
			span: 12,
			group: 'base'
		},
		{
			label: t('影片标签'),
			prop: 'video_tag',
			hook: 'splitJoin',
			component: { name: 'el-input-tag', props: { clearable: true, delimiter: ',' } },
			span: 12,
			group: 'base'
		},
		{
			label: t('影视分类'),
			prop: 'category_id',
			span: 12,
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('video_category'),
					checkStrictly: true
				}
			},
			group: 'base'
		},
		{
			label: t('地区'),
			prop: 'region',
			span: 12,
			component: {
				name: 'el-select',
				options: dict.get('area')
			},
			group: 'base'
		},
		{
			label: t('语言'),
			prop: 'language',
			component: {
				name: 'el-select',
				options: dict.get('language')
			},
			span: 12,
			group: 'base'
		},
		{
			label: t('搜索榜单分类'),
			prop: 'searchRecommendType',
			span: 12,
			component: {
				name: 'el-select',
				options: dict.get('search_type'),
				props: {
					clearable: true
				}
			},
			group: 'base'
		},
		{
			label: t('轮播图片'),
			prop: 'cycle_img',
			component: { name: 'cl-upload' },
			group: 'image'
		},
		{
			label: t('日人气'),
			prop: 'popularity_day',
			hook: 'number',
			component: { name: 'el-input-number' },
			group: 'score'
		},
		{
			label: t('周人气'),
			prop: 'popularity_week',
			hook: 'number',
			component: { name: 'el-input-number' },
			group: 'score'
		},
		{
			label: t('月人气'),
			prop: 'popularity_month',
			hook: 'number',
			component: { name: 'el-input-number' },
			group: 'score'
		},
		{
			label: t('总人气'),
			prop: 'popularity_sum',
			hook: 'number',
			component: { name: 'el-input-number' },
			group: 'score'
		},
		{
			label: t('年份'),
			prop: 'year',
			hook: 'number',
			component: { name: 'el-input-number' },
			span: 6,
			group: 'base'
		},

		{
			label: t('总集数'),
			prop: 'number',
			hook: 'number',
			component: { name: 'el-input-number' },
			span: 6,
			group: 'base'
		},
		{
			label: t('VIP片集数(从多少集开始)'),
			prop: 'vipNumber',
			hook: 'number',
			component: { name: 'el-input-number' },
			defaultValue: 1,
			span: 6,
			group: 'base'
		},
		{
			label: t('更新集数'),
			prop: 'total',
			hook: 'number',
			component: { name: 'el-input-number' },
			span: 6,
			group: 'base'
		},
		{
			label: t('横屏海报'),
			prop: 'horizontal_poster',
			component: { name: 'cl-upload' },
			group: 'image'
		},
		{
			label: t('竖屏海报'),
			prop: 'vertical_poster',
			component: { name: 'cl-upload' },
			group: 'image'
		},

		{
			label: t('采集的源地址'),
			prop: 'play_url',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } },
			required: true,
			group: 'base'
		},
		{
			label: t('简介'),
			prop: 'introduce',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } },
			group: 'base'
		},
		{
			label: t('排序'),
			prop: 'sort',
			hook: 'number',
			component: { name: 'el-input-number' },
			group: 'score'
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id', minWidth: 140 },
		{ label: t('影片标题'), prop: 'title', minWidth: 140 },
		{
			label: t('vip'),
			prop: 'vip',
			minWidth: 100,
			component: {
				name: 'cl-switch'
			}
		},
		{
			label: t('影片副标题'),
			prop: 'sub_title',
			minWidth: 140
		},
		{
			label: t('分类'),
			prop: 'category_id',
			dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{
			label: t('搜索榜单分类'),
			prop: 'searchRecommendType',
			dict: dict.get('search_type'),
			minWidth: 150
		},
		{
			label: t('语言'),
			prop: 'language',
			dict: dict.get('language'),
			dictColor: true,
			minWidth: 150
		},
		{
			label: t('地区'),
			prop: 'region',
			dict: dict.get('area'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{
			label: t('影片标签'),
			prop: 'video_tag',
			minWidth: 140
		},
		{
			label: t('影片分类'),
			prop: 'video_class',
			minWidth: 140
		},
		{
			label: t('影片封面图'),
			prop: 'surface_plot',
			minWidth: 100,
			component: { name: 'cl-image', props: { size: 60 } }
		},
		{
			label: t('imd评分'),
			prop: 'imdb_score',
			minWidth: 150,
			component: { name: 'el-rate', props: { disabled: true } }
		},
		{ label: t('iimdID'), prop: 'imdb_score_id', minWidth: 140 },
		{
			label: t('豆瓣评分.百分制'),
			prop: 'douban_score',
			minWidth: 150,
			component: { name: 'el-rate', props: { disabled: true } }
		},
		{ label: t('豆瓣ID'), prop: 'douban_score_id', minWidth: 140 },
		{ label: t('简介'), prop: 'introduce', showOverflowTooltip: true, minWidth: 200 },
		{ label: t('日人气'), prop: 'popularity_day', minWidth: 140 },
		{ label: t('周人气'), prop: 'popularity_week', minWidth: 140 },
		{ label: t('月人气'), prop: 'popularity_month', minWidth: 140 },
		{ label: t('总人气'), prop: 'popularity', minWidth: 140 },
		{ label: t('上映日期'), prop: 'pubdate', minWidth: 140 },
		{
			label: t('状态'),
			prop: 'status',
			minWidth: 100,
			component: {
				name: 'cl-switch',
				props: {
					activeValue: '1',
					inactiveValue: '2'
				}
			}
		},
		// 播放地址是否入库1-1已经入库 0未入库
		{
			label: t('资源是否入库'),
			prop: 'play_url_put_in',
			dict: play_url_put_inDict,
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},

		{ label: t('采集的源地址'), prop: 'play_url', showOverflowTooltip: true, minWidth: 200 },
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
		{
			width: 450,
			type: 'op',
			buttons: [
				'edit',
				'delete',
				'info',
				{
					label: t('线路详情'),
					type: 'primary',
					onClick({ scope }) {
						router.push({
							path: '/video/play_line',
							query: {
								video_id: scope.row.id
							}
						});
					}
				},
				{
					label: t('采集数据'),
					async onClick({ scope }) {
						await syncVideo([scope.row.title]);
					}
				}
			]
		},
		{ label: t('创建人'), prop: 'createUserId', minWidth: 140 },
		{ label: t('修改人'), prop: 'updateUserId', minWidth: 140 }
	]
});

const syncVideo = async (keyWord: string[]) => {
	service.video.collection.collection_keyword({
		keyWord: keyWord
	});
};

function open() {
	// 获取表格选中的数据
	const selection = Table.value?.selection || [];
	// 获取所有选中项的 title 数组
	const titles = selection.map((item: any) => item.title || '').filter((title: string) => title);

	// 更新选中的标题列表
	selectedTitles.value = titles;

	// 清空输入框
	tagInputValue.value = '';
	// 重置 tab
	activeTab.value = 'collection';

	Form.value?.open({
		title: '批量操作',
		width: '800px',
		// 设置默认表单值
		form: {
			titles: titles,
			selectedKeyword: titles.length > 0 ? titles[0] : '',
			searchRecommendType: ''
		},
		items: [
			{
				type: 'tabs',
				props: {
					type: 'card',
					modelValue: activeTab.value,
					labels: [
						{
							label: '采集操作',
							value: 'collection'
						},
						{
							label: '榜单操作',
							value: 'ranking'
						}
					],
					onChange: (value: string) => {
						// 监听 tab 切换，更新 activeTab
						activeTab.value = value;
						// 动态更新搜索榜单分类字段的required
						if (value === 'ranking') {
							Form.value?.setProps('searchRecommendType', { required: true });
							Form.value?.showItem('searchRecommendType');
						} else {
							Form.value?.setProps('searchRecommendType', { required: false });
							Form.value?.hideItem('searchRecommendType');
						}
					}
				}
			},
			// 采集操作
			{
				label: '剧名标签',
				prop: 'titles',
				group: 'collection',
				required: true,
				component: {
					name: 'slot-tags'
				}
			},
			// 榜单操作 - 共用同一个标签编辑器
			{
				label: t('搜索榜单分类'),
				prop: 'searchRecommendType',
				group: 'ranking',
				// 初始状态不验证，在tab切换时动态设置
				required: false,
				hidden: activeTab.value !== 'ranking',
				component: {
					name: 'el-select',
					options: dict.get('search_type'),
					props: {
						clearable: true
					}
				}
			},
			{
				label: '剧名标签',
				prop: 'titles',
				group: 'ranking',
				required: true,
				component: {
					name: 'slot-tags'
				}
			}
		],
		on: {
			open() {
				// 表单打开时，根据当前tab设置搜索榜单分类字段的状态
				if (activeTab.value === 'ranking') {
					Form.value?.setProps('searchRecommendType', { required: true });
					Form.value?.showItem('searchRecommendType');
				} else {
					Form.value?.setProps('searchRecommendType', { required: false });
					Form.value?.hideItem('searchRecommendType');
				}
			},
			async submit(data, { close, done }) {
				try {
					const titles = data.titles || [];
					const currentTab = activeTab.value;

					if (titles.length === 0) {
						done();
						return;
					}

					if (currentTab === 'collection') {
						// 采集操作：执行数据采集
						await syncVideo(titles);
					} else if (currentTab === 'ranking') {
						// 榜单操作：批量更新搜索榜单分类
						const searchRecommendType = data.searchRecommendType;
						if (!searchRecommendType) {
							done();
							return;
						}

						// 根据标题获取视频ID
						const videoIds: number[] = [];

						// 先从表格数据中查找
						const tableData = Table.value?.data || [];
						titles.forEach((title: string) => {
							const video = tableData.find((item: any) => item.title === title);
							if (video && video.id !== undefined && video.id !== null) {
								videoIds.push(Number(video.id));
							}
						});

						// 如果表格中没有找到所有视频，通过接口查询
						if (videoIds.length < titles.length) {
							const missingTitles = titles.filter((title: string) => {
								return !tableData.some((item: any) => item.title === title);
							});

							// 通过标题查询视频ID
							for (const title of missingTitles) {
								try {
									const result = await service.video.videos.page({
										title: title,
										size: 1
									});
									if (
										result.list &&
										result.list.length > 0 &&
										result.list[0].id !== undefined &&
										result.list[0].id !== null
									) {
										videoIds.push(Number(result.list[0].id));
									}
								} catch (error) {
									console.error(`查询视频失败: ${title}`, error);
								}
							}
						}

						if (videoIds.length === 0) {
							ElMessage.warning('未找到对应的视频数据');
							done();
							return;
						}

						// 批量更新搜索榜单分类
						await service.video.videos.updateSearchRecommendType({
							ids: videoIds,
							searchRecommendType: searchRecommendType
						});

						ElMessage.success(`成功更新 ${videoIds.length} 个视频的榜单分类`);
					}

					// 刷新列表
					Crud.value?.refresh();
					close();
				} catch (error: any) {
					console.error('操作失败', error);
					done();
				}
			}
		}
	});
}

// 处理标签关闭
function handleTagClose(scope: any, index: number) {
	if (scope.titles && Array.isArray(scope.titles)) {
		// 创建新数组，移除指定索引的项
		const newTitles = [...scope.titles];
		const deletedTitle = newTitles[index];
		newTitles.splice(index, 1);
		// 更新表单数据
		Form.value?.setForm('titles', newTitles);
		// 如果删除的是当前选中的标签，则选择第一个标签
		if (scope.selectedKeyword === deletedTitle) {
			if (newTitles.length > 0) {
				Form.value?.setForm('selectedKeyword', newTitles[0]);
			} else {
				Form.value?.setForm('selectedKeyword', '');
			}
		}
	}
}

// 处理标签选择
function handleTagSelect(scope: any, title: string) {
	Form.value?.setForm('selectedKeyword', title);
}

// 处理添加标签
function handleAddTag(scope: any) {
	let inputValue = tagInputValue.value.trim();

	// 如果输入框为空，不添加
	if (!inputValue) {
		return;
	}

	// 获取当前的标签列表
	const titles = scope.titles || [];
	const newTitles: string[] = [];

	// 尝试解析数组格式（如 [a, b, c] 或 ["a", "b", "c"]）
	try {
		// 检查是否是数组格式的字符串
		if (inputValue.startsWith('[') && inputValue.endsWith(']')) {
			// 尝试解析为 JSON 数组
			const parsed = JSON.parse(inputValue);
			if (Array.isArray(parsed)) {
				parsed.forEach((item: any) => {
					const title = String(item || '').trim();
					if (title && !titles.includes(title) && !newTitles.includes(title)) {
						newTitles.push(title);
					}
				});
			}
		}
	} catch (e) {
		// 如果不是有效的 JSON，继续使用分割方式
	}

	// 如果没有解析到数组，使用分割方式
	if (newTitles.length === 0) {
		// 先替换中文逗号和分号
		inputValue = inputValue.replace(/，/g, ',').replace(/；/g, ';');

		// 按分号或逗号分割
		const parts = inputValue.split(/[;,]/);

		parts.forEach(part => {
			const title = part.trim();
			if (title && !titles.includes(title) && !newTitles.includes(title)) {
				newTitles.push(title);
			}
		});
	}

	// 如果有新标签，添加到列表
	if (newTitles.length > 0) {
		const updatedTitles = [...titles, ...newTitles];
		Form.value?.setForm('titles', updatedTitles);
		// 自动选中第一个新添加的标签
		Form.value?.setForm('selectedKeyword', newTitles[0]);
	}

	// 清空输入框
	tagInputValue.value = '';
}

// 处理ID清除
function handleIdClear() {
	videoIdValue.value = '';
	// 清空时移除路由参数中的 id
	const query = { ...route.query };
	delete query.id;
	router.replace({
		path: route.path,
		query
	});
	// 刷新列表，不携带 id 参数
	Crud.value?.refresh({
		id: undefined,
		page: 1
	});
}

// 处理ID变化
function handleIdChange() {
	const id = String(videoIdValue.value || '').trim();

	if (id) {
		// 有值时更新路由参数并刷新列表
		router.replace({
			path: route.path,
			query: {
				...route.query,
				id: id
			}
		});
		Crud.value?.refresh({
			id: id,
			page: 1
		});
	} else {
		// 空值时移除路由参数中的 id
		const query = { ...route.query };
		delete query.id;
		router.replace({
			path: route.path,
			query
		});
		// 刷新列表，显式设置 id 为 undefined，确保不携带 id 参数
		Crud.value?.refresh({
			id: undefined,
			page: 1
		});
	}
}

// 处理路由参数变化，更新输入框值并刷新列表
function handleRouteQuery(crudInstance?: any) {
	const crudApp = crudInstance || Crud.value;
	const id = route.query.id;

	if (id && String(id).trim()) {
		// 设置输入框的值
		videoIdValue.value = String(id).trim() as string | number;
		// 刷新列表，带上 id 参数
		crudApp?.refresh({
			id: String(id).trim(),
			page: 1
		});
	} else {
		// 清空输入框
		videoIdValue.value = '';
		// 刷新列表，显式设置 id 为 undefined，确保不携带 id 参数
		crudApp?.refresh({
			id: undefined,
			page: 1
		});
	}
}

// cl-crud
const Crud = useCrud(
	{
		service: service.video.videos
	},
	app => {
		// 初始化时处理路由参数
		handleRouteQuery(app);
	}
);

// 监听路由查询参数变化，当 id 变化时重新刷新
watch(
	() => route.query.id,
	(newId, oldId) => {
		// 只有当 id 真的变化时才处理
		if (newId !== oldId) {
			handleRouteQuery();
		}
	},
	{ immediate: false }
);
</script>

<style lang="scss" scoped>
.tag-editor {
	.tag-list {
		min-height: 40px;
		padding: 8px;
		border: 1px solid var(--el-border-color);
		border-radius: 4px;
		background-color: var(--el-fill-color-lighter);
	}
}
</style>
