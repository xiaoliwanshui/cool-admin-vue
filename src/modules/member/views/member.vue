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
defineOptions({
	name: 'user-member'
});

import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('积分'),
			prop: 'score',
			component: { name: 'el-input-number', props: { clearable: true } },
			required: true
		},
		{
			label: t('余额'),
			prop: 'balance',
			component: { name: 'el-input-number', props: { clearable: true } },
			required: true
		},
		{
			label: t('会员等级'),
			prop: 'level',
			component: { name: 'el-input-number', props: { clearable: true } },

			required: true
		},
		{
			label: t('状态'),
			prop: 'status',
			component: { name: 'cl-switch' },
			required: true
		},

		{
			label: t('时间范围'),
			prop: 'time',
			component: {
				name: 'el-date-picker',
				props: {
					type: 'datetimerange',
					valueFormat: 'YYYY-MM-DD HH:mm:ss',
					defaultTime: ['2000-01-31T16:00:00.000Z', '2000-02-01T15:59:59.000Z']
				}
			},
			span: 12,
			hook: 'datetimeRange'
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id', minWidth: 120 },
		{ label: t('积分'), prop: 'score', minWidth: 120 },
		{ label: t('余额'), prop: 'balance', minWidth: 120 },
		{ label: t('会员等级'), prop: 'level', minWidth: 120 },
		{ label: t('状态'), prop: 'status', minWidth: 120 },
		{
			label: t('开始时间'),
			prop: 'startTime',
			minWidth: 170,
			sortable: 'custom',
			component: { name: 'cl-date-text' }
		},
		{
			label: t('结束时间'),
			prop: 'endTime',
			minWidth: 170,
			sortable: 'custom',
			component: { name: 'cl-date-text' }
		},
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
		{ type: 'op', buttons: ['edit', 'delete'] }
	]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.member.member
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
