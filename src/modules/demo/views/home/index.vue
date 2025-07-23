<template>
	<el-scrollbar>
		<div class="demo-home">
			<el-row :gutter="10">
				<el-col :lg="6" :md="12" :xs="24">
					<count-user :user="data.user" />
				</el-col>
				<el-col :lg="6" :md="12" :xs="24">
					<count-views :visit="data.visit" />
				</el-col>
				<el-col :lg="6" :md="12" :xs="24">
					<count-paid />
				</el-col>
				<el-col :lg="6" :md="12" :xs="24">
					<count-effect />
				</el-col>
			</el-row>

			<el-row :gutter="10">
				<el-col :lg="24" :xs="24">
					<tab-chart :video-create-time="data.videoCreateTime" />
				</el-col>
			</el-row>

			<el-row :gutter="10">
				<el-col :lg="14" :sm="24">
					<hot-search :key-word="data.keyWord" />
				</el-col>
				<el-col :lg="10" :sm="24">
					<category-ratio :video-category="data.videoCategory" />
				</el-col>
			</el-row>
		</div>
	</el-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useCool } from '/@/cool/hooks';
import CategoryRatio from './components/category-ratio.vue';
import CountUser from './components/count-user.vue';
import CountViews from './components/count-views.vue';
import CountPaid from './components/count-paid.vue';
import CountEffect from './components/count-effect.vue';
import TabChart from './components/tab-chart.vue';
import HotSearch from './components/hot-search.vue';

const { service } = useCool();
defineOptions({
	name: 'home'
});

const data = ref({
	user: {
		total: 0,
		today: 0
	},
	visit: {
		total: 0,
		today: 0,
		data: {}
	},
	statisticTitleCount: {
		today: [],
		week: [],
		month: [],
		year: []
	},
	videoCategory: [],
	videoCreateTime: {
		create: [],
		update: []
	},
	keyWord: [
		{
			params: {},
			count: '0'
		}
	]
});

const getData = async () => {
	data.value = await service.echart.echart.info();
};

onMounted(() => {
	getData();
});
</script>

<style lang="scss">
.demo-home {
	overflow-x: hidden;

	.card {
		border-radius: 10px;
		margin-bottom: 10px;
		border: 1px solid var(--el-border-color-extra-light);
		background-color: var(--el-bg-color);
		color: var(--el-text-color-primary);
		user-select: none;

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 20px;
			min-height: 50px;

			.label {
				font-size: 15px;
			}

			.icon {
				font-size: 30px;
				background-color: var(--el-fill-color-light);
				padding: 5px;
				border-radius: 6px;
			}
		}

		&__container {
			padding: 0 20px;
			min-height: 50px;

			.num {
				font-size: 32px;
			}
		}

		&__footer {
			display: flex;
			align-items: center;
			height: 50px;
			margin: 0 5px;
			padding: 0 15px;
			box-sizing: border-box;
			font-size: 12px;

			.label {
				margin-right: 10px;
			}
		}
	}
}
</style>
