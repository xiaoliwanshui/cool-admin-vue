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
						<cl-filter label="类型">
							<cl-select tree :options="typeDict" prop="type" :width="140" check-strictly />
						</cl-filter>
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
			:albumId="albumId"
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
		<videos-album style="height: 600px" :albumId="albumId"></videos-album>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</template>
	</cl-dialog>
</template>

<script lang="ts" name="video-album" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { ref } from "vue";
import videos from "/$/video/components/videos.vue";
import videosAlbum from "/$/video/components/videos-album.vue";
import { onMounted } from "vue";
import _ from "lodash";
const { service } = useCool();
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const albumId = ref<number>(0);
const videoAlbumVisible = ref<boolean>(false);
const typeDict = ref<Array<any>>([]);
// cl-upsert

onMounted(async () => {
	const { list } = await service.video.category.page({ parent_id: 0 });
	typeDict.value = list.map((item: any) => {
		return {
			label: item.name,
			value: item.id
		};
	});
});

const Upsert = useUpsert({
	items: [
		{
			label: "标题",
			prop: "title",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{ label: "图片", prop: "surface_plot", component: { name: "cl-upload" }, required: true },
		{
			label: "类型",
			prop: "type",
			hook: "number",
			component: {
				name: "el-select",
				options: typeDict
			}
		},
		{
			label: "日人气",
			prop: "popularity_day",
			hook: "number",
			component: { name: "el-input-number" },
			required: true,
			value: _.random(1000, 3000)
		},
		{
			label: "周人气",
			prop: "popularity_week",
			hook: "number",
			component: { name: "el-input-number" },
			required: true,
			value: _.random(1000, 3000)
		},
		{
			label: "月人气",
			prop: "popularity_month",
			hook: "number",
			component: { name: "el-input-number" },
			required: true,
			value: _.random(1000, 3000)
		},
		{
			label: "总人气",
			prop: "popularity_sum",
			hook: "number",
			component: { name: "el-input-number" },
			required: true,
			value: _.random(3000, 6000)
		},
		{
			label: "排序",
			prop: "sort",
			hook: "number",
			component: { name: "el-input-number" },
			required: true,
			value: 0
		},
		{
			label: "内容",
			prop: "introduce",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		},
		{
			label: "状态",
			prop: "status",
			flex: false,
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true,
			value: 1
		},
		{
			label: "推荐",
			prop: "recommend",
			flex: false,
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true,
			value: 1
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
			prop: "surface_plot",
			minWidth: 100,
			component: { name: "cl-image", props: { size: 60 } }
		},
		{ label: "类型", prop: "type", dict: typeDict, minWidth: 140 },
		{
			label: "日人气",
			prop: "popularity_day"
		},
		{
			label: "周人气",
			prop: "popularity_week"
		},
		{
			label: "月人气",
			prop: "popularity_month"
		},
		{
			label: "总人气",
			prop: "popularity_sum"
		},
		{ label: "排序", prop: "sort", minWidth: 140 },
		{ label: "内容", prop: "introduce", showOverflowTooltip: true, minWidth: 200 },
		{
			label: "状态",
			prop: "status",
			minWidth: 100,
			component: {
				name: "cl-switch",
				props: {
					activeValue: "1",
					inactiveValue: "2"
				}
			}
		},
		{
			label: "推荐",
			prop: "recommend",
			minWidth: 140,
			component: {
				name: "cl-switch",
				props: {
					activeValue: "1",
					inactiveValue: "2"
				}
			}
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
		service: service.video.album
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
			service.video.album_video.add({
				videos_id: item.id,
				album_id: albumId.value
			});
		});
		visible.value = false;
	}
};
</script>
