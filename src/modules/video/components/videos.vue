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
			<!-- 关键字搜索 -->
			<cl-search-key/>
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
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" @selection-change="handleSelectionChange"/>
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

const {dict} = useDict();


const {service} = useCool();

// cl-upsert
const Upsert = useUpsert({
	items: [
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
		},
		{
			label: "影片标题",
			prop: "title",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "分类一级id",
			prop: "category_pid",
			component: {name: "el-checkbox-group", options: [], props: {}},
			value: []
		},
		{
			label: "分类二级id",
			prop: "category_child_id",
			component: {name: "el-checkbox-group", options: [], props: {}},
			value: []
		},
		{label: "影片封面图", prop: "surface_plot", component: {name: "cl-upload"}},
		{label: "是否推荐", prop: "recommend", flex: false, component: {name: "cl-switch"}},
		{label: "是否轮播", prop: "cycle", flex: false, component: {name: "cl-switch"}},
		{label: "轮播图片", prop: "cycle_img", component: {name: "cl-upload"}},
		{
			label: "收费模式",
			prop: "charging_mode",
			component: {
				name: "el-radio-group",
				options: [{value: "1免费"}, {value: "2vip免费"}, {value: "3金币点播"}]
			},
			value: "1免费"
		},
		{
			label: "购买模式",
			prop: "buy_mode",
			component: {
				name: "el-radio-group",
				options: [{value: "1按部"}, {value: "2按集"}]
			},
			value: "1按部"
		},
		{
			label: "金币点播值",
			prop: "gold",
			hook: "number",
			component: {name: "el-input-number"}
		},
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
		{label: "imd评分.百分制", prop: "imdb_score", component: {name: "el-rate"}},
		{
			label: "iimd评分ID",
			prop: "imdb_score_id",
			component: {name: "el-input", props: {clearable: true}}
		},
		{label: "豆瓣评分.百分制", prop: "douban_score", component: {name: "el-rate"}},
		{
			label: "豆瓣评分ID",
			prop: "douban_score_id",
			component: {name: "el-input", props: {clearable: true}}
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
			label: "连载状态",
			prop: "note",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "连载状态",
			prop: "year",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "关联专题id",
			prop: "album_id",
			hook: "number",
			component: {name: "el-input-number"}
		},
		{label: "状态", prop: "status", flex: false, component: {name: "cl-switch"}},
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
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
		{label: "影片标题", prop: "title", minWidth: 140},
		{label: "分类一级id", prop: "category_pid", dict: [], dictColor: true, minWidth: 120},
		{
			label: "分类二级id",
			prop: "category_child_id",
			dict: [],
			dictColor: true,
			minWidth: 120
		},
		{
			label: "影片封面图",
			prop: "surface_plot",
			minWidth: 100,
			component: {name: "cl-image", props: {size: 60}}
		},
		{label: "是否推荐", prop: "recommend", minWidth: 100, component: {name: "cl-switch"}},
		{label: "是否轮播", prop: "cycle", minWidth: 100, component: {name: "cl-switch"}},
		{
			label: "轮播图片",
			prop: "cycle_img",
			minWidth: 100,
			component: {name: "cl-image", props: {size: 60}}
		},
		{
			label: "收费模式",
			prop: "charging_mode",
			dict: [{value: "1免费"}, {value: "2vip免费"}, {value: "3金币点播"}],
			dictColor: true,
			minWidth: 120
		},
		{
			label: "购买模式",
			prop: "buy_mode",
			dict: [{value: "1按部"}, {value: "2按集"}],
			dictColor: true,
			minWidth: 120
		},
		{label: "金币点播值", prop: "gold", minWidth: 140},
		{label: "导演", prop: "directors", showOverflowTooltip: true, minWidth: 200},
		{label: "演员", prop: "actors", showOverflowTooltip: true, minWidth: 200},
		{
			label: "imd评分.百分制",
			prop: "imdb_score",
			minWidth: 150,
			component: {name: "el-rate", props: {disabled: true}}
		},
		{label: "iimd评分ID", prop: "imdb_score_id", minWidth: 140},
		{
			label: "豆瓣评分.百分制",
			prop: "douban_score",
			minWidth: 150,
			component: {name: "el-rate", props: {disabled: true}}
		},
		{label: "豆瓣评分ID", prop: "douban_score_id", minWidth: 140},
		{label: "简介", prop: "introduce", showOverflowTooltip: true, minWidth: 200},
		{label: "日人气", prop: "popularity_day", minWidth: 140},
		{label: "周人气", prop: "popularity_week", minWidth: 140},
		{label: "月人气", prop: "popularity_month", minWidth: 140},
		{label: "总人气", prop: "popularity_sum", minWidth: 140},
		{label: "连载状态", prop: "note", minWidth: 140},
		{label: "连载状态", prop: "year", minWidth: 140},
		{label: "关联专题id", prop: "album_id", minWidth: 140},
		{label: "状态", prop: "status", minWidth: 100, component: {name: "cl-switch"}},
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
		{label: "时长(单位s)", prop: "duration", minWidth: 140},
		{label: "自定义地区", prop: "region", showOverflowTooltip: true, minWidth: 200},
		{label: "自定义语言", prop: "language", showOverflowTooltip: true, minWidth: 200},
		{label: "自定义标签", prop: "label", showOverflowTooltip: true, minWidth: 200},
		{label: "总集数", prop: "number", minWidth: 140},
		{label: "更新集数", prop: "total", minWidth: 140},
		{
			label: "横屏海报",
			prop: "horizontal_poster",
			minWidth: 100,
			component: {name: "cl-image", props: {size: 60}}
		},
		{
			label: "竖屏海报",
			prop: "vertical_poster",
			minWidth: 100,
			component: {name: "cl-image", props: {size: 60}}
		},
		{label: "发行商", prop: "publish", showOverflowTooltip: true, minWidth: 200},
		{label: "序列号", prop: "serial_number", showOverflowTooltip: true, minWidth: 200},
		{label: "截屏", prop: "screenshot", minWidth: 120, component: {name: "cl-link"}},
		{label: "gif", prop: "gif", minWidth: 120, component: {name: "cl-link"}},
		{label: "alias", prop: "alias", showOverflowTooltip: true, minWidth: 200},
		{label: "alias", prop: "release_at", minWidth: 140},
		{
			label: "shelf_at",
			prop: "shelf_at",
			sortable: "custom",
			minWidth: 140,
			component: {name: "cl-date-text"}
		},
		{label: "end", prop: "end", minWidth: 100, component: {name: "cl-switch"}},
		{label: "unit", prop: "unit", showOverflowTooltip: true, minWidth: 200},
		{label: "watch", prop: "watch", minWidth: 140},
		{label: "collection_id", prop: "collection_id", minWidth: 140},
		{
			label: "use_local_image",
			prop: "use_local_image",
			minWidth: 100,
			component: {name: "cl-switch"}
		},
		{label: "片头时间", prop: "titles_time", minWidth: 140},
		{label: "片尾时间", prop: "trailer_time", minWidth: 140},
		{label: "站点id", prop: "site_id", minWidth: 140},
		{
			label: "顶级分类状态",
			prop: "category_pid_status",
			minWidth: 100,
			component: {name: "cl-switch"}
		},
		{
			label: "子级分类状态",
			prop: "category_child_id_status",
			minWidth: 100,
			component: {name: "cl-switch"}
		},
		{label: "采集的源地址", prop: "play_url", showOverflowTooltip: true, minWidth: 200},
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

// cl-crud
const Crud = useCrud(
	{
		service: service.video.videos
	},
	(app) => {
		app.refresh();
	}
);

const emit = defineEmits(["update:modelValue"]);

const handleSelectionChange = (val: any) => {
	emit("update:modelValue", val);
};
</script>
