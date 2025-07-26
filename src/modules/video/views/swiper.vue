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
			<cl-filter label="分类">
				<cl-select
					:options="dict.get('video_category')"
					:width="140"
					check-strictly
					prop="category"
					tree
				/>
			</cl-filter>
			<cl-search-key placeholder="搜索关键字"/>
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
	name: 'video-swiper'
});

const { dict } = useDict();
const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('标题'),
			prop: 'title',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('图片'),
			prop: 'image',
			component: { name: 'cl-upload', props: { clearable: true } }
		},
		{
			label: t('页面'),
			prop: 'path',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('选择关联'),
			prop: 'relatedId',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('类型'),
			prop: 'category',
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('video_category'),
					'check-strictly': true
				}
			}
		},
		{
			label: t('排序'),
			prop: 'sort',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: '状态',
			prop: 'status',
			flex: false,
			component: {
				name: 'cl-switch',
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true,
			value: 1
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('标题'), prop: 'title', minWidth: 120 },
		{
			label: t('图片'),
			prop: 'image',
			minWidth: 120,
			component: {
				name: 'cl-image'
			}
		},
		{
			label: '分类',
			prop: 'category',
			dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{ label: t('页面'), prop: 'path', minWidth: 120 },
		{ label: t('关联ID'), prop: 'relatedId', minWidth: 120 },
		{ label: t('排序'), prop: 'sort', minWidth: 120 },
		{ label: t('状态'), prop: 'status', minWidth: 120 },
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
		service: service.video.swiper,
	},
	app => {
		app.refresh();
	}
);


</script>
