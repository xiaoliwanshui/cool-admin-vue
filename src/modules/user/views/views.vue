<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />

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
	name: "user-views",
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
			label: t("标题"),
			prop: "title",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("分类"),
			prop: "type",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("选择关联"),
			prop: "associationId",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("封面"),
			prop: "cover",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
	],
});

// cl-table
const Table = useTable({
	columns: [
		{ label: t("#"), type: "index" },
		{ label: t("创建用户ID"), prop: "createUserId", minWidth: 120 },
		{ label: t("更新用户ID"), prop: "updateUserId", minWidth: 120 },
		{ label: t("标题"), prop: "title", minWidth: 120 },
		{ label: t("分类"), prop: "type", minWidth: 120 },
		{ label: t("关联id"), prop: "associationId", minWidth: 120 },
		{ label: t("封面"), prop: "cover", minWidth: 120 },
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
	],
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.user.views,
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
