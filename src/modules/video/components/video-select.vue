<template>
	<el-select
		v-model="selectedValue"
		:loading="loading"
		:placeholder="placeholder"
		:remote-method="remoteMethod"
		clearable
		filterable
		remote
		reserve-keyword
		@change="handleChange"
	>
		<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value"
		>
			<span style="float: left">{{ item.label }}</span>
			<span
				v-if="item.remarks"
				style="float: right; color: var(--el-text-color-secondary); font-size: 13px"
			>
				{{ item.remarks }}
			</span>
		</el-option>
	</el-select>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useCool } from '/@/cool/hooks';

// 定义数据类型
interface VideoOption {
	label: string;
	value: number;
	remarks?: string;
}

interface VideoInfo {
	id: number;
	title: string;
	remarks?: string;
	[key: string]: any;
}

// 定义 props
interface Props {
	videoId?: number;
	placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: '请选择视频'
});

// 定义 emit 事件
const emit = defineEmits<{
	(e: 'change', value: VideoInfo | null);
}>();

const loading = ref(false);
const selectedValue = ref<number | null>(null);
const { service } = useCool();
const options = ref<VideoOption[]>([]);

// 根据传入的 videoId 查询并回填默认值
const loadDefaultValue = async (videoId: number) => {
	if (!videoId || videoId <= 0) return;

	loading.value = true;
	try {
		const data = await service.video.videos.info({
			id: videoId
		});

		if (data && data.id) {
			selectedValue.value = data.id;
			// 设置选项以便显示标签
			options.value = [
				{
					label: data.title || '',
					value: data.id,
					remarks: data.remarks
				}
			];
			emit('change', {
				id: data.id,
				title: data.title || '',
				remarks: data.remarks,
				...data
			});
		}
	} catch (error) {
		console.error('加载默认值失败:', error);
		// 错误时清空选择
		selectedValue.value = null;
		options.value = [];
		emit('change', null);
	} finally {
		loading.value = false;
	}
};

// 远程搜索方法
const remoteMethod = async (query: string) => {
	if (!query.trim()) {
		options.value = [];
		return;
	}

	loading.value = true;
	try {
		const data = await service.video.videos.page({
			keyWord: query.trim()
		});

		if (data && Array.isArray(data.list)) {
			options.value = data.list.map(item => ({
				label: item.title || '',
				value: item.id || 0,
				remarks: item.remarks
			}));
		} else {
			options.value = [];
		}
	} catch (error) {
		console.error('远程搜索失败:', error);
		options.value = [];
	} finally {
		loading.value = false;
	}
};

// 处理选择变化
const handleChange = (value: number | null) => {
	if (value) {
		// 找到对应的选项数据并发送给父组件
		const selectedItem = options.value.find(item => item.value === value);
		if (selectedItem) {
			emit('change', {
				id: selectedItem.value,
				title: selectedItem.label,
				remarks: selectedItem.remarks
			});
		}
	} else {
		// 清空选择时发送 null
		emit('change', null);
	}
};

// 组件挂载时，如果有传入 videoId，则加载默认值
onMounted(() => {
	if (props.videoId) {
		loadDefaultValue(props.videoId);
	}
});

// 监听 videoId 变化，如果外部传入新的 videoId，则重新加载默认值
watch(
	() => props.videoId,
	newVideoId => {
		if (newVideoId) {
			loadDefaultValue(newVideoId);
		} else {
			// 如果 videoId 被设置为 undefined 或 null，清空当前值
			selectedValue.value = null;
			options.value = [];
			emit('change', null);
		}
	}
);
</script>
