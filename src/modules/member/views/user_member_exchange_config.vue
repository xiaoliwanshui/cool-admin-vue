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
	name: 'user-member-exchange-config'
});

import { useCrud, useTable, useUpsert, useSearch } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('兑换名称'),
			prop: 'exchangeName',
			component: {
				name: 'el-input',
				props: {
					clearable: true,
					placeholder: t('请输入兑换名称')
				}
			},
			required: true
		},
		{
			label: t('所需积分'),
			prop: 'requiredScore',
			component: {
				name: 'el-input-number',
				props: {
					clearable: true,
					min: 0,
					placeholder: t('请输入所需积分')
				}
			},
			required: true
		},
		{
			label: t('兑换天数'),
			prop: 'days',
			component: {
				name: 'el-input-number',
				props: {
					clearable: true,
					min: 0,
					placeholder: t('请输入兑换天数')
				}
			},
			required: true
		},
		{
			label: t('是否启用'),
			prop: 'enabled',
			value: 1,
			component: {
				name: 'cl-switch'
			},
			required: true
		},
		{
			label: t('排序'),
			prop: 'sort',
			value: 0,
			component: {
				name: 'el-input-number',
				props: {
					clearable: true,
					min: 0,
					placeholder: t('请输入排序值')
				}
			}
		},
		{
			label: t('备注'),
			prop: 'remark',
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					rows: 3,
					clearable: true,
					placeholder: t('请输入备注信息')
				}
			}
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('兑换名称'), prop: 'exchangeName', minWidth: 150 },
		{ label: t('所需积分'), prop: 'requiredScore', minWidth: 120 },
		{ label: t('兑换天数'), prop: 'days', minWidth: 120 },
		{
			label: t('是否启用'),
			prop: 'enabled',
			minWidth: 100,
			component: {
				name: 'cl-switch'
			}
		},
		{
			label: t('排序'),
			prop: 'sort',
			minWidth: 80,
			sortable: 'custom'
		},
		{
			label: t('备注'),
			prop: 'remark',
			minWidth: 200,
			showOverflowTooltip: true
		},
		{ label: t("创建用户ID"), prop: "createUserId", minWidth: 120 },
		{ label: t("更新用户ID"), prop: "updateUserId", minWidth: 120 },
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
		service: service.member.memberExchangeConfig
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
