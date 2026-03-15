<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<el-button @click="init">{{ t('初始化') }}</el-button>
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
import { ElMessage } from 'element-plus';
import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';

const { service } = useCool();
const { t } = useI18n();

//初始化
function init() {
	service.member.monthlyCheckinConfig.initDefault().then(data => {
		if (data.status) {
			ElMessage.success(t('初始化成功'));
		} else {
			ElMessage.error(t('初始化失败'));
		}
		refresh();
	});
}

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('月份'),
			prop: 'month',
			component: {
				name: 'el-input-number',
				props: { clearable: true, min: 1, max: 12, step: 1, 'step-strictly': true }
			},
			value: 1,
			required: true
		},
		{
			label: t('日期'),
			prop: 'day',
			component: {
				name: 'el-input-number',
				props: {
					clearable: true,
					min: 1,
					// max:获取当前月份的天数
					max: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
					step: 1,
					'step-strictly': true
				}
			},
			value: 1,
			required: true
		},
		{
			label: t('签到获得的积分数额'),
			prop: 'score',
			component: {
				name: 'el-input-number',
				props: { clearable: true, min: 1, step: 1, 'step-strictly': true }
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
			label: t('备注'),
			prop: 'remark',
			component: { name: 'el-input', props: { clearable: true } }
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id', minWidth: 120 },
		{ label: t('月份'), prop: 'month', minWidth: 120 },
		{ label: t('日期'), prop: 'day', minWidth: 120 },
		{ label: t('签到获得的积分数额'), prop: 'score', minWidth: 120 },
		{ label: t('是否启用'), prop: 'enabled', minWidth: 120 },
		{ label: t('备注'), prop: 'remark', minWidth: 120 },
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
const Search = useSearch({
	items: [
		{
			label: t('月份'),
			prop: 'month',
			component: {
				name: 'el-input-number',
				props: { clearable: true, min: 1, max: 12, step: 1, 'step-strictly': true }
			},
			value: 1,
			required: true
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.member.monthlyCheckinConfig
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
