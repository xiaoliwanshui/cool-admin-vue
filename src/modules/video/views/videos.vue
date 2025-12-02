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
					check-strictly
					prop="category_id"
					tree
				/>
			</cl-filter>
			<cl-filter :label="t('视频ID')">
				<el-input
					v-model="videoIdValue"
					:style="{ width: '140px' }"
					clearable
					@blur="handleIdChange"
					@clear="handleIdClear"
				/>
			</cl-filter>
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
	<cl-form ref="Form"></cl-form>
</template>

<script lang="ts" name="video-videos" setup>
import { useCrud, useForm, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useDict } from '/$/dict';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const Form = useForm();

const { service, router, route } = useCool();
const { dict } = useDict();
const { t } = useI18n();

// 视频ID输入框的值
const videoIdValue = ref<string | number>('');

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
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			group: 'base'
		},
		{
			label: t('影片标签'),
			prop: 'video_tag',
			component: { name: 'el-input', props: { clearable: true } },
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
			label: t('总集数'),
			prop: 'number',
			hook: 'number',
			component: { name: 'el-input-number' },
			span: 8,
			group: 'base'
		},
		{
			label: t('VIP片集数(从多少集开始)'),
			prop: 'vipNumber',
			hook: 'number',
			component: { name: 'el-input-number' },
			defaultValue: 1,
			span: 8,
			group: 'base'
		},
		{
			label: t('更新集数'),
			prop: 'total',
			hook: 'number',
			component: { name: 'el-input-number' },
			span: 8,
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
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{
			label: t('语言'),
			prop: 'language',
			dict: dict.get('language'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
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
						await syncVideo(scope.row.title);
					}
				}
			]
		},
		{ label: t('创建人'), prop: 'createUserId', minWidth: 140 },
		{ label: t('修改人'), prop: 'updateUserId', minWidth: 140 }
	]
});

const syncVideo = async (keyWord: string) => {
	service.video.collection.collection_keyword({
		keyWord: keyWord
	});
};

function open() {
	Form.value?.open({
		title: '数据采集',
		items: [
			{
				label: '剧名',
				prop: 'keyWord',
				required: true,
				component: {
					name: 'el-input'
				}
			}
		],
		on: {
			async submit(data, { close, done }) {
				await syncVideo(data.keyWord);
				close();
			}
		}
	});
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
