<template>
	<div class="count-sales">
		<div class="card">
			<div class="card__header">
				<span class="label">{{ $t('总用户数') }}</span>
				<cl-svg class="icon" name="team" />
			</div>

			<div class="card__container">
				<cl-number :value="props.user.total" class="num" />

				<div class="rise">
					<el-icon>
						<top-right />
					</el-icon>

					<span>{{ dayOverDayRate }}%</span>
				</div>
			</div>

			<div class="card__footer">
				<span class="mr-2">{{ $t('日增用户数') }}</span>
				<span>{{ props.user.today }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { TopRight } from '@element-plus/icons-vue';
import { ref, toRefs, watch } from 'vue';

const dayOverDayRate = ref(0);

const props = defineProps<{
	user: { total: number; today: number };
}>();

const { user } = toRefs(props);

//计算日环比
function getRatio() {
	if (user.value.total > 0) {
		dayOverDayRate.value = Number(((user.value.today / user.value.total) * 100).toFixed(2));
	} else {
		dayOverDayRate.value = 0;
	}
}

watch(
	() => props,
	newProps => {
		getRatio();
	},
	{ deep: true }
);
</script>

<style lang="scss" scoped>
.count-sales {
	.fall,
	.rise {
		display: inline-flex;
		align-items: center;
		margin-left: 10px;
	}

	.fall {
		color: var(--el-color-success);
	}

	.rise {
		color: var(--el-color-danger);
	}
}
</style>
