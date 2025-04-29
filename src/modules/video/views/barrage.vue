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

<script lang="ts" name="video-barrage" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "创建人",
			prop: "createUserId",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "修改人",
			prop: "updateUserId",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "站点ID",
			prop: "site_id",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{
			label: "用户ID",
			prop: "member_id",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "视频ID",
			prop: "video_id",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } },
			required: true
		},
		{
			label: "资源名称",
			prop: "resource_name",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "线路ID",
			prop: "play_line_id",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{
			label: "相对时间",
			prop: "relative_time",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "发送时间",
			prop: "send_time",
			component: {
				name: "el-date-picker",
				props: { type: "date", valueFormat: "YYYY-MM-DD" }
			}
		},
		{
			label: "发送日期",
			prop: "send_date",
			component: {
				name: "el-date-picker",
				props: { type: "date", valueFormat: "YYYY-MM-DD" }
			}
		},
		{
			label: "弹幕内容",
			prop: "content",
			component: { name: "cl-editor-wang" },
			required: true
		},
		{
			label: "弹幕字体大小",
			prop: "size",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{ label: "弹幕类型", prop: "type", component: { name: "el-radio-group", options: [] } },
		{
			label: "弹幕颜色",
			prop: "color",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "点赞数",
			prop: "agree",
			component: { name: "el-slider", props: { style: { width: "200px" } } },
			required: true
		},
		{
			label: "IP地址",
			prop: "ip",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "状态",
			prop: "status",
			flex: false,
			component: { name: "cl-switch" },
			required: true
		},
		{
			label: "拒绝理由",
			prop: "reject_reason",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{
			label: "创建时间",
			prop: "createAt",
			component: {
				name: "el-date-picker",
				props: { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss" }
			}
		},
		{
			label: "更新时间",
			prop: "updateAt",
			component: {
				name: "el-date-picker",
				props: { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss" }
			}
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "创建人", prop: "createUserId", minWidth: 140 },
		{ label: "修改人", prop: "updateUserId", minWidth: 140 },
		{ label: "站点ID", prop: "site_id", showOverflowTooltip: true, minWidth: 200 },
		{ label: "用户ID", prop: "member_id", minWidth: 140 },
		{ label: "视频ID", prop: "video_id", showOverflowTooltip: true, minWidth: 200 },
		{ label: "资源名称", prop: "resource_name", minWidth: 140 },
		{ label: "线路ID", prop: "play_line_id", showOverflowTooltip: true, minWidth: 200 },
		{ label: "相对时间", prop: "relative_time", minWidth: 140 },
		{
			label: "发送时间",
			prop: "send_time",
			sortable: "custom",
			minWidth: 140,
			component: { name: "cl-date-text" }
		},
		{
			label: "发送日期",
			prop: "send_date",
			sortable: "custom",
			minWidth: 140,
			component: { name: "cl-date-text" }
		},
		{
			label: "弹幕内容",
			prop: "content",
			minWidth: 120,
			component: { name: "cl-editor-preview", props: { name: "wang" } }
		},
		{ label: "弹幕字体大小", prop: "size", minWidth: 140 },
		{ label: "弹幕类型", prop: "type", dict: [], dictColor: true, minWidth: 120 },
		{ label: "弹幕颜色", prop: "color", minWidth: 140 },
		{ label: "点赞数", prop: "agree", minWidth: 150, component: { name: "el-progress" } },
		{ label: "IP地址", prop: "ip", minWidth: 140 },
		{ label: "状态", prop: "status", minWidth: 100, component: { name: "cl-switch" } },
		{ label: "拒绝理由", prop: "reject_reason", showOverflowTooltip: true, minWidth: 200 },
		{ label: "创建时间", prop: "createAt", minWidth: 160, component: { name: "cl-date-text" } },
		{ label: "更新时间", prop: "updateAt", minWidth: 160, component: { name: "cl-date-text" } },
		{
			label: "创建时间",
			prop: "createTime",
			minWidth: 160,
			component: { name: "cl-date-text" }
		},
		{
			label: "更新时间",
			prop: "updateTime",
			minWidth: 160,
			component: { name: "cl-date-text" }
		},
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.barrage
	},
	(app) => {
		app.refresh();
	}
);
</script>
