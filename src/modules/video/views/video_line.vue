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
	name: 'video-video-line'
});

import { useCrud, useTable, useUpsert, useSearch } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import collectionSelect from '../components/collection-select.vue';

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('影视ID'),
			prop: 'video_id',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('影视名称'),
			prop: 'video_name',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('名称'),
			prop: 'collection_name',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('资源id'),
			prop: 'collection_id',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('关联播放器ID'),
			prop: 'player_id',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('排序'),
			prop: 'sort',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('标识'),
			prop: 'tag',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('影视ID'), prop: 'video_id', minWidth: 120 },
		{ label: t('影视名称'), prop: 'video_name', minWidth: 120 },
		{ label: t('名称'), prop: 'collection_name', minWidth: 120 },
		{ label: t('资源id'), prop: 'collection_id', minWidth: 120 },
		{ label: t('关联播放器ID'), prop: 'player_id', minWidth: 120 },
		{ label: t('排序'), prop: 'sort', minWidth: 120 },
		{ label: t('标识'), prop: 'tag', minWidth: 120 },
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
const Search = useSearch({
	items: [
		{
			label: t('资源名称'),
			prop: 'collection_id',
			component: {
				vm: collectionSelect
			}
		},
		{
			label: t('影视ID'),
			prop: 'video_id',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		},
		{
			label: t('影视名称'),
			prop: 'keyWord',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.video_line
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
