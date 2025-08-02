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
			<!-- 条件搜索 -->
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
</template>

<script lang="ts" setup>
import { useDict } from '/$/dict';
import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';

defineOptions({
	name: 'application-feedback-info'
});

const { service } = useCool();
const { t } = useI18n();
const { dict } = useDict();
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('影视名'),
			prop: 'videoName',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: t('反馈类型'),
			prop: 'feedbackType',
			required: true,
			component: {
				name: 'el-select',
				options: dict.get('feedback_type')
			}
		},
		{
			label: t('反馈内容'),
			prop: 'content',
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 4
				}
			},
			required: true
		},
		{
			label: t('选择影视'),
			prop: 'videoId',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: t('资源'),
			prop: 'videoUrl',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: t('选择资源'),
			prop: 'playLineId',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('影视名'), prop: 'videoName', minWidth: 120 },
		{ label: t('类型'), prop: 'feedbackType', minWidth: 120, dict: dict.get('feedback_type') },
		{ label: t('反馈内容'), prop: 'content', minWidth: 120 },
		{ label: t('影视id'), prop: 'videoId', minWidth: 120 },
		{ label: t('资源'), prop: 'videoUrl', minWidth: 120 },
		{ label: t('资源id'), prop: 'playLineId', minWidth: 120 },
		{ label: t('创建用户ID'), prop: 'createUserId', minWidth: 120 },
		{ label: t('更新用户ID'), prop: 'updateUserId', minWidth: 120 },
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc',
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updateTime',
			minWidth: 170,
			sortable: 'custom',
			component: { name: 'cl-date-text' }
		},
		{ minWidth: 300, type: 'op', buttons: ['edit', 'delete', 'info'] }
	]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.application.feedbackInfo
	},
	app => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
