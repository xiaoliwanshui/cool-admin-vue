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

<script lang="ts" name="video-live" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { useDict } from "/$/dict";

const { service } = useCool();
const { dict } = useDict();
const image: string = `https://cool-file-1300398902.cos.ap-nanjing.myqcloud.com/app%2Fbase%2F693631ad5c0d48ea95c4db3cadbea02e_%E7%94%B5%E8%A7%86%E5%8F%B0%E5%9B%BE%E6%A0%87%402x%20(2).png`;
// cl-upsert
const Upsert = useUpsert({
	items: [
		{ label: "标题", prop: "title", required: true, component: { name: "el-input" } },
		{
			label: "分类",
			prop: "type",
			required: true,
			component: {
				name: "el-select",
				options: dict.get("liveType")
			}
		},
		{
			label: "状态",
			prop: "status",
			required: true,
			component: {
				name: "el-select",
				options: dict.get("liveStatus")
			},
			value: 368
		},
		{
			label: "图片",
			prop: "image",
			required: true,
			component: {
				name: "cl-upload",
				props: {
					text: "选择图片"
				}
			},
			value: image
		},
		{
			label: "标签",
			prop: "types",
			component: {
				name: "el-select",
				options: dict.get("liveTags"),
				props: {
					multiple: true
				}
			}
		},
		{ label: "拉流地址", prop: "pullUrl", component: { name: "el-input" } }
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "房间号", prop: "roomId" },
		{ label: "标题", prop: "title" },
		{ label: "分类", prop: "type", dict: dict.get("liveType") },
		{ label: "图片", prop: "image", component: { name: "cl-image" } },
		{ label: "标签", prop: "types", dict: dict.get("liveTags") },
		{ label: "状态", prop: "status", dict: dict.get("liveStatus") },
		() => {
			return {
				label: "推流服务器",
				prop: "pushUrl"
			};
		},
		() => {
			return {
				label: "推流码",
				prop: "pushCode"
			};
		},
		() => {
			return {
				label: "拉流地址",
				prop: "pullUrl"
			};
		},
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", width: 250, buttons: ["info", "edit", "delete"] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.live
	},
	(app) => {
		app.refresh();
	}
);
</script>
