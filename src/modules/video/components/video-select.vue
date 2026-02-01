<template>
	<el-row :gutter="20">
		<el-col :span="24">
			<div class="grid-content ep-bg-purple" />
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
						style="float: right; color: var(--el-text-color-secondary); font-size: 13px"
					>
						{{ item.remarks }}
					</span>
				</el-option>
			</el-select>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup>
import { useDict } from '/$/dict';
import { onMounted, ref, watch } from 'vue';
import { useCool } from '/@/cool/hooks';

// 定义 props
interface Props {
	videoId?: number;
	placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: '请选择或输入视频名'
});

// 定义 emit 事件
const emit = defineEmits<{
	(e: 'change', value: any);
}>();

const { dict } = useDict();
const loading = ref(false);
const selectedValue = ref<number | null>(null);
const { service } = useCool();
const options = ref<Array<{ label: string; value: number; remarks?: string }>>([]);

// 根据传入的 videoId 查询并回填默认值
const loadDefaultValue = async (videoId: number) => {
	if (!videoId) return;

	loading.value = true;
	try {
		const data = await service.video.videos.info({
			id: videoId
		});

		selectedValue.value = data.id || null;
		// 设置选项以便显示标签
		options.value = [
			{
				label: data.title || '',
				value: data.id || 0,
				remarks: data.remarks
			}
		];
		emit('change', data);
	} catch (error) {
		console.error('加载默认值失败:', error);
	} finally {
		loading.value = false;
	}
};

// 远程搜索方法
const remoteMethod = (query: string) => {
	if (query) {
		loading.value = true;
		service.video.videos
			.page({
				keyWord: query
			})
			.then(data => {
				loading.value = false;
				options.value = data.list.map(item => {
					return {
						label: item.title || '',
						value: item.id || 0,
						remarks: item.remarks
					};
				});
			})
			.catch(error => {
				loading.value = false;
				console.error('远程搜索失败:', error);
			});
	} else {
		options.value = [];
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
		}
	}
);
</script>
