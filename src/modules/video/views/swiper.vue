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

<script lang="ts" name="video-swiper" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { onMounted, ref } from "vue";

const { service } = useCool();

const typeDict = ref<Array<any>>([]);

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "标题",
			prop: "title",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "图片",
			prop: "image",
			component: { name: "cl-upload" },
			required: true
		},
		{
			label: "页面",
			prop: "path",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "关联ID",
			prop: "relatedId",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{ label: "appid", prop: "appid", hook: "number", value: 19, hidden: true },
		{
			label: "类型",
			prop: "type",
			hook: "number",
			component: {
				name: "el-select",
				options: typeDict
			}
		},
		{ label: "排序", prop: "sort", hook: "number", component: { name: "el-input-number" } },
		{
			label: "状态",
			prop: "status",
			flex: false,
			component: { name: "cl-switch" },
			required: true
		}
	],
	onSubmit(data, { next, done, close }) {
		next({
			...data,
			appid: 19
		});
	}
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "标题", prop: "title", minWidth: 140 },
		{ label: "图片", prop: "image", component: { name: "cl-image", props: { size: 60 } } },
		{ label: "页面", prop: "path", minWidth: 140 },
		{ label: "关联ID", prop: "relatedId", minWidth: 140 },
		{ label: "appid", prop: "appid", minWidth: 140 },
		{ label: "类型", prop: "type", dict: typeDict, minWidth: 140 },
		{ label: "排序", prop: "sort", minWidth: 140 },
		{ label: "状态", prop: "status", minWidth: 100, component: { name: "cl-switch" } },
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

onMounted(async () => {
	const { list } = await service.video.category.page({ parent_id: 0 });
	typeDict.value = list.map((item: any) => {
		return {
			label: item.name,
			value: item.id
		};
	});
});

// cl-crud
const Crud = useCrud(
	{
		service: service.swiper.swiper
	},
	(app) => {
		app.refresh({ appid: 19 });
	}
);
</script>
