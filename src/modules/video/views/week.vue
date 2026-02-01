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
			<cl-filter :label="t('日期')">
				<cl-select
					:options="dict.get('week')"
					:width="140"
					check-strictly
					prop="week"
					tree
				/>
			</cl-filter>
			<!-- 搜索组件 -->
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
		<!--		<cl-form ref="Form" />-->
		<cl-upsert ref="Upsert">
			<template #slot-video-select="{ scope }">
				<video-select
					:video-id="scope?.videoId || scope?.video_id"
					@change="videoSelectChange"
				/>
			</template>
		</cl-upsert>
	</cl-crud>
</template>

<script lang="ts" name="video-weekId" setup>
import { useCrud, useForm, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ref, watch } from 'vue';
import { useDict } from '/$/dict';
import VideoSelect from '/$/video/components/video-select.vue';
import videoSelect from '/$/video/components/video-select.vue';
import { useI18n } from 'vue-i18n';

const { service, route, router } = useCool();
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const { dict } = useDict();
const { t } = useI18n();

const Form = useForm();

// cl-search 配置
const Search = useSearch({
	items: [
		{
			label: t('影视'),
			prop: 'videoId',
			component: {
				vm: videoSelect,
				props: {
					onChange(data) {
						if (data) {
							Search.value.setForm('videoId', data.id);
						} else {
							Search.value.setForm('videoId', undefined);
						}
					}
				}
			}
		}
	]
});

// 处理路由参数变化，更新搜索条件并刷新列表
function handleRouteQuery(crudInstance?: any) {
	const crudApp = crudInstance || Crud.value;
	const videoId = route.query.video_id;

	if (videoId) {
		// 设置搜索表单的 video_id 值
		Search.value?.setForm('video_id', videoId);

		// 刷新列表，带上 video_id 参数
		crudApp?.refresh({
			video_id: videoId,
			page: 1
		});
	} else {
		// 清空搜索条件
		Search.value?.setForm('video_id', '');
		// 刷新列表
		crudApp?.refresh({
			page: 1
		});
	}
}

// cl-crud
const Crud = useCrud(
	{
		service: service.video.week
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

const videoSelectChange = (data: any) => {
	if (data) {
		Upsert.value.setForm('videoId', data.id);
		// 如果需要同时设置其他字段，也可以在这里添加
	}
};

const Upsert = useUpsert({
	items: [
		{
			label: t('视频'),
			prop: 'videoId',
			component: {
				name: 'slot-video-select'
			},
			required: true
		},
		{
			label: t('日期'),
			prop: 'week',
			component: {
				name: 'cl-select',
				props: {
					tree: true,
					checkStrictly: true,
					options: dict.get('week')
				}
			},
			required: true
		},
		{
			label: t('时间'),
			prop: 'time',
			component: {
				name: 'el-time-select',
				props: {
					start: '00:00',
					end: '23:59',
					step: '00:01'
				}
			},
			required: true
		},
		{
			label: t('备注'),
			prop: 'remarks',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } }
		},
		{
			label: t('排序'),
			prop: 'sort',
			hook: 'number',
			value: 0,
			component: { name: 'el-input-number' }
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{
			label: t('日期'),
			prop: 'week',
			dict: dict.get('week'),
			dictColor: true,
			minWidth: 120
		},
		{
			label: t('时间'),
			prop: 'time',
			minWidth: 120
		},
		{ label: t('影片标题'), prop: 'title', minWidth: 140 },
		{
			label: t('分类'),
			prop: 'category_id',
			dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{
			label: t('影片封面图'),
			prop: 'surface_plot',
			minWidth: 100,
			component: { name: 'cl-image', props: { size: 60 } }
		},
		{ label: t('备注'), prop: 'remarks', showOverflowTooltip: true, minWidth: 200 },
		{ label: t('排序'), prop: 'sort', minWidth: 140 },

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
			width: 350,
			buttons: [
				'info',
				'edit',
				'delete',
				{
					label: t('视频详情'),
					type: 'primary',
					onClick({ scope }) {
						router.push({
							path: '/video/videos',
							query: {
								id: scope.row.video_id || scope.row.videoId
							}
						});
					}
				}
			]
		}
	]
});
</script>
