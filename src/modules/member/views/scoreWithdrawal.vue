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
	name: 'member-score-withdrawal'
});

import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import { reactive } from 'vue';

const { service } = useCool();
const { t } = useI18n();

// 选项
const options = reactive({
	paymentType: [
		{ label: t('微信'), value: 0 },
		{ label: t('支付宝'), value: 1 },
		{ label: t('银行卡'), value: 2 }
	],
	status: [
		{ label: t('未通过'), value: 0 },
		{ label: t('已到账'), value: 1 }
	]
});

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('选择创建用户'),
			prop: 'createUserId',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('选择更新用户'),
			prop: 'updateUserId',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('提现积分数量'),
			prop: 'score',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('提现金额'),
			prop: 'amount',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('提现状态'),
			prop: 'status',
			component: { name: 'el-select', options: options.status },
			span: 12,
			required: true
		},
		{
			label: t('审核备注'),
			prop: 'auditRemark',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('收款方式'),
			prop: 'paymentType',
			component: { name: 'el-radio-group', options: options.paymentType },
			value: 0,
			required: true
		},
		{
			label: t('收款账号'),
			prop: 'paymentAccount',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('备注'),
			prop: 'remark',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('创建用户ID'), prop: 'createUserId', minWidth: 120 },
		{ label: t('更新用户ID'), prop: 'updateUserId', minWidth: 120 },
		{ label: t('提现积分数量'), prop: 'score', minWidth: 120 },
		{ label: t('提现金额'), prop: 'amount', minWidth: 120 },
		{
			label: t('提现状态'),
			prop: 'status',
			minWidth: 120,
			dict: options.status
		},
		{ label: t('ip'), prop: 'ipAddress', minWidth: 120 },
		{ label: t('审核备注'), prop: 'auditRemark', minWidth: 120 },
		{
			label: t('收款方式'),
			prop: 'paymentType',
			minWidth: 120,
			dict: options.paymentType
		},
		{ label: t('收款账号'), prop: 'paymentAccount', minWidth: 120 },
		{ label: t('备注'), prop: 'remark', minWidth: 120 },
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
		service: service.member.scoreWithdrawal
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
