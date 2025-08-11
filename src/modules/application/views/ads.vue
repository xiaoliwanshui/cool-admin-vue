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
	name: 'application-ads'
});

const { service } = useCool();
const { t } = useI18n();
const { dict } = useDict();
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('选择应用ID'),
			prop: 'appId',
			component: { name: 'el-input', props: { clearable: true } },
			span: 24,
			required: true
		},
		{
			label: t('广告ID'),
			prop: 'adsId',
			component: { name: 'el-input', props: { clearable: true } },
			span: 24,
			required: true
		},
		{
			label: t('广告类型'),
			prop: 'type',
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('ads_type')
				}
			},
			span: 24,
			required: true
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('广告类型'), prop: 'type', minWidth: 240, dict: dict.get('ads_type') },
		{ label: t('应用ID'), prop: 'appId', minWidth: 240 },
		{ label: t('广告ID'), prop: 'adsId', minWidth: 240 },
		{ label: t('创建用户ID'), prop: 'createUserId', minWidth: 240 },
		{ label: t('更新用户ID'), prop: 'updateUserId', minWidth: 240 },
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
		{ type: 'op', buttons: ['edit', 'delete'] }
	]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.application.ads
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
