<template>
	<div class="count-views">
		<div class="card">
			<div class="card__header">
				<span class="label">{{ $t('浏览量') }}</span>
				<cl-svg class="icon" name="trend" />
			</div>

			<div class="card__container">
				<v-chart :option="chartOption" autoresize />
			</div>

			<div class="card__footer">
				<span class="mr-2">{{ $t('访客数') }}</span>
				<span>{{ props.visit.total }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs, watch } from 'vue';

const props = defineProps<{
	visit: { total: number; today: number; data: object };
}>();
const chartOption = reactive({
	grid: {
		left: 0,
		top: 1,
		right: 0,
		bottom: 0
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		axisLine: {
			show: false
		},
		data: []
	},
	yAxis: {
		type: 'value',
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			show: false
		}
	},
	series: [
		{
			type: 'line',
			smooth: true,
			showSymbol: false,
			symbol: 'circle',
			symbolSize: 6,
			data: [],
			itemStyle: {
				color: '#4165d7'
			},
			lineStyle: {
				width: 2
			}
		}
	]
});
const { visit } = toRefs(props);
const render = () => {
	if (Object.keys(visit.value.data).length > 0) {
		const time = Object.keys(visit.value.data);
		const data = Object.values(visit.value.data);
		chartOption.xAxis.data = time;
		chartOption.series[0].data = data;
	}
};
watch(
	() => props,
	newProps => {
		render();
	},
	{ deep: true }
);
onMounted(() => {
	render();
});
</script>

<style lang="scss" scoped>
.count-views {
	.card {
		.echarts {
			height: 50px;
			width: 100%;
		}

		&__container {
			padding: 0;
		}

		&__footer {
			border-top: 0;
		}
	}
}
</style>
