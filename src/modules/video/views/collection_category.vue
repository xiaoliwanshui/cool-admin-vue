<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!--快速绑定分类-->
			<el-button @click="matchCategory">{{ t('快速绑定分类') }}</el-button>
			<!-- 导入按钮 -->
			<el-button type="primary" @click="openImportDialog">{{ t('导入') }}</el-button>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 导出按钮 -->
			<cl-export-btn :columns="Table?.columns" />

			<cl-flex1 />
			<cl-filter :label="t('资源')">
				<cl-select
					:options="collectionList"
					:width="140"
					check-strictly
					prop="collection_id"
				/>
			</cl-filter>
			<!-- 关键字搜索 -->
			<cl-search-key :placeholder="t('搜索关键字')" />
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

	<cl-dialog v-model="importDialogVisible" :title="t('导入')">
		<el-form label-width="96px">
			<el-form-item :label="t('资源')">
				<el-select
					v-model="selectedCollectionId"
					:placeholder="t('请选择资源')"
					clearable
					filterable
					style="width: 100%"
				>
					<el-option
						v-for="item in collectionList"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					/>
				</el-select>
			</el-form-item>
			<el-form-item :label="t('内容')">
				<el-input
					v-model="importContent"
					:placeholder="t('请输入需要导入的内容')"
					:rows="10"
					type="textarea"
				/>
			</el-form-item>
		</el-form>

		<template #footer>
			<el-button @click="closeImportDialog">{{ t('取消') }}</el-button>
			<el-button type="primary" @click="submitImport">{{ t('确定') }}</el-button>
		</template>
	</cl-dialog>
</template>

<script lang="ts" name="video-collection_category" setup>
import { onMounted, ref } from 'vue';
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useDict } from '/$/dict';
import { Plugins } from '/#/crud';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';
import { VIDEOPARAMS } from '../utils/VideoParams';

const { service } = useCool();
const { dict } = useDict();
const { t } = useI18n();

const collectionList = ref<{ label: string; value: number }[]>([]);
const importDialogVisible = ref(false);
const importContent = ref('');
const selectedCollectionId = ref<number>();

onMounted(() => {
	videoCollection();
});

const videoCollection = async () => {
	const list = await service.video.collection.list();

	collectionList.value =
		list?.map(item => {
			return {
				label: item?.name ?? '',
				value: item?.id ?? 0
			};
		}) ?? [];
};

const matchCategory = () => {
	service.video.collection_category.match_category();
};

const openImportDialog = () => {
	importDialogVisible.value = true;
};

const closeImportDialog = () => {
	importDialogVisible.value = false;
};

const submitImport = () => {
	const collectionId = selectedCollectionId.value;
	const content = importContent.value.trim();

	if (!collectionId) {
		ElMessage.warning(t('请选择资源'));
		return;
	}

	if (!content) {
		ElMessage.warning(t('请输入需要导入的内容'));
		return;
	}

	const rows = content
		.split(/\r?\n/)
		.map(item => item.trim())
		.filter(Boolean)
		.map(line => {
			const fields = line.split(/[\t,，]/).map(field => field.trim());

			return {
				raw: line,
				fields
			};
		});

	const collectionItem = collectionList.value.find(item => item.value === collectionId);

	const payload = {
		query: { id: collectionId, name: collectionItem?.label ?? '' },
		classList: JSON.parse(content)?.class
	};

	// TODO: 根据具体业务将导入内容提交到后端，例如：
	service.video.collection_category.import_category(payload).then(() => refresh());

	importDialogVisible.value = false;
	importContent.value = '';
	// selectedCollectionId.value = undefined;
};

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('资源分类'),
			prop: 'class_name',
			component: { name: 'el-input', props: { disabled: true } }
		},
		{
			label: t('系统分类'),
			prop: 'sys_category_id',
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('video_category'),
					checkStrictly: true
				}
			}
		},
		{
			label: t('收费模式'),
			prop: 'charging_mode',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('金币点播值'),
			prop: 'gold',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('购买模式'),
			prop: 'buy_mode',
			component: { name: 'el-input', props: { clearable: true } }
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: `${t('资源')}ID`, prop: 'collection_id', minWidth: 140 },
		{ label: t('资源'), prop: 'collection_name', minWidth: 140 },
		{ label: t('采集资源分类'), prop: 'class_name', minWidth: 140 },
		{ label: t('采集资源分类id'), prop: 'class_id', minWidth: 140 },
		{
			label: t('系统分类'),
			prop: 'sys_category_id',
			dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{ label: t('创建人'), prop: 'createUserId', minWidth: 140 },
		{ label: t('修改人'), prop: 'updateUserId', minWidth: 140 },
		{ label: t('创建时间'), prop: 'createTime', minWidth: 140, sortable: 'desc' },
		{ label: t('更新时间'), prop: 'updateTime', minWidth: 140 },
		{
			type: 'op',
			width: 320,
			buttons: [
				{
					label: t('采集全部'),
					async onClick({ scope }) {
						await syncVideo(scope, { t: scope.row.class_id });
					}
				},
				'edit',
				'delete'
			]
		}
	],
	//【很重要】配置插件
	plugins: [Plugins.Table.toTree()]
});

const syncVideo = async (scope, params: VIDEOPARAMS) => {
	service.video.collection.info({ id: scope.row.collection_id }).then(async res => {
		if (res) {
			await service.video.collection.collection_day({
				collection: res,
				params
			});
			ElMessage.success(t('执行成功'));
		}
	});
};

// cl-crud
const Crud = useCrud(
	{
		service: service.video.collection_category
	},
	app => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
