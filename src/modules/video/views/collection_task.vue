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
defineOptions({
	name: "video-collection-task",
});

import {useCrud, useSearch, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";
import {useI18n} from "vue-i18n";

const {service} = useCool();
const {t} = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t("名称"),
			prop: "taskName",
			component: {name: "el-input", props: {clearable: true}},
			span: 12,
		},
		{
			label: t("任务状态"),
			prop: "taskStatus",
			component: {name: "el-input", props: {clearable: true}},
			span: 12,
			required: true,
		},
		{
			label: t("任务类型"),
			prop: "taskType",
			component: {name: "el-input", props: {clearable: true}},
			span: 12,
			required: true,
		},
		{
			label: t("执行参数"),
			prop: "execParams",
			component: {name: "el-input", props: {clearable: true}},
			span: 12,
		},
		{
			label: t("执行结果"),
			prop: "execResult",
			component: {name: "el-input", props: {clearable: true}},
			span: 12,
		},
		{
			label: t("日期范围"),
			prop: "date",
			component: {
				name: "el-date-picker",
				props: {
					type: "daterange",
					valueFormat: "YYYY-MM-DD 00:00:00",
					defaultTime: [
						"2000-01-31T16:00:00.000Z",
						"2000-02-01T15:59:59.000Z",
					],
				},
			},
			span: 12,
			hook: "datetimeRange",
		},
		{
			label: t("备注信息"),
			prop: "remark",
			component: {name: "el-input", props: {clearable: true}},
			span: 12,
		},
	],
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},

		{label: t("名称"), prop: "taskName", minWidth: 120},
		{
			label: t("任务状态"), prop: "taskStatus", minWidth: 120,
			//dict: ['未开始', '进行中', '已完成', '已失败']
			dict: [
				{label: '未开始', value: 0},
				{label: '进行中', value: 1},
				{label: '已完成', value: 2},
				{label: '已失败', value: 3}
			]

		},
		{
			label: t("任务类型"), prop: "taskType", minWidth: 120,
			// dict: ['手动触发', '自动触发'],
			dict: [
				{label: '手动触发', value: 1},
				{label: '自动触发', value: 0}
			]
		},
		{
			label: t("采集源"), prop: "collectionSource", minWidth: 120, component: {
				name: 'cl-code-json',
				props: {
					popover: true
				}
			}
		},
		{
			label: t("执行参数"), prop: "execParams", minWidth: 120, component: {
				name: 'cl-code-json',
				props: {
					popover: true
				}
			}
		},
		{
			label: t("执行结果"), prop: "execResult", minWidth: 120, component: {
				name: 'cl-code-json',
				props: {
					popover: true
				}
			}
		},
		{
			label: t("错误信息"), prop: "errorMessage", minWidth: 120, component: {
				name: 'cl-code-json',
				props: {
					popover: true
				}
			}
		},
		{
			label: t("开始时间"),
			prop: "startDate",
			minWidth: 140,
			sortable: "custom",
			component: {
				name: "cl-date-text",
				props: {format: "YYYY-MM-DD"},
			},
		},
		{
			label: t("结束时间"),
			prop: "endDate",
			minWidth: 140,
			sortable: "custom",
			component: {
				name: "cl-date-text",
				props: {format: "YYYY-MM-DD"},
			},
		},
		{label: t("备注信息"), prop: "remark", minWidth: 120},
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
		{label: t("创建用户ID"), prop: "createUserId", minWidth: 120},
		{label: t("更新用户ID"), prop: "updateUserId", minWidth: 120},
		{type: "op", width: 250, buttons: ["delete"]}
	],
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.video.collection_task,
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
