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
			<!-- 条件搜索 -->
			<cl-search ref="Search" />
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
		<cl-upsert ref="Upsert">
			<template #slot-video-select="{ scope }">
				<video-select
					:onChange="videoSelectChange"
					:video-id="scope.video_id"
				></video-select>
			</template>
			<template #slot-collection-select="{ scope }">
				<collection-select
					:collection-id="scope.collection_id"
					:onChange="collectionSelectChange"
				></collection-select>
			</template>
		</cl-upsert>
	</cl-crud>
	<!-- 快速导入表单 -->
	<cl-form ref="ImportForm"></cl-form>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { useCrud, useForm, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import collectionSelect from '../components/collection-select.vue';
import videoSelect from '../components/video-select.vue';

defineOptions({
	name: 'video-video-line'
});

const { service } = useCool();
const { t } = useI18n();
const ImportForm = useForm();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('视频'),
			prop: 'video_id',
			component: {
				name: 'slot-video-select'
			}
		},
		{
			label: t('資源名称'),
			prop: 'collection_id',
			component: {
				name: 'slot-collection-select'
			}
		},
		{
			label: t('关联播放器ID'),
			prop: 'player_id',
			component: { name: 'el-input-number' }
		},
		{
			label: t('排序'),
			prop: 'sort',
			component: { name: 'el-input-number' }
		},
		{
			label: t('标识'),
			prop: 'tag',
			component: { name: 'el-input', props: { clearable: true } }
		}
	],
	onSubmit: async data => {
		console.log(data);
	}
});
const videoSelectChange = data => {
	Upsert.value.setForm('video_id', data.id);
	Upsert.value.setForm('video_name', data.title);
};

const collectionSelectChange = data => {
	Upsert.value.setForm('collection_id', data.id);
	Upsert.value.setForm('collection_name', data.name);
	Upsert.value.setForm('tag', data.param);
	Upsert.value.setForm('sort', data.sort);
	Upsert.value.setForm('player_id', data.player_id);
};

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('影视ID'), prop: 'video_id', minWidth: 120 },
		{ label: t('影视名称'), prop: 'video_name', minWidth: 120 },
		{ label: t('名称'), prop: 'collection_name', minWidth: 120 },
		{ label: t('资源id'), prop: 'collection_id', minWidth: 120 },
		{ label: t('关联播放器ID'), prop: 'player_id', minWidth: 120 },
		{ label: t('排序'), prop: 'sort', minWidth: 120 },
		{ label: t('标识'), prop: 'tag', minWidth: 120 },
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc',
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updateTime',
			minWidth: 170,
			sortable: 'custom',
			component: { name: 'cl-date-text' }
		},
		{ label: t('创建用户ID'), prop: 'createUserId', minWidth: 120 },
		{ label: t('更新用户ID'), prop: 'updateUserId', minWidth: 120 },
		{
			type: 'op',
			minWidth: 200,
			buttons: [
				'edit',
				'delete',
				{
					label: t('快速添加'),
					async onClick({ scope }) {
						openQuickImport(scope);
					}
				}
			]
		}
	]
});

// cl-search
const Search = useSearch({
	items: [
		{
			label: t('资源名称'),
			prop: 'collection_id',
			component: {
				vm: collectionSelect,
				props: {
					onChange(data) {
						if (data) {
							Search.value.setForm('collection_id', data.id);
						} else {
							Search.value.setForm('collection_id', undefined);
						}
					}
				}
			}
		},
		{
			label: t('影视'),
			prop: 'video_id',
			component: {
				vm: videoSelect,
				props: {
					onChange(data) {
						if (data) {
							Search.value.setForm('video_id', data.id);
						} else {
							Search.value.setForm('video_id', undefined);
						}
					}
				}
			}
		}
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.video_line
	},
	app => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}

function parseM3u8List(input: string, scope: any): Array<{ file: string; title: string }> {
	const lines = input
		.trim()
		.split(/\r?\n/)
		.filter(l => l.trim() !== '');
	const result: Array<{ file: string; title: string }> = [];
	let episodeCounter = 1;

	for (const line of lines) {
		const trimmedLine = line.trim();

		// 处理带集数和额外信息的格式（如：第01集$URL$金鹰m3u8）
		const fullMatch = trimmedLine.match(/^第(\d+)集\$([^$]+)\$(.+)/);
		if (fullMatch) {
			result.push({
				file: fullMatch[2],
				title: `第${fullMatch[1]}集`,
				sub_title: `第${fullMatch[1]}集`,
				collection_id: scope.collection_id,
				collection_name: scope.collection_name,
				video_line_id: scope.id,
				video_name: scope.video_name,
				video_id: scope.video_id,
				sort: Number(fullMatch[1]),
				status: 1
			});
			continue;
		}

		// 处理标准格式（如：第01集$URL）
		const standardMatch = trimmedLine.match(/^第(\d+)集\$([^$]+)/);
		if (standardMatch) {
			result.push({
				file: standardMatch[2],
				title: `第${standardMatch[1]}集`,
				sub_title: `第${standardMatch[1]}集`,
				collection_id: scope.collection_id,
				collection_name: scope.collection_name,
				video_line_id: scope.id,
				video_name: scope.video_name,
				video_id: scope.video_id,
				sort: Number(standardMatch[1]),
				status: 1
			});
			continue;
		}

		// 处理纯 URL 列表
		const urlMatch = trimmedLine.match(/^(https?:\/\/[^\s]+)$/);
		if (urlMatch) {
			result.push({
				file: urlMatch[1],
				title: `第${episodeCounter.toString().padStart(2, '0')}集`,
				sub_title: `第${episodeCounter.toString().padStart(2, '0')}集`,
				collection_id: scope.collection_id,
				collection_name: scope.collection_name,
				video_line_id: scope.id,
				video_name: scope.video_name,
				video_id: scope.video_id,
				sort: Number(episodeCounter.toString().padStart(2, '0')),
				status: 1
			});
			episodeCounter++;
		}
	}

	return result;
}

// 打开快速导入表单
function openQuickImport(scope: any) {
	ImportForm.value?.open({
		title: t('快速导入'),
		width: '800px',
		items: [
			{
				label: t('导入数据'),
				prop: 'importData',
				component: {
					name: 'el-input',
					props: {
						type: 'textarea',
						rows: 10,
						placeholder: t(
							'请输入数据，格式：第01集$https://hd.ijycnd.com/play/DdwZAxwb/index.m3u8'
						)
					}
				}
			}
		],
		on: {
			async submit(data, { close, done }) {
				parseM3u8List(data.importData, scope.row).forEach(item => {
					service.video.play_line.add(item).then(() => {
						ElMessage.success(t('导入成功'));
						done();
						close();
					});
				});
			}
		}
	});
}
</script>
