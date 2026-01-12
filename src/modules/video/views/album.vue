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
					allLevelsId
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
	<cl-form ref="addListForm">
		<!-- 动态编辑标签插槽 -->
		<template #slot-tags="{ scope }">
			<div class="tag-editor">
				<!-- 标签列表 -->
				<div
					class="tag-list"
					style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px"
				>
					<el-tag
						v-for="(title, index) in scope.titles"
						:key="index"
						:type="scope.selectedKeyword === title ? 'primary' : undefined"
						closable
						style="cursor: pointer"
						@click="handleTagSelect(scope, title)"
						@close.stop="handleTagClose(scope, index)"
					>
						{{ title }}
					</el-tag>
				</div>
				<!-- 输入框用于添加新标签 -->
				<el-input
					v-model="tagInputValue"
					clearable
					placeholder="输入视频标题，支持用逗号(,)或分号(;)分割多个标题，或输入数组格式如：[标题1,标题2]"
					@clear="tagInputValue = ''"
					@keyup.enter="handleAddTag(scope)"
				>
					<template #append>
						<el-button @click="handleAddTag(scope)">添加</el-button>
					</template>
				</el-input>
			</div>
		</template>
	</cl-form>

	<!-- AI提示语生成对话框 -->
	<cl-dialog v-model="aiPromptVisible" :title="t('AI提示语生成')" height="auto" width="60%">
		<div class="ai-prompt-content">
			<el-input
				v-model="aiPromptText"
				:rows="10"
				placeholder="AI提示语将显示在这里..."
				readonly
				type="textarea"
			/>
			<div style="margin-top: 10px; text-align: center">
				<el-button type="primary" @click="copyAiPrompt">{{ t('复制提示语') }}</el-button>
				<el-button @click="aiPromptVisible = false">{{ t('关闭') }}</el-button>
			</div>
		</div>
	</cl-dialog>
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
import { useClipboard } from '@vueuse/core';
import { ElMessage } from 'element-plus';

const { service } = useCool();
const visible = ref<boolean>(false);
const modelValue = ref<Array<any>>([]);
const albumId = ref<number>(0);
const videoAlbumVisible = ref<boolean>(false);
const addListForm = useForm();
const { dict } = useDict();
const { t } = useI18n();

// 标签输入框的值
const tagInputValue = ref<string>('');

// AI提示语相关变量
const aiPromptVisible = ref<boolean>(false);
const aiPromptText = ref<string>('');
const { copy, isSupported } = useClipboard();

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
			span: 12,
			hook: 'number',
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
	// 清空输入框
	tagInputValue.value = '';

	addListForm.value?.open({
		title: t('批量添加视频'),
		form: {
			titles: [],
			selectedKeyword: ''
		},
		items: [
			{
				label: t('视频标题标签'),
				prop: 'titles',
				required: true,
				component: {
					name: 'slot-tags'
				}
			}
		],
		on: {
			async submit(data, { close, done }) {
				// 获取所有标签数组
				const titles = data.titles || [];
				if (titles.length > 0) {
					try {
						await service.video.album_video.add_list({
							id: scope.row.id,
							titles
						});

						// 刷新列表
						Crud.value?.refresh();
						close();
					} catch (error: any) {
						console.error('添加失败', error);
						done();
					}
				} else {
					close();
				}
			}
		}
	});
}

// 生成AI提示语
function generateAiPrompt(scope: any) {
	const albumTitle = scope.row.title || '未命名专辑';
	const albumDescription = scope.row.introduce || '无描述';
	const categoryName =
		dict.get('video_category').value.find((item: any) => item.value === scope.row.category_id)
			?.name || '未分类';
	// 构建AI提示语
	const prompt = `请为${categoryName}视频专辑生成一个批量添加视频的列表：

专辑名称：${albumTitle}
专辑描述：${albumDescription}
专辑分类：${categoryName}
上映时间区间：${new Date().getFullYear()}年-${new Date().getFullYear() - 2}年

请根据专辑的类型和主题，生成一系列相关的${categoryName}标题，格式如下：
[
  "墨雨云间",
  "九重紫",
  "藏海传",
  ...
]

要求：
1. 视频标题应与专辑主题相关
2. 总共生成50-60个${categoryName}标题
3. 标题应具有吸引力和创意
4. 每个标题控制在10-20个字符以内
5. 重要：生成的视频必须是真实存在于当前各大视频平台的真实视频内容，不能是虚构的视频标题
7. 生成的视频标题中不能包含书名号《》或<>等符号
8. 只能返回视频标题，不能包含其他任何描述性文字或解释
9. 不要添加任何额外的信息或解释
10. 不要重复的数据
`;

	aiPromptText.value = prompt;
	aiPromptVisible.value = true;
}

// 复制AI提示语
async function copyAiPrompt() {
	if (!isSupported) {
		ElMessage.error('当前浏览器不支持复制功能');
		return;
	}

	try {
		await copy(aiPromptText.value);
		ElMessage.success('AI提示语复制成功');
	} catch (error) {
		ElMessage.error('复制失败');
	}
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
					label: t('AI生成提示语'),
					async onClick({ scope }) {
						generateAiPrompt(scope);
					}
				},
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

// 处理标签关闭
function handleTagClose(scope: any, index: number) {
	if (scope.titles && Array.isArray(scope.titles)) {
		// 创建新数组，移除指定索引的项
		const newTitles = [...scope.titles];
		const deletedTitle = newTitles[index];
		newTitles.splice(index, 1);
		// 更新表单数据
		addListForm.value?.setForm('titles', newTitles);
		// 如果删除的是当前选中的标签，则选择第一个标签
		if (scope.selectedKeyword === deletedTitle) {
			if (newTitles.length > 0) {
				addListForm.value?.setForm('selectedKeyword', newTitles[0]);
			} else {
				addListForm.value?.setForm('selectedKeyword', '');
			}
		}
	}
}

// 处理标签选择
function handleTagSelect(scope: any, title: string) {
	addListForm.value?.setForm('selectedKeyword', title);
}

// 处理添加标签
function handleAddTag(scope: any) {
	let inputValue = tagInputValue.value.trim();

	// 如果输入框为空，不添加
	if (!inputValue) {
		return;
	}

	// 获取当前的标签列表
	const titles = scope.titles || [];
	const newTitles: string[] = [];

	// 尝试解析数组格式（如 [a, b, c] 或 ["a", "b", "c"]）
	try {
		// 检查是否是数组格式的字符串
		if (inputValue.startsWith('[') && inputValue.endsWith(']')) {
			// 尝试解析为 JSON 数组
			const parsed = JSON.parse(inputValue);
			if (Array.isArray(parsed)) {
				parsed.forEach((item: any) => {
					const title = String(item || '').trim();
					if (title && !titles.includes(title) && !newTitles.includes(title)) {
						newTitles.push(title);
					}
				});
			}
		}
	} catch (e) {
		// 如果不是有效的 JSON，继续使用分割方式
	}

	// 如果没有解析到数组，使用分割方式
	if (newTitles.length === 0) {
		// 先替换中文逗号和分号
		inputValue = inputValue.replace(/，/g, ',').replace(/；/g, ';');

		// 按分号或逗号分割
		const parts = inputValue.split(/[;,]/);

		parts.forEach(part => {
			const title = part.trim();
			if (title && !titles.includes(title) && !newTitles.includes(title)) {
				newTitles.push(title);
			}
		});
	}

	// 如果有新标签，添加到列表
	if (newTitles.length > 0) {
		const updatedTitles = [...titles, ...newTitles];
		addListForm.value?.setForm('titles', updatedTitles);
		// 自动选中第一个新添加的标签
		addListForm.value?.setForm('selectedKeyword', newTitles[0]);
	}

	// 清空输入框
	tagInputValue.value = '';
}
</script>

<style lang="scss" scoped>
.tag-editor {
	.tag-list {
		min-height: 40px;
		padding: 8px;
		border: 1px solid var(--el-border-color);
		border-radius: 4px;
		background-color: var(--el-fill-color-lighter);
	}
}

.ai-prompt-content {
	.el-textarea {
		textarea {
			font-family: monospace;
		}
	}
}
</style>
