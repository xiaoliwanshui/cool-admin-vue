<template>
	<div class="hot-search card">
		<div class="card__header">
			<span class="year">热搜排行榜</span>
		</div>

		<div class="hot-search__container">
			<el-row :gutter="20" class="hot-search__chart">
				<el-col :md="24" :xs="24">
					<div class="block">
						<div class="count">
							<div class="number">
								<span>搜索用户数</span>
								<span>{{ count }}</span>
							</div>
							<div class="rise">
								<i class="el-icon-top-right"></i>
								<span>+7%</span>
							</div>
						</div>

						<v-chart :option="chartOptions" autoresize />
					</div>
				</el-col>
			</el-row>

			<div class="hot-search__table">
				<cl-crud ref="Crud">
					<cl-table ref="Table" :border="false" />
				</cl-crud>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { useCrud, useTable } from '@cool-vue/crud';
import { computed, reactive, ref, watch } from 'vue';

const props = defineProps<{
	keyWord: Array<{
		params: {
			keyWord: string;
		};
		count: string;
	}>;
}>();

// 使用ref而不是reactive来保持响应性
const keyWord = ref(props.keyWord);

// 计算count总数
const count = computed(() => {
	return keyWord.value.reduce((total, item) => {
		return total + parseInt(item.count || '0');
	}, 0);
});

const tab = reactive({
	active: 'today',
	list: [
		{
			label: '日热搜',
			value: 'today'
		},
		{
			label: '周热搜',
			value: 'week'
		},
		{
			label: '月热搜',
			value: 'month'
		}
	]
});

const chartOptions = ref({
	grid: {
		left: 0,
		top: 10,
		right: 0,
		bottom: 0
	},
	xAxis: {
		type: 'category',
		data: [],
		boundaryGap: false
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
			name: '总访问量',
			type: 'line',
			smooth: true,
			showSymbol: false,
			symbol: 'circle',
			symbolSize: 6,
			data: [],
			areaStyle: {
				color: new echarts.graphic.LinearGradient(
					0,
					0,
					0,
					1,
					[
						{
							offset: 0,
							color: '#D1E5FF'
						},
						{
							offset: 1,
							color: '#FFFFFF'
						}
					],
					false
				)
			},
			itemStyle: {
				color: '#4165d7'
			},
			lineStyle: {
				width: 2
			}
		}
	]
});

// 初始化图表数据
function initChartData() {
	chartOptions.value = {
		...chartOptions.value,
		series: [
			{
				...chartOptions.value.series[0],
				data: keyWord.value.map(item => item.count)
			}
		],
		xAxis: {
			...chartOptions.value.xAxis,
			data: Array.from({ length: 12 }, (_, i) => `${i + 1}月`)
		}
	};
}

// 监听keyWord变化
watch(
	() => props.keyWord,
	newVal => {
		keyWord.value = newVal;
		initChartData();
	},
	{ immediate: true }
);

const Crud = useCrud(
	{
		service: {
			page() {
				return Promise.resolve({
					list: keyWord.value.slice(0, 7).map(item => ({
						keyWord: item.params.keyWord,
						count: item.count
					}))
				});
			}
		}
	},
	app => {
		setTimeout(() => {
			app.refresh();
		}, 1000);
	}
);

const Table = useTable({
	autoHeight: false,
	contextMenu: [],
	columns: [
		{
			label: '排名',
			type: 'index',
			width: 60
		},
		{
			label: '搜索关键词',
			prop: 'keyWord',
			minWidth: 100
		},
		{
			label: '用户数',
			prop: 'count',
			minWidth: 100
		}
	]
});

// 初始化数据
initChartData();
</script>

<style lang="scss" scoped>
.hot-search {
	&__header {
		display: flex;
		align-items: center;
		height: 50px;
		font-size: 15px;
		font-weight: bold;
		padding: 0 20px;
	}

	&__container {
		padding-bottom: 10px;
	}

	&__chart {
		padding: 0 20px;

		.block {
			.count {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 10px;
				height: 40px;

				.fall,
				.rise {
					display: flex;
					align-items: center;
					margin-left: 10px;
					font-size: 15px;
				}

				.fall {
					color: #13ae7c;
				}

				.rise {
					color: #f21e37;
				}

				.number {
					display: flex;
					align-items: center;

					span {
						font-size: 13px;

						&:last-child {
							margin-left: 10px;
							font-size: 15px;
							font-weight: bold;
						}
					}
				}
			}

			.echarts {
				height: 70px;
				width: 100%;
			}
		}
	}

	&__table {
		margin: 0 10px;
	}
}
</style>
