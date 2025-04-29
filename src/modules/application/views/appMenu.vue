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
defineOptions({
	name: "application-appMenu",
});

import { useCrud, useTable, useUpsert, useSearch } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { useI18n } from "vue-i18n";

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t("选择创建用户"),
			prop: "createUserId",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("选择更新用户"),
			prop: "updateUserId",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("页面名"),
			prop: "name",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("别名"),
			prop: "label",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("icon"),
			prop: "icon",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("页面路径"),
			prop: "path",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("condition"),
			prop: "condition",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("启用"),
			prop: "status",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("i18n"),
			prop: "i18n",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("排序"),
			prop: "sort",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("数据来源"),
			prop: "dataSource",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("component"),
			prop: "component",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("seo标题"),
			prop: "seoTitle",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("seo描述"),
			prop: "seoDescription",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("seo关键字"),
			prop: "seoKeywords",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: "",
			prop: "props",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: "",
			prop: "show",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: "",
			prop: "appid",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
	],
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: t("创建用户ID"), prop: "createUserId", minWidth: 120 },
		{ label: t("更新用户ID"), prop: "updateUserId", minWidth: 120 },
		{ label: t("页面名"), prop: "name", minWidth: 120 },
		{ label: t("别名"), prop: "label", minWidth: 120 },
		{ label: t("icon"), prop: "icon", minWidth: 120 },
		{ label: t("页面路径"), prop: "path", minWidth: 120 },
		{ label: t("condition"), prop: "condition", minWidth: 120 },
		{ label: t("启用"), prop: "status", minWidth: 120 },
		{ label: t("i18n"), prop: "i18n", minWidth: 120 },
		{ label: t("排序"), prop: "sort", minWidth: 120 },
		{ label: t("数据来源"), prop: "dataSource", minWidth: 120 },
		{ label: t("component"), prop: "component", minWidth: 120 },
		{ label: t("seo标题"), prop: "seoTitle", minWidth: 120 },
		{ label: t("seo描述"), prop: "seoDescription", minWidth: 120 },
		{ label: t("seo关键字"), prop: "seoKeywords", minWidth: 120 },
		{ label: "", prop: "props", minWidth: 120 },
		{ label: "", prop: "show", minWidth: 120 },
		{ label: "", prop: "appid", minWidth: 120 },
		{
			label: t("创建时间"),
			prop: "createTime",
			minWidth: 170,
			sortable: "desc",
			component: { name: "cl-date-text" },
		},
		{
			label: t("更新时间"),
			prop: "updateTime",
			minWidth: 170,
			sortable: "custom",
			component: { name: "cl-date-text" },
		},
		{ type: "op", buttons: ["edit", "delete"] },
	],
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.application.appMenu,
	},
	(app) => {
		app.refresh();
	},
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
