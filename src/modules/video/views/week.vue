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
		<!--		<cl-form ref="Form" />-->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="video-weekId" setup>
import { useCrud, useForm, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ref } from 'vue';
import { useDict } from '/$/dict';
import WeekFrom from '/$/video/components/week-from.vue';
import { useI18n } from 'vue-i18n';

const { service } = useCool();
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const weekId = ref<number>(0);
const videoAlbumVisible = ref<boolean>(false);
const { dict } = useDict();
const { t } = useI18n();

const Form = useForm();

// cl-crud
const Crud = useCrud(
	{
		service: service.video.week
	},
	app => {
		app.refresh();
	}
);
const Upsert = useUpsert({
	items: [
		{
			label: t('视频'),
			prop: 'videoId',
			component: {
				vm: WeekFrom
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
		{ type: 'op', width: 250, buttons: ['info', 'edit', 'delete'] }
	]
});
</script>
