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
		<cl-upsert ref="Upsert">
			<template #slot-category="{ scope }">
				<el-cascader
					v-model="scope.category" :options="categoryDict"
					:props="{ checkStrictly: true }"/>
			</template>
		</cl-upsert>
	</cl-crud>
</template>

<script lang="ts" name="collection-category" setup>
import {useCrud, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";
import {onMounted, ref} from "vue";

const {service} = useCool();

const categoryDict = ref<Array<any>>([]);
//资源列表
const collectionDict = ref<Array<any>>([]);

const typeDict = ref<Array<any>>([]);
onMounted(async () => {
	const {list: categoryList} = await service.video.category.page({page: 1, size: 1000});
	const {list: collectionList} = await service.video.collection.page();


	const {list} = await service.video.category.page({page: 1, size: 1000});
	typeDict.value = list.map((item: any) => {
		return {
			label: item.name,
			value: item.id
		};
	});

	categoryDict.value = listToTree(categoryList.map((item: any) => {
		return {
			id: item.id,
			label: item.name,
			value: item.id,
			parent_id: item.parent_id
		};
	}));
	collectionDict.value = collectionList.map((item: any) => {
		return {
			label: item.name,
			value: item.id
		};
	});
});

function listToTree(data) {
	const idMap = {}; // 用于快速查找节点
	const tree = [];   // 最终的树形结构
	// 初始化所有节点，并创建一个映射（id -> node）
	data.forEach(item => {
		idMap[item.id] = {...item, children: []}; // 初始化每个节点的 children 数组

	});
	// 构建树形结构
	data.forEach(item => {
		const node = idMap[item.id];
		if (item.parent_id === "0" || item.parent_id === 0) {
			// 如果是根节点，直接放入树中
			tree.push(node);
		} else if (idMap[item.parent_id]) {
			// 如果有父节点，则将当前节点加入到父节点的 children 中
			idMap[item.parent_id].children.push(node);
		}
	});
	return tree;
}


// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "资源名称",
			prop: "collection_id",
			hook: "number",
			component: {
				name: "el-select",
				options: collectionDict,
				props: {
					disabled: true
				}
			}
		},
		{
			label: "源分类id",
			prop: "class_id",
			component: {name: "el-input", props: {clearable: true, disabled: true}}
		},
		{
			label: "源分类名",
			prop: "class_name",
			component: {name: "el-input", props: {clearable: true, disabled: true}}
		},
		{
			label: "系统分类",
			prop: "category",
			component: {
				name: "slot-category",
			},
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
		},
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
	],
	onSubmit(data, {next, done, close}) {
		const {category} = data;
		delete data.category;
		next({
			...data,
			category_id: category[0],
			category_child_id: category.length === 2 ? category[1] : 0
		});
	},
	onOpened(data) {
		if (data.category_child_id) {
			Upsert.value.form.category = [data.category_id, data.category_child_id];
		} else {
			Upsert.value.form.category = [data.category_id];
		}

	}
});

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
		{label: "资源id", prop: "collection_id", minWidth: 140},
		{label: "采集资源分类id", prop: "class_id", minWidth: 140},
		{label: "采集资源分类", prop: "class_name", minWidth: 140},
		{label: "系统分类", prop: "category_id", dict: typeDict, minWidth: 140},
		{label: "系统子分类", prop: "category_child_id", dict: typeDict, minWidth: 140},
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

const {resourceId} = defineProps({
	resourceId: {
		type: Number,
		default: 0
	}
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.collection_category
	},
	(app) => {
		app.refresh({collection_id: resourceId});
	}
);
</script>
<style lang="scss" scoped>
.el-cascader-panel .el-radio {
	width: 100%;
	height: 100%;
	z-index: 10;
	position: absolute;
	top: 10px;
	right: 10px;
}

.el-cascader-panel .el-radio__input {
	visibility: hidden;
}

.el-cascader-panel .el-cascader-node__postfix {
	top: 10px;
}

</style>
