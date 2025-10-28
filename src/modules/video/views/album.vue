<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 导出按钮 -->
			<cl-export-btn :columns="Table?.columns" />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-filter :label="t('类型')">
				<cl-select
					:options="dict.get('video_category')"
					:width="140"
					check-strictly
					prop="category_id"
					tree
				/>
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
	<cl-dialog v-model="visible" :before-close="beforeClose" :title="t('视频列表')" height="auto">
		<videos
			:albumId="albumId"
			:modelValue="modelValue"
			style="height: 600px"
			@update:model-value="value => (modelValue = value)"
		></videos>
		<template #footer>
			<el-button @click="visible = false">{{ t('取消') }}</el-button>
			<el-button type="primary" @click="submit">{{ t('确定') }}</el-button>
		</template>
	</cl-dialog>
	<cl-dialog
		v-model="videoAlbumVisible"
		:before-close="beforeClose"
		:title="t('视频列表')"
		height="auto"
	>
		<videos-album :albumId="albumId" style="height: 600px"></videos-album>
	</cl-dialog>
	<cl-form ref="addListForm"></cl-form>
</template>

<script lang="ts" name="video-album" setup>
import { useCrud, useForm, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { ref } from 'vue';
import videos from '/$/video/components/videos.vue';
import videosAlbum from '/$/video/components/videos-album.vue';
import _ from 'lodash';
import { useDict } from '/$/dict';
import { useI18n } from 'vue-i18n';

const { service } = useCool();
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const albumId = ref<number>(0);
const videoAlbumVisible = ref<boolean>(false);
const addListForm = useForm();
const { dict } = useDict();
const { t } = useI18n();

const Upsert = useUpsert({
	items: [
		{
			label: t('标题'),
			prop: 'title',
			component: { name: 'el-input', props: { clearable: true } },
			required: true
		},
		{
			label: t('图片'),
			prop: 'surface_plot',
			component: { name: 'cl-upload' },
			required: true
		},
		{
			label: t('分类'),
			prop: 'category_id',
			span: 12,
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('video_category'),
					checkStrictly: true
				}
			}
		},
		{
			label: t('日人气'),
			prop: 'popularity_day',
			hook: 'number',
			component: { name: 'el-input-number' },
			span: 12,
			required: true,
			value: _.random(1000, 3000)
		},
		{
			label: t('周人气'),
			prop: 'popularity_week',
			span: 12,
			hook: 'number',
			component: { name: 'el-input-number' },
			required: true,
			value: _.random(1000, 3000)
		},
		{
			label: t('月人气'),
			prop: 'popularity_month',
			hook: 'number',
			span: 12,
			component: { name: 'el-input-number' },
			required: true,
			value: _.random(1000, 3000)
		},
		{
			label: t('总人气'),
			prop: 'popularity_sum',
			span: 12,
			hook: 'number',
			component: { name: 'el-input-number' },
			required: true,
			value: _.random(3000, 6000)
		},
		{
			label: t('排序'),
			prop: 'sort',
			span: 12,
			hook: 'number',
			component: { name: 'el-input-number' },
			required: true,
			value: 0
		},
		{
			label: t('内容'),
			prop: 'introduce',
			component: { name: 'el-input', props: { type: 'textarea', rows: 4 } }
		},
		{
			label: t('状态'),
			prop: 'status',
			flex: false,
			span: 12,
			component: {
				name: 'cl-switch',
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true,
			value: 1
		},
		{
			label: t('推荐'),
			prop: 'recommend',
			span: 12,
			flex: false,
			component: {
				name: 'cl-switch',
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

function addListFormOpen(scope) {
	addListForm.value?.open({
		title: t('批量添加视频'),
		items: [
			{
				label: t('视频标题'),
				prop: 'title',
				required: true,
				component: {
					name: 'el-input',
					props: {
						type: 'textarea',
						rows: 4,
						clearable: true,
						placeholder: t('举例(用英文逗号分割):恐怖游轮 死神来了')
					}
				}
			}
		],
		on: {
			submit(data, { close, done }) {
				//使用,分割
				const titles = data.title.replace(/，/g, ',').replace(/\s/g, '').split(',');
				//并校验titles数据可靠性
				if (titles.length > 0) {
					console.info(scope.row.id);
					service.video.album_video.add_list({
						id: scope.row.id,
						titles
					});
				}

				console.log(titles);
				setTimeout(() => {
					close();
				}, 1500);
			}
		}
	});
	console.log(scope);
}

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id', minWidth: 140 },
		{ label: t('标题'), prop: 'title', minWidth: 140 },
		{
			label: t('图片'),
			prop: 'surface_plot',
			minWidth: 100,
			component: { name: 'cl-image', props: { size: 60 } }
		},
		{
			label: t('类型'),
			prop: 'category_id',
			dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 140
		},
		{
			label: t('日人气'),
			prop: 'popularity_day'
		},
		{
			label: t('周人气'),
			prop: 'popularity_week'
		},
		{
			label: t('月人气'),
			prop: 'popularity_month'
		},
		{
			label: t('总人气'),
			prop: 'popularity_sum'
		},
		{ label: t('排序'), prop: 'sort', minWidth: 140 },
		{ label: t('内容'), prop: 'introduce', showOverflowTooltip: true, minWidth: 200 },
		{
			label: t('状态'),
			prop: 'status',
			minWidth: 100,
			component: {
				name: 'cl-switch',
				props: {
					activeValue: '1',
					inactiveValue: '2'
				}
			}
		},
		{
			label: t('推荐'),
			prop: 'recommend',
			minWidth: 140,
			component: {
				name: 'cl-switch',
				props: {
					activeValue: '1',
					inactiveValue: '2'
				}
			}
		},
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updateTime',
			minWidth: 160,
			component: { name: 'cl-date-text' }
		},
		{
			type: 'op',
			width: 600,
			buttons: [
				t('edit'),
				t('delete'),
				{
					label: t('快速添加'),
					async onClick({ scope }) {
						addListFormOpen(scope);
					}
				},
				{
					label: t('绑定数据'),
					async onClick({ scope }) {
						albumId.value = scope.row.id;
						visible.value = !visible.value;
					}
				},
				{
					label: t('数据预览'),
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
	app => {
		app.refresh();
	}
);

const beforeClose = done => {
	done();
	albumId.value = 0;
	modelValue.value = [];
};

const submit = () => {
	if (modelValue.value.length > 0 && albumId.value) {
		modelValue.value.forEach(item => {
			service.video.album_video.add({
				videos_id: item.id,
				album_id: albumId.value
			});
		});
		visible.value = false;
	}
};
</script>
