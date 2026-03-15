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
	name: 'user-invite-record'
});

import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import { reactive } from 'vue';

const { service } = useCool();
const { t } = useI18n();

// 选项
const options = reactive({
	loginType: [
		{ label: t('小程序'), value: 0 },
		{ label: t('公众号'), value: 1 },
		{ label: t('H5'), value: 2 },
		{ label: t('APP'), value: 3 }
	]
});

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('邀请码'),
			prop: 'code',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('登录方式'),
			prop: 'loginType',
			component: { name: 'el-radio-group', options: options.loginType },
			value: 0,
			required: true
		},
		{
			label: t('IP'),
			prop: 'ipAddress',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
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

		{ label: t('邀请码'), prop: 'code', minWidth: 120 },
		{
			label: t('登录方式'),
			prop: 'loginType',
			minWidth: 120,
			dict: options.loginType
		},
		{ label: t('IP'), prop: 'ipAddress', minWidth: 120 },
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
		{ label: t('创建用户ID'), prop: 'createUserId', minWidth: 120 },
		{ label: t('更新用户ID'), prop: 'updateUserId', minWidth: 120 },
		{ type: 'op', buttons: ['edit', 'delete'] }
	]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.user.inviteRecord
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
