<template>
	<div class="count-effect">
		<div class="card">
			<div class="card__header">
				<span class="label">{{ $t('反馈预览') }}</span>

				<el-icon class="icon">
					<chat-round />
				</el-icon>
			</div>

			<div class="card__container">
				<cl-number :value="feedback.sum" class="num" suffix="条" type="amount" />
			</div>

			<div class="card__footer">
				<ul class="cop">
					<li>
						<span>{{ $t('周同比') }}</span>

						<div class="fall">
							<el-icon>
								<bottom-right />
							</el-icon>

							<span>{{ feedback.week }}%</span>
						</div>
					</li>

					<li>
						<span>{{ $t('日同比') }}</span>

						<div class="rise">
							<el-icon>
								<top-right />
							</el-icon>

							<span>{{ feedback.day }}%</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { BottomRight, ChatRound, TopRight } from '@element-plus/icons-vue';
import { toRefs } from 'vue';

const props = defineProps<{
	feedback: {
		week: number;
		day: number;
		sum: number;
	};
}>();
const { feedback } = toRefs(props);
</script>

<style lang="scss" scoped>
.count-effect {
	.cop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		li {
			display: flex;
			list-style: none;
			flex: 1;

			.fall,
			.rise {
				display: flex;
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
	}
}
</style>
