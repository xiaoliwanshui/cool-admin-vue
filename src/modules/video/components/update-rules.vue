<template>
	<el-row :gutter="20">
		<el-col :span="24">
			<div class="grid-content ep-bg-purple" />
			<el-checkbox-group v-model="updateRules" @change="handleSelectionChange">
				<el-row :gutter="10">
					<el-col
						v-for="item in fieldOptions"
						:key="item.value"
						:span="6"
						style="margin-bottom: 10px"
					>
						<el-checkbox :label="item.value">
							<span>{{ item.label }}</span>
						</el-checkbox>
					</el-col>
				</el-row>
			</el-checkbox-group>
		</el-col>
	</el-row>
</template>

<script lang="ts" setup name="update-rules">
import { useForm } from '@cool-vue/crud';
import { ref, watch, onMounted } from 'vue';
import type { CheckboxValueType } from 'element-plus';
import { useCool } from '/@/cool';
const { service } = useCool();

const Form = useForm();

// 定义选项的类型
interface FieldOption {
	label: string;
	value: string;
	disabled?: boolean;
}

// 固定的字段选项数据
const fieldOptions = ref<Array<FieldOption>>([]);

//请求网络数据
const updateFields = async () => {
	service.video.videos
		.videoEntity()
		.then(data => {
			// 获取字段列表
			fieldOptions.value = data;
		})
		.catch(err => {
			console.log(err);
		});
};

//调用网络请求
onMounted(() => {
	updateFields();
});

const updateRules = ref<string[]>([]);

// 处理选择变化
const handleSelectionChange = (value: CheckboxValueType[]) => {
	// 将选中的字段数组保存到表单中，只保留字符串类型的值
	const stringValues = value.filter((v): v is string => typeof v === 'string');
	Form.value.form.updateRules = stringValues;
	updateRules.value = stringValues;
};

// 监听表单值变化
watch(
	() => Form.value?.form?.updateRules,
	fields => {
		if (Array.isArray(fields)) {
			updateRules.value = fields;
		} else {
			updateRules.value = [];
		}
	},
	{
		immediate: true
	}
);
</script>
