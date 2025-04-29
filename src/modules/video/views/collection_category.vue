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
			<!-- 关键字搜索 -->
			<cl-search-key placeholder="搜索关键字"/>
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

<script lang="ts" name="video-collection_category" setup>
import {useCrud, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";

const {service} = useCool();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "创建人",
			prop: "createUserId",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "修改人",
			prop: "updateUserId",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "资源id",
			prop: "resource_id",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "采集资源分类id",
			prop: "class_id",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "采集资源分类",
			prop: "class_name",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "系统分类id",
			prop: "category_child_id",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "收费模式",
			prop: "charging_mode",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "金币点播值",
			prop: "gold",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "购买模式",
			prop: "buy_mode",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "create_at",
			prop: "create_at",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "update_at",
			prop: "update_at",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "站点id",
			prop: "site_id",
			component: {name: "el-input", props: {clearable: true}}
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
		{label: "资源id", prop: "resource_id", minWidth: 140},
		{label: "采集资源分类id", prop: "class_id", minWidth: 140},
		{label: "采集资源分类", prop: "class_name", minWidth: 140},
		{label: "系统分类id", prop: "category_child_id", minWidth: 140},
		{label: "收费模式", prop: "charging_mode", minWidth: 140},
		{label: "金币点播值", prop: "gold", minWidth: 140},
		{label: "购买模式", prop: "buy_mode", minWidth: 140},
		{label: "create_at", prop: "create_at", minWidth: 140},
		{label: "update_at", prop: "update_at", minWidth: 140},
		{label: "站点id", prop: "site_id", minWidth: 140},
		{label: "创建人", prop: "createUserId", minWidth: 140},
		{label: "修改人", prop: "updateUserId", minWidth: 140},
		{label: "创建时间", prop: "createTime", minWidth: 140, sortable: "desc"},
		{label: "更新时间", prop: "updateTime", minWidth: 140},
		{type: "op", buttons: ["edit", "delete"]}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.collection_category
	},
	(app) => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
