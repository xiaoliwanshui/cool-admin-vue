<template>
	<div class="cl-menu-icon">
		<div class="cl-menu-icon__current" v-if="showIcon && modelValue">
			<cl-svg :name="modelValue" />
		</div>

		<el-select v-model="value" filterable :placeholder="t('请选择图标')" fit-input-width clearable>
			<div class="cl-menu-icon__list">
				<el-option v-for="item in list" :key="item" :value="item">
					<cl-svg :name="item" />
				</el-option>
			</div>
		</el-select>
	</div>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'cl-menu-icon'
});

import { ref, useModel } from 'vue';
import { svgIcons } from 'virtual:svg-icons';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	},
	showIcon: Boolean
});

const emit = defineEmits(['update:modelValue']);

// 图标列表
const list = ref(svgIcons.filter(e => e.indexOf('icon-') === 0));

// 已选图标
const value = useModel(props, 'modelValue');
</script>

<style lang="scss" scoped>
.cl-menu-icon {
	display: flex;
	align-items: center;

	&__current {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 5px;
		height: 20px;
		width: 20px;
		font-size: 20px;
	}
}
</style>