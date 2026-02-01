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
	videoLineId?: number;
	placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
	placeholder: '请选择或输入线路名'
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

// 根据传入的 videoLineId 查询并回填默认值
const loadDefaultValue = async (videoLineId: number) => {
	if (!videoLineId) return;

	loading.value = true;
	try {
		const data = await service.video.video_line.info({
			id: videoLineId
		});

		selectedValue.value = data.id || null;
		// 设置选项以便显示标签
		options.value = [
			{
				label: data.video_name || data.collection_name || '',
				value: data.id || 0,
				remarks: data.tag || data.video_name || data.collection_name
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
		service.video.video_line
			.page({
				keyWord: query
			})
			.then(data => {
				loading.value = false;
				options.value = data.list.map(item => {
					return {
						label: item.video_name || item.collection_name || item.tag || String(item.id),
						value: item.id || 0,
						remarks: item.tag || item.video_name || item.collection_name || ''
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
				video_name: selectedItem.label,
				collection_name: selectedItem.remarks,
				tag: selectedItem.remarks
			});
		}
	} else {
		// 清空选择时发送 null
		emit('change', null);
	}
};

// 组件挂载时，如果有传入 videoLineId，则加载默认值
onMounted(() => {
	if (props.videoLineId) {
		loadDefaultValue(props.videoLineId);
	}
});

// 监听 videoLineId 变化，如果外部传入新的 videoLineId，则重新加载默认值
watch(
	() => props.videoLineId,
	newVideoLineId => {
		if (newVideoLineId) {
			loadDefaultValue(newVideoLineId);
		} else {
			// 如果 videoLineId 被设置为 undefined 或 null，清空当前值
			selectedValue.value = null;
			options.value = [];
		}
	}
);
</script>