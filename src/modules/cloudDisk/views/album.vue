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
	<cl-dialog title="壁纸列表" v-model="visible" height="auto" :before-close="beforeClose">
		<cloudDisk
			style="height: 600px"
			@update:model-value="(value) => (modelValue = value)"
			:modelValue="modelValue"
			:albumId="albumId"
		></cloudDisk>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</template>
	</cl-dialog>
	<cl-dialog
		title="壁纸列表"
		v-model="cloudDiskAlbumVisible"
		height="auto"
		:before-close="beforeClose"
	>
		<cloud-disk-album style="height: 600px" :albumId="albumId"></cloud-disk-album>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</template>
	</cl-dialog>
</template>

<script lang="ts" name="cloudDisk-album" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import cloudDiskAlbum from "/$/cloudDisk/components/cloudDisk-album.vue";
import cloudDisk from "/$/cloudDisk/components/cloudDisk.vue";
import { ref } from "vue";
import { useCool } from "/@/cool";
import { useDict } from "/$/dict";
const { dict } = useDict();
const { service } = useCool();
const cloudDiskAlbumVisible = ref(false);
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const albumId = ref<number>(0);
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "标题",
			prop: "title",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{ label: "图片", prop: "image", component: { name: "cl-upload" }, required: true },
		{
			label: "分类",
			prop: "type",
			component: {
				name: "el-select",
				options: dict.get("cloudDiskType")
			}
		},
		{
			label: "内容",
			prop: "content",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{
			label: "状态",
			prop: "status",
			flex: false,
			component: { name: "cl-switch" },
			required: true
		},
		{
			label: "排序",
			prop: "sort",
			hook: "number",
			component: { name: "el-input-number" },
			required: true
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "标题", prop: "title", minWidth: 140 },
		{
			label: "图片",
			prop: "image",
			minWidth: 100,
			component: { name: "cl-image", props: { size: 60 } }
		},
		{ label: "排序", prop: "sort", minWidth: 140 },
		{ label: "内容", prop: "content", showOverflowTooltip: true, minWidth: 200 },
		{ label: "状态", prop: "status", minWidth: 100, component: { name: "cl-switch" } },
		{
			label: "分类",
			prop: "type",
			dict: dict.get("cloudDiskType"),
			dictColor: true,
			minWidth: 120
		},
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
		{
			type: "op",
			width: 400,
			buttons: [
				"edit",
				"delete",
				{
					label: "绑定数据",
					async onClick({ scope }) {
						albumId.value = scope.row.id;
						visible.value = !visible.value;
					}
				},
				{
					label: "数据预览",
					async onClick({ scope }) {
						albumId.value = scope.row.id;
						cloudDiskAlbumVisible.value = !cloudDiskAlbumVisible.value;
					}
				}
			]
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.cloudDisk.album
	},
	(app) => {
		app.refresh();
	}
);

const beforeClose = (done) => {
	done();
	albumId.value = 0;
	modelValue.value = [];
};

const submit = () => {
	if (modelValue.value.length > 0 && albumId.value) {
		modelValue.value.forEach((item) => {
			service.cloudDisk.album_cloudDisk.add({
				cloudDiskId: item.id,
				albumId: albumId.value
			});
		});
		visible.value = false;
	}
};
</script>
