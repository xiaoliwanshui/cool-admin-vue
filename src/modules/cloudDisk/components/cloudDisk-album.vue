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

<script lang="ts" name="wallpaper-album" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { useDict } from "/$/dict";
const { service } = useCool();
const { dict } = useDict();
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "标题",
			prop: "title",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "作者",
			prop: "author",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "分类",
			prop: "type",
			component: { name: "el-checkbox-group", options: [], props: {} },
			value: []
		},
		{
			label: "标签",
			prop: "types",
			component: { name: "el-checkbox-group", options: [], props: {} },
			value: []
		},
		{ label: "内容", prop: "content", component: { name: "cl-editor-wang" } },
		{ label: "宽px", prop: "width", hook: "number", component: { name: "el-input-number" } },
		{ label: "高px", prop: "height", hook: "number", component: { name: "el-input-number" } },
		{ label: "大小", prop: "size", hook: "number", component: { name: "el-input-number" } },
		{
			label: "状态",
			prop: "status",
			component: { name: "el-radio-group", options: [] },
			required: true
		},
		{ label: "图片", prop: "image", component: { name: "cl-upload" } }
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "标题", prop: "title", showOverflowTooltip: true, minWidth: 200 },
		{ label: "作者", prop: "author", showOverflowTooltip: true, minWidth: 200 },
		{
			label: "分类",
			prop: "type",
			dict: dict.get("cloudDiskType"),
			dictColor: true,
			minWidth: 120
		},
		{
			label: "标签",
			prop: "tags",
			dict: dict.get("cloudDiskTags"),
			dictColor: true,
			minWidth: 120
		},
		{ label: "图片", prop: "image", minWidth: 120, component: { name: "cl-link" } },
		{ label: "标签", prop: "types", dict: [], dictColor: true, minWidth: 120 },
		{
			label: "状态",
			prop: "status",
			component: { name: "cl-switch" },
			dictColor: true,
			minWidth: 120
		},
		{
			label: "内容",
			prop: "content",
			minWidth: 120,
			component: { name: "cl-editor-preview", props: { name: "wang" } }
		},
		{ label: "链接", prop: "link", showOverflowTooltip: true, minWidth: 200 },
		{ label: "密码", prop: "password", minWidth: 140 },
		{ label: "创建人", prop: "createUserId", minWidth: 140 },
		{ label: "修改人", prop: "updateUserId", minWidth: 140 },
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
		{ type: "op", buttons: ["delete"] }
	]
});
const { albumId } = defineProps({
	albumId: {
		type: Number,
		default: 0
	}
});

// cl-crud
const Crud = useCrud(
	{
		service: service.cloudDisk.album_cloudDisk
	},
	(app) => {
		app.refresh({ albumId });
	}
);
</script>
