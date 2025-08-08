<!--
 * @Author: 17691002584 17691002584@163.com
 * @Date: 2025-08-08 22:16:59
 * @LastEditors: 17691002584 17691002584@163.com
 * @LastEditTime: 2025-08-08 23:36:18
 * @FilePath: src/modules/video/components/week-from.vue
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 -->
<template>
	<el-row :gutter="20">
		<el-col :span="24">
			<div class="grid-content ep-bg-purple" />
			<el-select
				v-model="Form.form.videoId"
				:loading="loading"
				:remote-method="remoteMethod"
				clearable
				filterable
				placeholder="请输入视频名"
				remote
				reserve-keyword
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
import { useForm } from '@cool-vue/crud';
import { useDict } from '/$/dict';
import { ref } from 'vue';
import { useCool } from '/@/cool/hooks';

const { dict } = useDict();
const loading = ref(false);
console.log(dict.get('week').value.length, 2222222);
const Form = useForm();
const { service } = useCool();
const options = ref([]);
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
						label: item.title,
						value: item.id,
						remarks: item.remarks
					};
				});
			});
	} else {
		options.value = [];
	}
};
</script>
