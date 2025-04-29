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
	<cl-dialog title="视频列表" v-model="visible" height="auto" :before-close="beforeClose">
		<videos
			style="height: 600px"
			@update:model-value="(value) => (modelValue = value)"
			:modelValue="modelValue"
			:weekId="weekId"
		></videos>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</template>
	</cl-dialog>
	<cl-dialog
		title="视频列表"
		v-model="videoAlbumVisible"
		height="auto"
		:before-close="beforeClose"
	>
		<videos-week style="height: 600px" :weekId="weekId"></videos-week>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</template>
	</cl-dialog>
</template>

<script lang="ts" name="video-weekId" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import videos from "/$/video/components/videos.vue";
import { ref } from "vue";
import videosWeek from "/$/video/components/videos-week.vue";
import { useDict } from "/$/dict";

const { service } = useCool();
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const weekId = ref<number>(0);
const videoAlbumVisible = ref<boolean>(false);
const { dict } = useDict();
// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "标题",
			prop: "title",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "时间",
			prop: "week",
			component: {
				name: "cl-select",
				props: {
					tree: true,
					checkStrictly: true,
					options: dict.get("week")
				}
			},
			required: true
		},
		{ label: "封面地址", prop: "surface_plot", component: { name: "cl-upload" } },
		{ label: "是否推荐", prop: "recommend", flex: false, component: { name: "cl-switch" } },
		{
			label: "简介",
			prop: "introduce",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{
			label: "日人气",
			prop: "popularity_day",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "周人气",
			prop: "popularity_weekId",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "月人气",
			prop: "popularity_month",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "总人气",
			prop: "popularity_sum",
			hook: "number",
			component: { name: "el-input-number" }
		},
		{
			label: "备注",
			prop: "note",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{ label: "排序", prop: "sort", hook: "number", component: { name: "el-input-number" } }
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{
			label: "标题",
			prop: "title",
			dictColor: true,
			minWidth: 120
		},
		{
			label: "星期几",
			prop: "week",
			dict: dict.get("week"),
			dictColor: true,
			minWidth: 120
		},
		{
			label: "封面地址",
			prop: "surface_plot",
			minWidth: 100,
			component: { name: "cl-image", props: { size: 60 } }
		},
		{ label: "是否推荐", prop: "recommend", minWidth: 100, component: { name: "cl-switch" } },
		{ label: "简介", prop: "introduce", showOverflowTooltip: true, minWidth: 200 },
		{ label: "日人气", prop: "popularity_day", minWidth: 140 },
		{ label: "周人气", prop: "popularity_weekId", minWidth: 140 },
		{ label: "月人气", prop: "popularity_month", minWidth: 140 },
		{ label: "总人气", prop: "popularity_sum", minWidth: 140 },
		{ label: "备注", prop: "note", showOverflowTooltip: true, minWidth: 200 },
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
			minWidth: 160,
			component: { name: "cl-date-text" }
		},
		{ label: "update_at", prop: "site_id", minWidth: 140 },
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
		{
			type: "op",
			width: 400,
			buttons: [
				"edit",
				"delete",
				{
					label: "绑定数据",
					async onClick({ scope }) {
						weekId.value = scope.row.id;
						visible.value = !visible.value;
					}
				},
				{
					label: "数据预览",
					async onClick({ scope }) {
						weekId.value = scope.row.id;
						videoAlbumVisible.value = !videoAlbumVisible.value;
					}
				}
			]
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.week
	},
	(app) => {
		app.refresh();
	}
);

const beforeClose = (done) => {
	done();
	weekId.value = 0;
	modelValue.value = [];
};

const submit = () => {
	if (modelValue.value.length > 0 && weekId.value) {
		modelValue.value.forEach((item) => {
			service.video.week_video.add({
				videos_id: item.id,
				week_id: weekId.value
			});
		});
		visible.value = false;
	}
};
</script>
