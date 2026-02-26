<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 导出按钮 -->
			<cl-export-btn :columns="Table?.columns" />

			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key :placeholder="t('搜索关键字')" />
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

<script lang="ts" name="video-collection" setup>
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { VIDEOPARAMS } from '/$/video/utils/VideoParams';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('名称'),
			prop: 'name',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('参数'),
			prop: 'param',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('地址'),
			prop: 'address',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('解析地址'),
			prop: 'address',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('APIKey'),
			prop: 'apiKey',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('说明'),
			prop: 'desc',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('排序'),
			prop: 'sort',
			component: { name: 'el-input-number' }
		}
	]
});

const syncCategory = async scope => {
	service.video.collection_category.sync_category(scope.row);
};

const syncVideo = async (scope, params: VIDEOPARAMS) => {
	await service.video.collection.collection_day({
		collection: scope.row,
		params
	});
	ElMessage.success('执行成功');
};

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id', minWidth: 140 },
		{ label: t('名称'), prop: 'name', minWidth: 140 },
		{ label: t('地址'), prop: 'address', minWidth: 140 },
		{ label: t('解析地址'), prop: 'parse_address', minWidth: 140 },
		{ label: t('APIKey'), prop: 'apiKey', minWidth: 140 },
		{ label: t('参数'), prop: 'param', minWidth: 140 },
		{ label: t('说明'), prop: 'desc', minWidth: 140 },
		{ label: t('排序'), prop: 'sort', minWidth: 140 },
		{ label: t('创建人'), prop: 'createUserId', minWidth: 140 },
		{ label: t('修改人'), prop: 'updateUserId', minWidth: 140 },
		{ label: t('创建时间'), prop: 'createTime', minWidth: 140, sortable: 'desc' },
		{ label: t('更新时间'), prop: 'updateTime', minWidth: 140 },
		{
			type: 'op',
			width: 600,
			buttons: [
				{
					label: t('同步分类'),
					async onClick({ scope }) {
						await syncCategory(scope);
					}
				},
				{
					label: t('采集全部'),
					async onClick({ scope }) {
						await syncVideo(scope, {});
					}
				},
				{
					label: t('采集本周'),
					async onClick({ scope }) {
						await syncVideo(scope, {
							op: 'week',
							h: 24 * 7
						});
					}
				},
				{
					label: t('采集今日'),
					async onClick({ scope }) {
						await syncVideo(scope, {
							op: 'day',
							h: 24
						});
					}
				},
				t('edit'),
				t('delete')
			]
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.collection
	},
	app => {
		app.refresh();
	}
);
</script>
