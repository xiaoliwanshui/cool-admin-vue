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
			<!-- 关键字搜索 -->
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
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="video-player" setup>
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('名称'),
			prop: 'name',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: t('标签'),
			prop: 'tag',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } },
			required: true
		},
		{
			label: t('key'),
			prop: 'key',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: t('排序'),
			prop: 'sort',
			hook: 'number',
			component: { name: 'el-input-number' },
			required: true
		},
		{
			label: t('类型'),
			prop: 'type',
			component: {
				name: 'el-select',
				options: [
					{ value: 'web', label: t('页面类型') },
					{ value: 'custom', label: t('自定义类型') }
				]
			},
			value: [],
			required: true
		},
		{
			label: t('状态'),
			prop: 'status',
			flex: false,
			component: { name: 'cl-switch' },
			required: true
		},
		{ label: t('介绍'), prop: 'introduce', component: { name: 'cl-editor-wang' } },
		{ label: t('代码'), prop: 'code', component: { name: 'cl-editor-monaco' } },
		{
			label: t('解析模式'),
			prop: 'parse_mod',
			component: {
				name: 'el-select',
				options: [
					{ value: '1', label: t('解析模式') },
					{ value: '2', label: t('高级模式') },
					{ value: '3', label: t('json解析模式') }
				]
			},
			required: true
		},
		{
			label: t('解析地址'),
			prop: 'parseAddress',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('解析字段'),
			prop: 'parseColumn',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } },
			required: true
		},
		{
			label: t('json服务器'),
			prop: 'jsonServer',
			component: { name: 'el-input', props: { clearable: true } }
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('名称'), prop: 'name', minWidth: 140 },
		{ label: t('key'), prop: 'key', minWidth: 140 },
		{ label: t('标签'), prop: 'tag', showOverflowTooltip: true, minWidth: 200 },
		{ label: t('排序'), prop: 'sort', minWidth: 140 },
		{
			label: t('类型'),
			prop: 'type',
			dict: [
				{ value: 'web', label: t('页面类型') },
				{ value: 'custom', label: t('自定义类型') }
			],
			dictColor: true,
			minWidth: 120
		},
		{ label: t('状态'), prop: 'status', minWidth: 100, component: { name: 'cl-switch' } },
		{
			label: t('介绍'),
			prop: 'introduce',
			minWidth: 120,
			component: { name: 'cl-editor-preview', props: { name: 'wang' } }
		},
		{
			label: t('代码'),
			prop: 'code',
			minWidth: 120,
			component: { name: 'cl-editor-preview', props: { name: 'monaco' } }
		},
		{
			label: t('解析模式'),
			prop: 'parse_mod',
			dict: [
				{ value: '1', label: t('解析模式') },
				{ value: '2', label: t('高级模式') },
				{ value: '3', label: t('json解析模式') }
			],
			dictColor: true,
			minWidth: 120
		},
		{ label: t('解析地址'), prop: 'parseAddress', minWidth: 140 },
		{ label: t('解析字段'), prop: 'parseColumn', showOverflowTooltip: true, minWidth: 200 },
		{ label: t('json服务器'), prop: 'jsonServer', minWidth: 140 },
		{
			label: t('创建时间'),
			prop: 'createdAt',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updatedAt',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
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
		{ type: 'op', buttons: [t('edit'), t('delete')] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.player
	},
	app => {
		app.refresh();
	}
);
</script>