<template>
	<cl-view-group ref="ViewGroup">
		<template #item-name="{ item }"> {{ item.name }} - {{ item.id }} </template>
		<template #right>
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
	</cl-view-group>
</template>

<script lang="ts" name="video-category" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
const { service } = useCool();
import { useViewGroup } from "/@/plugins/view";
import { ref } from "vue";
// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}

const parent_id = ref<Number>(0);
const { ViewGroup } = useViewGroup({
	label: "类型",
	title: "字典列表",
	data: { parent_id: 0 },
	onSelect(item) {
		parent_id.value = item.id;
		refresh({
			parent_id: item.id,
			page: 1
		});
	},
	service: service.video.category,
	onEdit() {
		return {
			width: "500px",
			props: {
				labelWidth: "60px"
			},
			items: [
				{
					label: "名称",
					prop: "name",
					component: { name: "el-input", props: { clearable: true } }
				},
				{
					label: "排序",
					prop: "sort",
					hook: "number",
					component: { name: "el-input-number" }
				},
				{
					label: "竖屏",
					prop: "is_vertical",
					flex: false,
					component: { name: "cl-switch" }
				},
				{
					label: "纯文字",
					prop: "is_font",
					flex: false,
					component: { name: "cl-switch" }
				},
				{
					label: "站点id",
					prop: "site_id",
					hook: "number",
					component: { name: "el-input-number" }
				},
				{
					label: "status",
					prop: "status",
					component: { name: "cl-switch" }
				}
			]
		};
	}
});
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "类型",
			prop: "type",
			component: {
				name: "el-radio-group",
				options: [
					{ value: "1", label: "视频" },
					{ value: "2", label: "名人" },
					{ value: "3", label: "文章" }
				]
			},
			value: "1影片"
		},
		{
			label: "名称",
			prop: "name",
			component: { name: "el-input", props: { clearable: true } }
		},
		{ label: "排序", prop: "sort", hook: "number", component: { name: "el-input-number" } },
		{
			label: "竖屏",
			prop: "is_vertical",
			flex: false,
			component: { name: "cl-switch" }
		},
		{
			label: "纯文字",
			prop: "is_font",
			flex: false,
			component: { name: "cl-switch" }
		},
		{
			label: "站点id",
			prop: "site_id",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "status",
			prop: "status",
			component: { name: "cl-switch" }
		}
	],
	onSubmit(data, { next, done, close }) {
		next({
			...data,
			parent_id: parent_id.value
		});
	}
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id", minWidth: 140 },
		{ label: "父id", prop: "parent_id", minWidth: 140 },
		{
			label: "类型",
			prop: "type",
			dict: [{ value: "1影片" }, { value: "2名人" }, { value: "3文章" }],
			dictColor: true,
			minWidth: 120
		},
		{ label: "分类名称", prop: "name", minWidth: 140 },
		{ label: "排序", prop: "sort", minWidth: 140 },
		{
			label: "create_at",
			prop: "create_at",
			sortable: "custom",
			minWidth: 140,
			component: { name: "cl-date-text" }
		},
		{
			label: "update_at",
			prop: "update_at",
			sortable: "custom",
			minWidth: 140,
			component: { name: "cl-date-text" }
		},
		{
			label: "是否是竖屏，1-是，0-否",
			prop: "is_vertical",
			minWidth: 100,
			component: { name: "cl-switch" }
		},
		{
			label: "是否是纯文字，1-是，0-否",
			prop: "is_font",
			minWidth: 100,
			component: { name: "cl-switch" }
		},
		{ label: "站点id", prop: "site_id", minWidth: 140 },
		{ label: "status", prop: "status", dict: [], dictColor: true, minWidth: 120 },
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

// cl-crud
const Crud = useCrud(
	{
		service: service.video.category
	},
	(app) => {
		app.refresh();
	}
);
</script>
