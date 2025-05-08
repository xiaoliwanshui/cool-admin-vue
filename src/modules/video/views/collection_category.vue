<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn/>
			<!--快速绑定分类-->
			<el-button @click="matchCategory">快速绑定分类</el-button>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn/>

			<cl-flex1/>
			<!-- 关键字搜索 -->
			<cl-search-key placeholder="搜索关键字"/>
			<cl-filter label="资源">
				<cl-select
					:options="collectionList"
					:width="140"
					check-strictly
					prop="resource_id"
				/>
			</cl-filter>
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
import {onMounted, ref} from "vue";
import {useCrud, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";
import {useDict} from "/$/dict";
import {Plugins} from '/#/crud';

const {service} = useCool();


const {dict} = useDict();

const collectionList = ref([])

onMounted(() => {
	videoCollection()
});

const videoCollection = async () => {
	collectionList.value = (await service.video.collection.list())?.map(item => {
		return {
			label: item.name,
			value: item.id
		}
	})
};

const matchCategory = () => {
	service.video.collection_category.match_category()
}


// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "资源分类",
			prop: "class_name",
			component: {name: "el-input", props: {disabled: true}}
		},
		{
			label: "系统分类",
			prop: "sys_category_id",
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('video_category'),
					checkStrictly: true
				}
			}
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
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
		{label: "资源", prop: "collection_name", minWidth: 140},
		{label: "采集资源分类", prop: "class_name", minWidth: 140},
		{label: "采集资源分类id", prop: "class_id", minWidth: 140},
		{
			label: "系统分类", prop: "sys_category_id", minWidth: 140, dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true, // 显示所有等级
		},
		{label: "收费模式", prop: "charging_mode", minWidth: 140},
		{label: "金币点播值", prop: "gold", minWidth: 140},
		{label: "购买模式", prop: "buy_mode", minWidth: 140},
		{label: "创建人", prop: "createUserId", minWidth: 140},
		{label: "修改人", prop: "updateUserId", minWidth: 140},
		{label: "创建时间", prop: "createTime", minWidth: 140, sortable: "desc"},
		{label: "更新时间", prop: "updateTime", minWidth: 140},
		{type: "op", buttons: ["edit", "delete"]}
	],
//【很重要】配置插件
	plugins: [Plugins.Table.toTree()]
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
