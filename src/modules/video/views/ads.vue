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

<script lang="ts" name="video-ads" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "广告名称",
			prop: "name",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "位置",
			prop: "position",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "广告类型",
			prop: "ads_type",
			component: {
				name: "el-select",
				options: [
					{ value: "image", label: "图片" },
					{ value: "text", label: "文字" },
					{ value: "custom", label: "自定义" },
					{ value: "video", label: "视频" }
				]
			},
			value: "image图片",
			required: true
		},
		{
			label: "自定义内容",
			prop: "custom",
			component: { name: "el-input", props: { clearable: true } }
		},
		{
			label: "内容",
			prop: "content",
			component: { name: "cl-editor-wang", props: { height: "100px" } },
			required: true
		},
		{
			label: "html广告",
			prop: "html",
			component: { name: "cl-editor-monaco", props: { height: "100px" } },
			height: "100px"
		},
		{
			label: "视频地址",
			prop: "video",
			component: { name: "cl-upload", props: { type: "file", limit: 1 } }
		},
		{
			label: "静音",
			prop: "muted",
			component: { name: "cl-switch" },
			required: true
		},
		{
			label: "链接",
			prop: "link",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "排序",
			prop: "sort",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "观看时长",
			prop: "playDuration",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "广告总时长",
			prop: "totalDuration",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "状态",
			prop: "state",
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true
		},
		{
			label: "允许关闭",
			prop: "close",
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true
		},
		{
			label: "静音",
			prop: "muted",
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 0
				}
			},
			required: true
		},
		{
			label: "显示时长",
			prop: "duration",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "上线时间",
			prop: "online_at",
			component: {
				name: "el-date-picker",
				props: {
					type: "datetime",
					format: "YYYY-MM-DD HH:mm:ss",
					valueFormat: "x",
					defaultValue: new Date()
				}
			},
			value: new Date().getTime(),
			required: true
		},
		{
			label: "下线时间",
			prop: "offline_at",
			component: {
				name: "el-date-picker",
				props: {
					type: "datetime",
					format: "YYYY-MM-DD HH:mm:ss",
					valueFormat: "x"
				}
			},
			value: new Date().getTime(),
			required: true
		},
		{
			label: "打开方式",
			prop: "target",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "全站应用",
			prop: "is_all_site",
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true
		},
		{
			label: "定时器",
			prop: "ad_timer",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "终端web",
			prop: "terminal",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "广告名称", prop: "name", minWidth: 140 },
		{ label: "位置", prop: "position", minWidth: 140 },
		{
			label: "广告类型",
			prop: "ads_type",
			dict: [
				{ value: "image", label: "图片" },
				{ value: "text", label: "文字" },
				{ value: "custom", label: "自定义" },
				{ value: "video", label: "视频" }
			],
			dictColor: true,
			minWidth: 120
		},
		{ label: "自定义内容", prop: "custom", minWidth: 140 },
		{
			label: "内容",
			prop: "content",
			minWidth: 120,
			component: { name: "cl-editor-preview", props: { name: "wang" } }
		},
		{
			label: "html广告",
			prop: "html",
			minWidth: 120,
			component: { name: "cl-editor-preview", props: { name: "wang" } }
		},
		{ label: "视频广告地址", prop: "video", minWidth: 120, component: { name: "cl-link" } },
		{ label: "是否默认静音", prop: "muted", minWidth: 140 },
		{ label: "链接", prop: "link", minWidth: 140 },
		{ label: "排序", prop: "sort", minWidth: 140 },
		{
			label: "观看时长",
			prop: "playDuration"
		},
		{
			label: "广告总时长",
			prop: "totalDuration"
		},
		{
			label: "状态",
			prop: "state",
			minWidth: 140,
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			}
		},
		{
			label: "允许关闭",
			prop: "close",
			minWidth: 140,
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			}
		},
		{
			label: "是否静音",
			prop: "muted",
			minWidth: 140,
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 0
				}
			},
			required: true
		},
		{ label: "显示时长", prop: "duration", minWidth: 140 },
		{
			label: "创建时间",
			prop: "create_at",
			minWidth: 140
		},
		{
			label: "上线时间",
			prop: "online_at",
			minWidth: 140,
			component: { name: "cl-date-text", props: { format: "YYYY-MM-DD HH:mm:ss" } }
		},
		{
			label: "下线时间",
			prop: "offline_at",
			minWidth: 140,
			component: { name: "cl-date-text", props: { format: "YYYY-MM-DD HH:mm:ss" } }
		},
		{ label: "打开方式", prop: "target", minWidth: 140 },
		{
			label: "是否是全站应用",
			prop: "is_all_site",
			minWidth: 140,
			component: {
				name: "cl-switch",
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			}
		},
		{ label: "定时器", prop: "ad_timer", minWidth: 140 },
		{ label: "终端web", prop: "terminal", minWidth: 140 },
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
		service: service.video.ads
	},
	(app) => {
		app.refresh();
	}
);
</script>
