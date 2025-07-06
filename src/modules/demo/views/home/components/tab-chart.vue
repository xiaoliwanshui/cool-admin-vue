<template>
	<div class="card">
		<div class="card__header">
			<cl-select-button v-model="tab.active" :options="tab.list" @change="onChange" />
		</div>

		<v-chart :option="chartOption" autoresize />
	</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, toRefs } from 'vue';
import { useDark } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { useTheme } from '/#/theme';

const props = defineProps<{
	videoCreateTime: {
		create: Array<{ date: string; value: number }>;
		update: Array<{ date: string; value: number }>;
	};
}>();

const { videoCreateTime } = toRefs(props);
const { t } = useI18n();
const isDark = useDark();
const theme = useTheme();

const tab = reactive({
	active: 'create',

	list: [
		{
			label: t('日新增'),
			value: 'create'
		},
		{
			label: t('日更新'),
			value: 'update'
		}
	]
});

const chartOption = reactive({
	grid: {
		containLabel: true,
		left: '5%',
		right: '5%'
	},
	xAxis: {
		type: 'category',
		data: [] as string[],
		offset: 5,
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		}
	},
	yAxis: {
		type: 'value',
		offset: 20,
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		}
	},
	tooltip: {
		trigger: 'axis',
		formatter: (comp: any) => {
			const name = tab.list.find(e => e.value === tab.active)?.label;

			return `${name}：${comp[0]?.value || 0}`;
		},
		axisPointer: {
			show: true,
			status: 'shadow',
			z: -1,
			type: 'shadow'
		},
		extraCssText: 'width:120px; white-space:pre-wrap'
	},
	series: [
		{
			barWidth: 25,
			type: 'bar',
			data: [] as number[],
			itemStyle: {
				color: computed(() => theme.color)
			}
		},
		{
			type: 'bar',
			barWidth: 25,
			xAxisIndex: 0,
			barGap: '-100%',
			data: [] as number[],
			itemStyle: {
				color: computed(() => (isDark.value ? '#f1f1f911' : '#f1f1f9'))
			},
			zlevel: -1
		}
	]
});

function refresh(key: string) {
	chartOption.series[0].data = videoCreateTime.value[key].map((item, index) => item.value);
	chartOption.xAxis.data = videoCreateTime.value[key].map((item, index) =>
		item.date.slice(0, 10)
	);
}

function onChange(key: string) {
	refresh(key);
}

onMounted(() => {
	setTimeout(() => {
		refresh('create');
	}, 1000);
});
</script>

<style lang="scss" scoped>
.card {
	&__header {
		padding: 10px 20px 10px 10px !important;

		.year {
			display: flex;
			align-items: center;
			font-size: 14px;
			line-height: 1;
			color: var(--el-text-color-primary);

			&::before {
				content: '';
				display: inline-block;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: var(--el-color-info);
				margin-right: 6px;
			}
		}
	}

	.echarts {
		height: 500px;
		width: 100%;
	}
}
</style>
