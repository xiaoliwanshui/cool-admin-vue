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
			<!-- 条件搜索 -->
			<cl-search ref="Search"/>
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

<script lang="ts" setup>
import {useDict} from "/$/dict";
import {useCrud, useSearch, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";
import {useI18n} from "vue-i18n";
import {reactive} from "vue";

defineOptions({
	name: "application-notice-info",
});

const {service} = useCool();
const {t} = useI18n();
const {dict} = useDict();

// 选项
const options = reactive({
	type: [
		{label: t("系统公告"), value: 0},
		{label: t("版本更新"), value: 1},
		{label: t("活动通知"), value: 2},
	],
	status: [
		{label: t("未发布"), value: 0, type: "danger"},
		{label: t("已发布"), value: 1, type: "success"},
	],
});

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t("标题"),
			prop: "title",
			component: {name: "el-input", props: {clearable: true}},
			required: true,
		},
		{
			label: t("内容"),
			prop: "content",
			component: {name: "cl-editor-wang", props: {clearable: true}},
			required: true,
		},
		{
			label: t("类型"),
			prop: "type",
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('notice_type'),
				}
			},
			required: true,
		},
		{
			label: t("状态"),
			prop: "status",
			component: {
				name: "cl-switch",
			},
			required: true,
		},
	],
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
		{label: t("标题"), prop: "title", minWidth: 120},
		{label: t("类型"), prop: "type", minWidth: 120, dict: dict.get('notice_type'),},
		{
			label: t("状态"),
			prop: "status",
			minWidth: 120,
			component: {
				name: "cl-switch"
			}
		},

		{label: t("创建用户ID"), prop: "createUserId", minWidth: 120},
		{label: t("更新用户ID"), prop: "updateUserId", minWidth: 120},
		{
			label: t("创建时间"),
			prop: "createTime",
			minWidth: 170,
			sortable: "desc",
			component: {name: "cl-date-text"},
		},
		{
			label: t("更新时间"),
			prop: "updateTime",
			minWidth: 170,
			sortable: "custom",
			component: {name: "cl-date-text"},
		},
		{type: "op", buttons: ["edit", "delete"]},
	],
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.application.noticeInfo,
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
