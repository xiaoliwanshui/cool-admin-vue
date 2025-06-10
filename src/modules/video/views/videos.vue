<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn/>
			<!-- 新增按钮 -->
			<cl-add-btn/>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn/>
			<cl-flex1/>
			<!-- 字典 -->
			<cl-filter label="分类">
				<cl-select
					:options="dict.get('video_category')"
					:width="140"
					check-strictly
					prop="category_id"
					tree
				/>
			</cl-filter>
			<cl-filter label="地区">
				<cl-select
					:options="dict.get('area')"
					:width="140"
					check-strictly
					prop="region"
				/>
			</cl-filter>
			<cl-filter label="语言">
				<cl-select
					:options="dict.get('language')"
					:width="140"
					check-strictly
					prop="language"
				/>
			</cl-filter>
			<cl-filter label="入库">
				<cl-select
					:options="play_url_put_inDict"
					:width="140"
					prop="play_url_put_in"
				/>
			</cl-filter>
			<!-- 关键字搜索 -->
			<cl-search-key/>
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table"/>
		</cl-row>

		<cl-row>
			<cl-flex1/>
			<!-- 分页控件 -->
			<cl-pagination/>
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert"/>
	</cl-crud>
</template>

<script lang="ts" name="video-videos" setup>
import {useCrud, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";
import {useDict} from "/$/dict";

const {service} = useCool();
const {dict} = useDict();
const play_url_put_inDict = [
	{value: 1, label: '已入库'},
	{value: 0, label: '未入库'}
]
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "影片标题",
			prop: "title",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "分类",
			prop: "category_id",
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('video_category'),
					checkStrictly: true
				}
			}
		},
		{label: "影片封面图", prop: "surface_plot", component: {name: "cl-upload"}},
		{label: "是否推荐", prop: "recommend", flex: false, component: {name: "cl-switch"}},
		{label: "是否轮播", prop: "cycle", flex: false, component: {name: "cl-switch"}},
		{label: "轮播图片", prop: "cycle_img", component: {name: "cl-upload"}},
		{
			label: "导演",
			prop: "directors",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "演员",
			prop: "actors",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "简介",
			prop: "introduce",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "日人气",
			prop: "popularity_day",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "周人气",
			prop: "popularity_week",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "月人气",
			prop: "popularity_month",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "总人气",
			prop: "popularity_sum",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "地区",
			prop: "region",
			component: {
				name: "el-select",
				options: dict.get("area")
			}
		},
		{
			label: "语言",
			prop: "language",
			component: {
				name: "el-select",
				options: dict.get("language")
			}
		},
		{label: "总集数", prop: "number", hook: "number", component: {name: "el-input-number"}},
		{
			label: "更新集数",
			prop: "total",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{label: "横屏海报", prop: "horizontal_poster", component: {name: "cl-upload"}},
		{label: "竖屏海报", prop: "vertical_poster", component: {name: "cl-upload"}},
		{
			label: "片头时间",
			prop: "titles_time",
			hook: "number",
			component: {name: "el-input-number"},
			required: true
		},
		{
			label: "片尾时间",
			prop: "trailer_time",
			hook: "number",
			component: {name: "el-input-number"},
			required: true
		},
		{
			label: "采集的源地址",
			prop: "play_url",
			component: {name: "el-input", props: {type: "textarea", rows: 10}},
			required: true
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
		{label: "ID", prop: "id", minWidth: 140},
		{label: "影片标题", prop: "title", minWidth: 140},
		{
			label: "分类", prop: "category_id", dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true, // 显示所有等级
		},
		{
			label: "影片封面图",
			prop: "surface_plot",
			minWidth: 100,
			component: {name: "cl-image", props: {size: 60}}
		},
		{
			label: "地区", prop: "region", dict: dict.get('area'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true, // 显示所有等级
		},
		{
			label: "语言", prop: "language", dict: dict.get('language'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true, // 显示所有等级
		},
		{label: "导演", prop: "directors", showOverflowTooltip: true, minWidth: 200},
		{label: "演员", prop: "actors", showOverflowTooltip: true, minWidth: 200},
		{
			label: "imd评分",
			prop: "imdb_score",
			minWidth: 150,
			component: {name: "el-rate", props: {disabled: true}}
		},
		{label: "iimdID", prop: "imdb_score_id", minWidth: 140},
		{
			label: "豆瓣评分.百分制",
			prop: "douban_score",
			minWidth: 150,
			component: {name: "el-rate", props: {disabled: true}}
		},
		{label: "豆瓣ID", prop: "douban_score_id", minWidth: 140},
		{label: "简介", prop: "introduce", showOverflowTooltip: true, minWidth: 200},
		{label: "日人气", prop: "popularity_day", minWidth: 140},
		{label: "周人气", prop: "popularity_week", minWidth: 140},
		{label: "月人气", prop: "popularity_month", minWidth: 140},
		{label: "总人气", prop: "popularity", minWidth: 140},
		{label: "上映日期", prop: "pubdate", minWidth: 140},
		{
			label: "状态",
			prop: "status",
			minWidth: 100,
			component: {
				name: "cl-switch",
				props: {
					activeValue: "1",
					inactiveValue: "2"
				}
			}
		},
		// 播放地址是否入库1-1已经入库 0未入库
		{
			label: "资源是否入库", prop: "play_url_put_in", dict: play_url_put_inDict,
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true, // 显示所有等级
		},

		{label: "采集的源地址", prop: "play_url", showOverflowTooltip: true, minWidth: 200},
		{
			label: "创建时间",
			prop: "createTime",
			minWidth: 160,
			component: {name: "cl-date-text"}
		},
		{
			label: "更新时间",
			prop: "updateTime",
			minWidth: 160,
			component: {name: "cl-date-text"}
		},
		{type: "op", buttons: ["edit", "delete"]},
		{label: "创建人", prop: "createUserId", minWidth: 140},
		{label: "修改人", prop: "updateUserId", minWidth: 140}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.videos
	},
	(app) => {
		app.refresh();
	}
);
</script>
