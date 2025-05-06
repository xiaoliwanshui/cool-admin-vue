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
	name: "comic-comic",
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
			prop: "name",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("标签"),
			prop: "tags",
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
			label: t("人气"),
			prop: "popularity",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("收藏"),
			prop: "collect",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("关联作者"),
			prop: "author",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("封面图片链接"),
			prop: "coverImg",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("出版社"),
			prop: "publishingHouse",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("出版日期"),
			prop: "publishingDate",
			component: {
				name: "el-date-picker",
				props: { type: "date", valueFormat: "YYYY-MM-DD" },
			},
			span: 12,
		},
		{
			label: t("漫画简介"),
			prop: "description",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
		},
		{
			label: t("上架下架状态"),
			prop: "status",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("总卷数"),
			prop: "volume",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("是否直接买断"),
			prop: "buyoutStatus",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("买断价格"),
			prop: "buyoutPrice",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("总章节数"),
			prop: "chapter",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("总页数"),
			prop: "page",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("评分"),
			prop: "score",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("漫画语言"),
			prop: "language",
			component: { name: "el-input", props: { clearable: true } },
			span: 12,
			required: true,
		},
		{
			label: t("漫画更新状态"),
			prop: "updateStatus",
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
		{ label: t("标题"), prop: "name", minWidth: 120 },
		{ label: t("标签"), prop: "tags", minWidth: 120 },
		{ label: t("分类"), prop: "type", minWidth: 120 },
		{ label: t("人气"), prop: "popularity", minWidth: 120 },
		{ label: t("收藏"), prop: "collect", minWidth: 120 },
		{ label: t("关联作者"), prop: "author", minWidth: 120 },
		{ label: t("封面图片链接"), prop: "coverImg", minWidth: 120 },
		{ label: t("出版社"), prop: "publishingHouse", minWidth: 120 },
		{
			label: t("出版日期"),
			prop: "publishingDate",
			minWidth: 140,
			sortable: "custom",
			component: {
				name: "cl-date-text",
				props: { format: "YYYY-MM-DD" },
			},
		},
		{ label: t("漫画简介"), prop: "description", minWidth: 120 },
		{ label: t("上架下架状态"), prop: "status", minWidth: 120 },
		{ label: t("总卷数"), prop: "volume", minWidth: 120 },
		{ label: t("是否直接买断"), prop: "buyoutStatus", minWidth: 120 },
		{ label: t("买断价格"), prop: "buyoutPrice", minWidth: 120 },
		{ label: t("总章节数"), prop: "chapter", minWidth: 120 },
		{ label: t("总页数"), prop: "page", minWidth: 120 },
		{ label: t("评分"), prop: "score", minWidth: 120 },
		{ label: t("漫画语言"), prop: "language", minWidth: 120 },
		{ label: t("漫画更新状态"), prop: "updateStatus", minWidth: 120 },
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
		service: service.comic.comic,
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
