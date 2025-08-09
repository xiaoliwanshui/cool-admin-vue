<template>
	<div class="count-paid">
		<div class="card">
			<div class="card__header">
				<span class="label">{{ $t('异常链接数') }}</span>
				<cl-svg class="icon" name="order" />
			</div>

			<div class="card__container">
				<cl-number :value="playLine.fail" class="num" suffix="笔" />
			</div>

			<div class="card__footer">
				<span class="mr-2">{{ $t('占有率') }}</span>
				<span>{{ playLine.percent }}%</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

const props = defineProps<{
	playLine: {
		fail: number;
		success: number;
		percent: number;
	};
}>();
const { playLine } = toRefs(props);
</script>
