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

<script lang="ts" name="video-player" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "名称",
			prop: "name",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "标签",
			prop: "tag",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } },
			required: true
		},
		{
			label: "key",
			prop: "key",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "排序",
			prop: "sort",
			hook: "number",
			component: { name: "el-input-number" },
			required: true
		},
		{
			label: "类型",
			prop: "type",
			component: {
				name: "el-select",
				options: [
					{ value: "web", label: "页面类型" },
					{ value: "custom", label: "自定义类型" }
				]
			},
			value: [],
			required: true
		},
		{
			label: "状态",
			prop: "status",
			flex: false,
			component: { name: "cl-switch" },
			required: true
		},
		{ label: "介绍", prop: "introduce", component: { name: "cl-editor-wang" } },
		{ label: "代码", prop: "code", component: { name: "cl-editor-monaco" } },
		{
			label: "解析模式",
			prop: "parse_mod",
			component: {
				name: "el-select",
				options: [
					{ value: "1", label: "解析模式" },
					{ value: "2", label: "高级模式" },
					{ value: "3", label: "json解析模式" }
				]
			},
			required: true
		},
		{
			label: "解析地址",
			prop: "parseAddress",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "解析字段",
			prop: "parseColumn",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } },
			required: true
		},
		{
			label: "json服务器",
			prop: "jsonServer",
			component: { name: "el-input", props: { clearable: true } }
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "名称", prop: "name", minWidth: 140 },
		{ label: "key", prop: "key", minWidth: 140 },
		{ label: "标签", prop: "tag", showOverflowTooltip: true, minWidth: 200 },
		{ label: "排序", prop: "sort", minWidth: 140 },
		{
			label: "类型",
			prop: "type",
			dict: [
				{ value: "web", label: "页面类型" },
				{ value: "custom", label: "自定义类型" }
			],
			dictColor: true,
			minWidth: 120
		},
		{ label: "状态", prop: "status", minWidth: 100, component: { name: "cl-switch" } },
		{
			label: "介绍",
			prop: "introduce",
			minWidth: 120,
			component: { name: "cl-editor-preview", props: { name: "wang" } }
		},
		{
			label: "代码",
			prop: "code",
			minWidth: 120,
			component: { name: "cl-editor-preview", props: { name: "monaco" } }
		},
		{
			label: "解析模式",
			prop: "parse_mod",
			dict: [
				{ value: "1", label: "解析模式" },
				{ value: "2", label: "高级模式" },
				{ value: "3", label: "json解析模式" }
			],
			dictColor: true,
			minWidth: 120
		},
		{ label: "解析地址", prop: "parseAddress", minWidth: 140 },
		{ label: "解析字段", prop: "parseColumn", showOverflowTooltip: true, minWidth: 200 },
		{ label: "json服务器", prop: "jsonServer", minWidth: 140 },
		{
			label: "创建时间",
			prop: "createdAt",
			minWidth: 160,
			component: { name: "cl-date-text" }
		},
		{
			label: "更新时间",
			prop: "updatedAt",
			minWidth: 160,
			component: { name: "cl-date-text" }
		},
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

		{ label: "创建人", prop: "createUserId", minWidth: 140 },
		{ label: "修改人", prop: "updateUserId", minWidth: 140 },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.player
	},
	(app) => {
		app.refresh();
	}
);
</script>
