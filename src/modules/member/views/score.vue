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
	name: 'user-score'
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
			label: t('积分变化数量'),
			prop: 'score',
			component: { name: 'el-input-number', props: { clearable: true } },
			required: true
		},
		{
			label: t('变更类型'),
			prop: 'type',
			component: {
				name: 'cl-select',
				props: {
					clearable: true,
					options: [
						{ label: '增加', value: 1 },
						{ label: '减少', value: 0 }
					]
				}
			},
			required: true
		},
		{
			label: t('变更原因'),
			prop: 'reason',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('关联业务类型'),
			prop: 'businessType',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('选择关联业务'),
			prop: 'businessId',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('选择创建用户'),
			prop: 'createUserId',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('选择更新用户'),
			prop: 'updateUserId',
			component: { name: 'el-input', props: { clearable: true } }
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id', minWidth: 120 },
		{ label: t('积分变化数量'), prop: 'score', minWidth: 120 },
		{
			label: t('变更类型'),
			prop: 'type',
			dict: [
				{ label: '增加', value: 1 },
				{ label: '减少', value: 0 }
			],
			minWidth: 120
		},
		{ label: t('变更原因'), prop: 'reason', minWidth: 120 },
		{ label: t('关联业务类型'), prop: 'businessType', minWidth: 120 },
		{ label: t('关联业务ID'), prop: 'businessId', minWidth: 120 },
		{ label: t('创建用户ID'), prop: 'createUserId', minWidth: 120 },
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc',
			component: { name: 'cl-date-text' }
		},
		{ label: t('更新用户ID'), prop: 'updateUserId', minWidth: 120 },
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
		service: service.member.score
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
