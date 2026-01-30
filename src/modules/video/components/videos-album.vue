<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
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

<script lang="ts" name="video-album" setup>
import { useCrud, useTable } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useDict } from '/$/dict';
import { Plugins } from '/#/crud';

const { service } = useCool();
const { dict } = useDict();

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: '影片标题', prop: 'title', minWidth: 140 },
		{
			label: '排序',
			prop: 'sort',
			minWidth: 200,
			edit: {
				enable: true,
				// 【很重要】行编辑，组件配置
				component: {
					name: 'el-input-number'
				}
			}
		},
		{
			label: '分类',
			prop: 'category_id',
			dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{
			label: '影片封面图',
			prop: 'surface_plot',
			minWidth: 100,
			component: { name: 'cl-image', props: { size: 60 } }
		},
		{
			label: '地区',
			prop: 'region',
			dict: dict.get('area'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{
			label: '语言',
			prop: 'language',
			dict: dict.get('language'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{ label: '导演', prop: 'directors', showOverflowTooltip: true, minWidth: 200 },
		{ label: '演员', prop: 'actors', showOverflowTooltip: true, minWidth: 200 },
		{
			label: 'imd评分',
			prop: 'imdb_score',
			minWidth: 150,
			component: { name: 'el-rate', props: { disabled: true } }
		},
		{ label: 'iimdID', prop: 'imdb_score_id', minWidth: 140 },
		{
			label: '豆瓣评分.百分制',
			prop: 'douban_score',
			minWidth: 150,
			component: { name: 'el-rate', props: { disabled: true } }
		},
		{ label: '豆瓣ID', prop: 'douban_score_id', minWidth: 140 },
		{ label: '简介', prop: 'introduce', showOverflowTooltip: true, minWidth: 200 },
		{ label: '日人气', prop: 'popularity_day', minWidth: 140 },
		{ label: '周人气', prop: 'popularity_week', minWidth: 140 },
		{ label: '月人气', prop: 'popularity_month', minWidth: 140 },
		{ label: '总人气', prop: 'popularity', minWidth: 140 },
		{ label: '上映日期', prop: 'pubdate', minWidth: 140 },
		{
			label: '创建时间',
			prop: 'create_at',
			sortable: 'custom',
			minWidth: 140,
			component: { name: 'cl-date-text' }
		},
		{
			label: '创建时间',
			prop: 'update_at',
			sortable: 'custom',
			minWidth: 140,
			component: { name: 'cl-date-text' }
		},
		{ label: 'collection_id', prop: 'collection_id', minWidth: 140 },
		{
			label: '播放地址是否入库1-已经入库',
			prop: 'play_url_put_in',
			minWidth: 100,
			component: { name: 'cl-switch' }
		},
		{
			label: '创建时间',
			prop: 'createTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{
			label: '更新时间',
			prop: 'updateTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{ label: '创建人', prop: 'createUserId', minWidth: 140 },
		{ label: '修改人', prop: 'updateUserId', minWidth: 140 },
		{ type: 'op', buttons: ['delete'] }
	],
	//【很重要】行编辑插件
	plugins: [Plugins.Table.rowEdit()]
});

const { albumId } = defineProps({
	albumId: {
		type: Number,
		default: 0
	}
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.album_video
	},
	app => {
		app.refresh({ album_id: albumId });
	}
);
</script>
