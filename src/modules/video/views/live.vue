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
			<cl-filter :label="t('分类')">
				<cl-select
					:options="dict.get('live_category')"
					:width="140"
					check-strictly
					prop="category_id"
					tree
				/>
			</cl-filter>
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

<script lang="ts" name="video-live" setup>
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useDict } from '/$/dict';
import { useI18n } from 'vue-i18n';

const { service } = useCool();
const { dict } = useDict();
const { t } = useI18n();
const image: string = `https://cool-file-1300398902.cos.ap-nanjing.myqcloud.com/app%2Fbase%2F693631ad5c0d48ea95c4db3cadbea02e_%E7%94%B5%E8%A7%86%E5%8F%B0%E5%9B%BE%E6%A0%87%402x%20(2).png`;
// cl-upsert
const Upsert = useUpsert({
	items: [
		{ label: t('标题'), prop: 'title', required: true, component: { name: 'el-input' } },
		{
			label: t('分类'),
			prop: 'category_id',
			required: true,
			component: {
				name: 'el-select',
				options: dict.get('live_category')
			}
		},
		{
			label: t('状态'),
			prop: 'status',
			required: true,
			component: {
				name: 'el-select',
				options: dict.get('liveStatus')
			},
			value: 368
		},
		{
			label: t('图片'),
			prop: 'image',
			required: true,
			component: {
				name: 'cl-upload',
				props: {
					text: t('选择图片')
				}
			},
			value: image
		},
		{ label: t('拉流地址'), prop: 'pullUrl', component: { name: 'el-input' } }
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id' },
		{ label: t('房间号'), prop: 'roomId' },
		{ label: t('标题'), prop: 'title' },
		{ label: t('分类'), prop: 'category_id', dict: dict.get('live_category') },
		{ label: t('图片'), prop: 'image', component: { name: 'cl-image' } },
		{ label: t('状态'), prop: 'status', dict: dict.get('liveStatus') },
		() => {
			return {
				label: t('推流服务器'),
				prop: 'pushUrl'
			};
		},
		() => {
			return {
				label: t('推流码'),
				prop: 'pushCode'
			};
		},
		() => {
			return {
				label: t('拉流地址'),
				prop: 'pullUrl'
			};
		},
		{ label: t('创建时间'), prop: 'createTime' },
		{ label: t('更新时间'), prop: 'updateTime' },
		{ type: 'op', width: 250, buttons: ['info', 'edit', 'delete'] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.live
	},
	app => {
		app.refresh();
	}
);
</script>