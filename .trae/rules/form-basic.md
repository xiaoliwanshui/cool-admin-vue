# cl-form 组件示例 - 基础用法

## 起步 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>open</el-tag>
			<span>起步</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['form/open.vue']" />

			<!-- 自定义表单组件 -->
			<!--【很重要】ref 一定要对应 useForm 定义的值 -->
			<cl-form ref="Form"></cl-form>
		</div>

		<div class="f">
			<span class="date">2024-01-01</span>
		</div>
	</div>
</template>

<script setup lang="tsx">
import { useForm } from '@cool-vue/crud';

const Form = useForm();

function open() {
	Form.value?.open({
		title: '起步',

		items: [
			{
				label: '昵称',
				// 绑定值的标识，表单提交及回显会自动根据 prop 获取对应的值
				prop: 'nickname',
				// 组件绑定
				component: {
					// 必须是“全局注册”的组件名，如 element-plus 的 el-input、el-date-picker 等
					name: 'el-input',

					// 绑定的组件参数配置，如 clearable、placeholder 等
					// 组件内 emit 的用 on[name] 接收，如 onChange、onInput、onBlur 等
					props: {
						placeholder: '请输入昵称',
						clearable: true,
						onChange(value: string) {}
					}
				}
			},
			{
				prop: 'age',
				component: {
					name: 'el-input-number'
				},
				// 默认值，第一次打开有效
				value: 18
			}
		],
		on: {
			// 打开时触发
			open() {
				console.log(Form.value?.validateField);
			},

			// 关闭时触发。当配置该方法时，关闭事件会被阻断，使用 done() 关闭窗口
			close(action, done) {
				// action 为关闭窗口的触发动作 "save" | "close"
				// done 关闭事件
				done();
			},

			// 提交时触发
			submit(data, { done, close }) {
				// data 为表单值
				// done 关闭加载事件、但不关闭窗口
				// close 关闭窗口

				close();
			}
		}
	});
}
</script>

```

## 参数配置 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>config</el-tag>
			<span>参数配置</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['form/config.vue']" />

			<!-- 自定义表单组件 -->
			<cl-form ref="Form">
				<!-- 按钮插槽 -->
				<template #slot-btns>
					<el-button type="danger">按钮插槽</el-button>
				</template>
			</cl-form>
		</div>

		<div class="f">
			<span class="date">2024-01-01</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';
import { ElMessage } from 'element-plus';

const Form = useForm();

function open() {
	Form.value?.open({
		title: '参数配置',

		// 打开是否重置表单
		isReset: false,

		// 默认表单值
		form: {
			nickName: '神仙都没用'
		},

		// 表单配置
		props: {
			// 标签宽度
			labelWidth: '120px',

			// 标签位置
			labelPosition: 'top'
		},

		// 窗口的高。配置后，在窗口内部滚动。默认整个页面滚动
		height: '60vh',

		// 窗口的宽，默认 50%
		width: '60%',

		// 窗口设置
		dialog: {
			// 是否隐藏头部
			hideHeader: false,

			// 顶部操作按钮，默认["fullscreen", "close"]
			// fullscreen 全屏
			// close 关闭
			controls: ['close']
		},

		// 底部操作按钮
		op: {
			// 默认靠右布局
			justify: 'flex-end',

			// 保存按钮文字
			saveButtonText: '提交',

			// 关闭按钮文字
			closeButtonText: '关闭',

			// 是否隐藏
			hidden: false,

			// 按钮配置
			buttons: [
				// 自定义
				{
					label: '自定义按钮',
					onClick() {
						ElMessage.success('自定义按钮点击');
					}
				},
				// close 关闭
				'close',
				// save 保存
				'save',
				// 插槽使用，配合 template，往上看 cl-form 组件
				'slot-btns'
			]
		},

		// 表单项配置
		items: [
			{
				label: '昵称',
				prop: 'nickName',
				component: {
					name: 'el-input'
				}
			}
		],

		// 事件
		on: {
			submit(data, { close }) {
				close();
			}
		}
	});
}
</script>

```

## 布局 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>layout</el-tag>
			<span>布局</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['form/layout.vue']" />

			<!-- 自定义表单组件 -->
			<cl-form ref="Form"></cl-form>
		</div>

		<div class="f">
			<span class="date">2024-01-01</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';

const Form = useForm();

function open() {
	Form.value?.open({
		title: '布局',
		items: [
			{
				//【span】参考文档：https://element-plus.gitee.io/zh-CN/component/layout.html
				// 使用 1/24 分栏，默认 24
				span: 12,
				label: '昵称',
				prop: 'nickname',
				component: {
					name: 'el-input'
				}
			},
			{
				span: 12,
				label: '手机号',
				prop: 'phone',
				component: {
					name: 'el-input',
					props: {
						maxlength: 11
					}
				}
			},
			{
				//【flex】使宽度不填充满
				flex: false,
				label: '标签',
				prop: 'label',
				component: {
					name: 'el-input'
				}
			},
			{
				label: '状态',
				prop: 'status',
				value: 1,
				component: {
					name: 'el-radio-group',
					options: [
						{
							label: '开启',
							value: 1
						},
						{
							label: '关闭',
							value: 0
						}
					]
				}
			},
			{
				label: '备注',
				prop: 'remark',
				component: {
					name: 'el-input',
					props: {
						type: 'textarea',
						rows: 4
					}
				}
			}
		],
		on: {
			submit(data, { close }) {
				close();
			}
		}
	});
}
</script>

```