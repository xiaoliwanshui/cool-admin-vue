<!--
 * @Author: 17691002584 17691002584@163.com
 * @Date: 2025-08-08 22:16:59
 * @LastEditors: 17691002584 17691002584@163.com
 * @LastEditTime: 2025-10-10 16:00:00
 * @FilePath: src/modules/video/components/collection-select.vue
 * @Description: 视频合集选择组件
 -->
<template>
	<el-row :gutter="20">
		<el-col :span="24">
			<el-select
				v-model="formCollectionId"
				clearable
				filterable
				:loading="loading"
				@change="onSelectChange"
			>
				<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/>
			</el-select>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup name="video-collection-select">
import { useForm } from '@cool-vue/crud';
import { ref, watch, onMounted, defineEmits, defineProps } from 'vue';
import { useCool } from '/@/cool/hooks';

interface CollectionOption {
	label: string;
	value: number;
}

interface CollectionInfo {
	id: number;
	name: string;
	[key: string]: any;
}

// 定义 props
const props = defineProps<{
	onChange?: (value: number | undefined, option: CollectionOption | undefined) => void;
}>();

// 定义 emits
const emit = defineEmits<{
	(e: 'update:collection_id', value: number | undefined): void;
	(e: 'change', value: number | undefined, option: CollectionOption | undefined): void;
}>();

const { service } = useCool();
const Form = useForm();

const loading = ref(false);
const options = ref<CollectionOption[]>([]);
const formCollectionId = ref<number>();

// 获取单个合集信息
const getCollectionInfo = async (collectionId: number) => {
	try {
		loading.value = true;
		const data = await service.video.collection.info({ id: collectionId });
		// 检查选项是否已存在，避免重复添加
		const exists = options.value.some(option => option.value === data.id);
		if (!exists) {
			options.value.push({
				label: data.name || '',
				value: data.id || 0
			});
		}
		return data;
	} catch (error) {
		console.error('获取合集信息失败:', error);
	} finally {
		loading.value = false;
	}
};

// 获取合集列表
const getCollectionsList = async () => {
	try {
		loading.value = true;
		const data = await service.video.collection.page();
		options.value = data.list.map(item => ({
			label: item.name || '',
			value: item.id || 0
		}));
	} catch (error) {
		console.error('获取合集列表失败:', error);
	} finally {
		loading.value = false;
	}
};

// 处理下拉框选择变化
const onSelectChange = async (collectionId?: number) => {
	// 更新内部状态
	formCollectionId.value = collectionId;

	// 查找选中的选项
	const selectedOption = collectionId
		? options.value.find(option => option.value === collectionId)
		: undefined;

	// 触发 change 事件回调
	emit('change', collectionId, selectedOption);

	// 如果有定义 props.onChange 回调函数，则调用
	if (props.onChange) {
		props.onChange(collectionId, selectedOption);
	}

	// 如果有collectionId且选项中不存在，则获取该合集信息
	if (collectionId && !options.value.some(option => option.value === collectionId)) {
		await getCollectionInfo(collectionId);
	}
	emit('update:collection_id', Form.value?.form?.collection_id);
};

// 处理合集ID变化
const handleCollectionIdChange = async (collectionId?: number) => {
	// 更新内部状态
	formCollectionId.value = collectionId;

	// 如果有collectionId且选项中不存在，则获取该合集信息
	if (collectionId && !options.value.some(option => option.value === collectionId)) {
		await getCollectionInfo(collectionId);
	}
	
};

// 监听表单合集ID变化
watch(() => Form.value?.form?.collection_id, handleCollectionIdChange, { immediate: true });

// 组件挂载时获取数据
onMounted(() => {
	getCollectionsList();
});

// 双向绑定表单值
watch(formCollectionId, val => {
	if (Form.value?.form) {
		Form.value.form.collection_id = val;
	}
});
</script>
