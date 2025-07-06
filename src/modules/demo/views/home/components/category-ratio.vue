<template>
	<div class="card">
		<div class="card__header">
			<span class="label">{{ $t('类别占比') }}</span>
		</div>

		<div class="card__container">
			<v-chart :option="chartOption" autoresize />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core';
import { computed, onMounted, reactive, toRefs, watch } from 'vue';

const props = defineProps<{
	videoCategory: Array<{ total: number; today: number }>;
}>();
const isDark = useDark();

const textColor = computed(() => (isDark.value ? '#f1f1f9' : '#000'));

const chartOption = reactive({
	legend: {
		top: 'bottom',
		textStyle: {
			color: textColor
		}
	},
	grid: {
		top: 0
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c} ({d}%)'
	},
	series: [
		{
			type: 'pie',
			radius: ['35%', '50%'],
			avoidLabelOverlap: false,
			padAngle: 5,
			itemStyle: {
				borderRadius: 6
			},
			label: {
				color: textColor
			},
			data: []
		}
	]
});
const { videoCategory } = toRefs(props);
watch(
	() => videoCategory.value,
	val => {
		chartOption.series[0].data = val;
	}
);
onMounted(() => {
	chartOption.series[0].data = videoCategory.value;
});
</script>

<style lang="scss" scoped>
.card {
	&__container {
		height: 456px;
	}

	.echarts {
		height: calc(100% - 50px);
	}
}
</style>
