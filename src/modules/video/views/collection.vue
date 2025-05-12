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
	<cl-dialog
		v-model="visible"
		:before-close="beforeClose"
		height="auto"
		title="分类绑定"
	>
		<collection-category :resourceId="resourceId" style="height: 600px"></collection-category>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</template>
	</cl-dialog>
	<cl-dialog
		v-model="collectionShow"
		height="auto"
		title="采集进度"
	>
		<el-table :data="tableData" max-height="450" style="width: 100%">
			<el-table-column label="#" type="index" width="50"/>
			<el-table-column label="名称" prop="title" width="180"></el-table-column>
			<el-table-column label="封面" prop="horizontal_poster" width="180">
				<template #default="scope">
					<img :src="scope.row.horizontal_poster" style="width: 100px;height: 100px;">
				</template>
			</el-table-column>
			<el-table-column label="备注" prop="note" width="180"></el-table-column>
			<el-table-column label="操作类型" prop="updateType" width="180"></el-table-column>
		</el-table>
		<template #footer>
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</template>
	</cl-dialog>
</template>

<script lang="ts" name="video-collection" setup>
import {useCrud, useTable, useUpsert} from "@cool-vue/crud";
import {useCool} from "/@/cool";
import {ref} from "vue";
import collectionCategory from "/$/video/components/collection-category.vue"
import {VIDEOPARAMS} from "/$/video/utils/VideoParams";
import {useDict} from "/$/dict";

const {dict} = useDict();
const {service} = useCool();
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const resourceId = ref<number>(0);
//定义采集进度show
const collectionShow = ref<boolean>(false);
//定义采集进度 结果数组


// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "名称",
			prop: "name",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "参数",
			prop: "param",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "数据类型",
			prop: "data_method",
			required: true,
			component: {
				name: "el-radio-group",
				options: [
					{value: "1", label: "JSON"},
					{value: "2", label: "XML"}
				]
			},
		},
		{
			label: "地址",
			prop: "address",
			component: {name: "el-input", props: {clearable: true}}
		},
		{
			label: "说明",
			prop: "desc",
			component: {name: "el-input", props: {clearable: true}}
		},
	],
});

const syncCategory = async (scope) => {
	service.video.collection_category.sync_category(scope.row);
}

const syncVideo = async (scope, params: VIDEOPARAMS) => {
	service.video.collection.collection_day(
		{
			collection: scope.row,
			params
		}
	);
}

// cl-table
const Table = useTable({
	columns: [
		{type: "selection"},
		{label: "ID", prop: "id", minWidth: 140},
		{label: "名称", prop: "name", minWidth: 140},
		{label: "数据类型:1JSON", prop: "data_method", minWidth: 140},
		{label: "地址", prop: "address", minWidth: 140},
		{label: "参数", prop: "param", minWidth: 140},
		{label: "COMMENT", prop: "status", minWidth: 140},
		{label: "说明", prop: "desc", minWidth: 140},
		{label: "来源", prop: "tags", minWidth: 140},
		{label: "适用系统:sda-精品", prop: "cms", minWidth: 140},
		{label: "关联播放器ID", prop: "player_id", minWidth: 140},
		{label: "是否匹配资源播放器", prop: "match_player", minWidth: 140},
		{label: "是否启用解析,1-是，2-否", prop: "use_parse", minWidth: 140},
		{label: "解析地址，视频播放地址", prop: "parse_address", minWidth: 140},
		{label: "排序", prop: "sort", minWidth: 140},
		{label: "创建人", prop: "createUserId", minWidth: 140},
		{label: "修改人", prop: "updateUserId", minWidth: 140},
		{label: "创建时间", prop: "createTime", minWidth: 140, sortable: "desc"},
		{label: "更新时间", prop: "updateTime", minWidth: 140},
		{
			type: "op",
			width: 400,
			buttons: [
				{
					label: "同步分类",
					async onClick({scope}) {
						await syncCategory(scope)
					}
				},
				{
					label: "采集全部",
					async onClick({scope}) {
						await syncVideo(scope)
					}
				},
				{
					label: "采集本周",
					async onClick({scope}) {
						await syncVideo(scope, {
							op: "week",
							h: 24 * 7
						})
					}
				},
				{
					label: "采集今日",
					async onClick({scope}) {
						await syncVideo(scope, {
							op: "day",
							h: 24
						})
					}
				},
				"edit",
				"delete",
			]
		}
	]
});


const tableData = ref([])
// cl-crud
const Crud = useCrud(
	{
		service: service.video.collection,

	},
	(app) => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}


const url = "/dev/admin/video/collection/call";


//使用fetch 请求sse 协议的url
async function fetchEventStream(url) {
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "text/event-stream",
		},
	});

	const reader = response.body?.getReader();
	const decoder = new TextDecoder();

	while (true) {
		const {done, value} = await reader?.read();
		if (done) {
			break;
		}
		const text = decoder.decode(value);
		const data = qs.parse(text);
		if (data) {
			if (data.video) {
				tableData.value.push({
					...data.video,
					updateType: data.type,
				})
			}

		}
	}
}

// 使用示例
fetchEventStream(url);

</script>
