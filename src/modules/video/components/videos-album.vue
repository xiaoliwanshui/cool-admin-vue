<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn/>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn/>
			<cl-flex1/>
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

<script lang="ts" name="video-album" setup>
import {useCrud, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";
import {useDict} from "/$/dict";

const {service} = useCool();
const {dict} = useDict();
// cl-upsert
const Upsert = useUpsert({
	items: [
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
			label: "创建时间",
			prop: "create_at",
			component: {
				name: "el-date-picker",
				props: {type: "date", valueFormat: "YYYY-MM-DD"}
			}
		},
		{
			label: "创建时间",
			prop: "update_at",
			component: {
				name: "el-date-picker",
				props: {type: "date", valueFormat: "YYYY-MM-DD"}
			}
		},
		{
			label: "时长(单位s)",
			prop: "duration",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "自定义地区",
			prop: "region",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "自定义语言",
			prop: "language",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "自定义标签",
			prop: "label",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
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
			label: "发行商",
			prop: "publish",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "序列号",
			prop: "serial_number",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "截屏",
			prop: "screenshot",
			component: {name: "cl-upload", props: {type: "file", limit: 1}}
		},
		{
			label: "gif",
			prop: "gif",
			component: {name: "cl-upload", props: {type: "file", limit: 1}}
		},
		{
			label: "alias",
			prop: "alias",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{
			label: "alias",
			prop: "release_at",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "shelf_at",
			prop: "shelf_at",
			component: {
				name: "el-date-picker",
				props: {type: "date", valueFormat: "YYYY-MM-DD"}
			}
		},
		{label: "end", prop: "end", flex: false, component: {name: "cl-switch"}},
		{
			label: "unit",
			prop: "unit",
			component: {name: "el-input", props: {type: "textarea", rows: 4}}
		},
		{label: "watch", prop: "watch", hook: "number", component: {name: "el-input-number"}},
		{
			label: "collection_id",
			prop: "collection_id",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "use_local_image",
			prop: "use_local_image",
			flex: false,
			component: {name: "cl-switch"},
			required: true
		},
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
			label: "站点id",
			prop: "site_id",
			hook: "number",
			component: {name: "el-input-number"},
			required: true
		},
		{
			label: "顶级分类状态",
			prop: "category_pid_status",
			flex: false,
			component: {name: "cl-switch"},
			required: true
		},
		{
			label: "子级分类状态",
			prop: "category_child_id_status",
			flex: false,
			component: {name: "cl-switch"},
			required: true
		},
		{
			label: "采集的源地址",
			prop: "play_url",
			component: {name: "el-input", props: {type: "textarea", rows: 4}},
			required: true
		},
		{
			label: "播放地址是否入库1-已经入库",
			prop: "play_url_put_in",
			flex: false,
			component: {name: "cl-switch"},
			required: true
		},
		{
			label: "创建人",
			prop: "createUserId",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{
			label: "修改人",
			prop: "updateUserId",
			hook: "number",
			component: {name: "el-input-number"}
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
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
			label: "创建时间",
			prop: "create_at",
			sortable: "custom",
			minWidth: 140,
			component: {name: "cl-date-text"}
		},
		{
			label: "创建时间",
			prop: "update_at",
			sortable: "custom",
			minWidth: 140,
			component: {name: "cl-date-text"}
		},
		{label: "collection_id", prop: "collection_id", minWidth: 140},
		{
			label: "播放地址是否入库1-已经入库",
			prop: "play_url_put_in",
			minWidth: 100,
			component: {name: "cl-switch"}
		},
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
		{label: "创建人", prop: "createUserId", minWidth: 140},
		{label: "修改人", prop: "updateUserId", minWidth: 140},
		{type: "op", buttons: ["edit", "delete"]}
	]
});

const {albumId} = defineProps({
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
	(app) => {
		app.refresh({album_id: albumId});
	}
);
</script>
