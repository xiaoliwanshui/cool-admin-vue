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
	name: "application-appList",
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
			label: t("程序名"),
			prop: "name",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("logo"),
			prop: "logo",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("封面图"),
			prop: "cover",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("内容"),
			prop: "content",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("联系人"),
			prop: "contact",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("联系电话"),
			prop: "phone",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("状态"),
			prop: "status",
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
			label: t("域名"),
			prop: "url",
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
		{ label: t("程序名"), prop: "name", minWidth: 120 },
		{ label: t("logo"), prop: "logo", minWidth: 120 },
		{ label: t("封面图"), prop: "cover", minWidth: 120 },
		{ label: t("内容"), prop: "content", minWidth: 120 },
		{ label: t("联系人"), prop: "contact", minWidth: 120 },
		{ label: t("联系电话"), prop: "phone", minWidth: 120 },
		{ label: t("状态"), prop: "status", minWidth: 120 },
		{ label: t("排序"), prop: "sort", minWidth: 120 },
		{ label: t("域名"), prop: "url", minWidth: 120 },
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
		service: service.application.appList,
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
