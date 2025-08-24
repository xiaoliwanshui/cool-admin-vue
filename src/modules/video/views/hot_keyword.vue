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
			<cl-table ref="Table">
				<template #column-bgColor="{ scope }">
					<el-tag v-if="scope.row.bgColor" :color="scope.row.bgColor"
						>{{ scope.row.bgColor ?? '暂无颜色' }}
					</el-tag>
				</template>
				<template #column-fontColor="{ scope }">
					<el-tag v-if="scope.row.fontColor" :color="scope.row.fontColor"
						>{{ scope.row.fontColor ?? '暂无颜色' }}
					</el-tag>
				</template>
			</cl-table>
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
	name: 'video-hot-key-word'
});

const { service } = useCool();
const { t } = useI18n();
const { dict } = useDict();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('标题'),
			prop: 'keyWord',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('分类'),
			prop: 'category_id',
			component: {
				name: 'cl-select',
				props: {
					options: dict.get('video_category').value
				}
			},
			required: true
		},
		{
			label: t('标签'),
			prop: 'tag',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('排序'),
			prop: 'sort',
			component: { name: 'el-input-number' },
			value: 0
		},
		{
			label: '背景颜色',
			prop: 'bgColor',
			component: {
				name: 'el-color-picker'
			}
		},
		{
			label: '字体颜色',
			prop: 'fontColor',
			component: {
				name: 'el-color-picker'
			}
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('标题'), prop: 'keyWord', minWidth: 120 },
		{
			label: t('分类'),
			prop: 'category_id',
			minWidth: 120,
			dict: dict.get('video_category'),
			dictColor: true
		},
		{
			label: t('标签文本'),
			prop: 'tag',
			minWidth: 120
		},
		{
			label: t('背景颜色'),
			prop: 'bgColor',
			minWidth: 120
		},
		{
			label: t('字体颜色'),
			prop: 'fontColor',
			minWidth: 120
		},
		{
			label: t('排序'),
			prop: 'sort',
			minWidth: 120
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
		service: service.video.hot_keyword
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
