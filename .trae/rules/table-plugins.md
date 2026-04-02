## 插件的使用 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>plugin</el-tag>
			<span>插件的使用</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['table/plugin/base.vue']" />

			<!-- 自定义表格组件 -->
			<cl-dialog v-model="visible" title="插件的使用" width="80%">
				<cl-crud ref="Crud">
					<cl-row>
						<cl-table ref="Table" />
					</cl-row>

					<cl-row>
						<cl-flex1 />
						<cl-pagination />
					</cl-row>
				</cl-crud>
			</cl-dialog>
		</div>

		<div class="f">
			<span class="date">2024-01-01</span>
		</div>
	</div>
</template>

<script setup lang="tsx">
import { useCrud, useTable } from '@cool-vue/crud';
import { ref } from 'vue';
import { useDict } from '/$/dict';
import { merge } from 'lodash-es';
import { defineComponent } from 'vue';

// 插件：列标签匹配，方便多个列表公用同一个组件
function setColumn(): ClTable.Plugin {
	const columns = {
		UserInfo: {
			label: '用户信息',
			minWidth: 200,
			component: {
				vm: defineComponent({
					name: 'user-info',

					props: {
						scope: null
					},

					setup(props) {
						return () => {
							return (
								<div>
									<p>{props.scope.name}</p>
									<p>{props.scope.phone}</p>
								</div>
							);
						};
					}
				})
			}
		}
	} as { [key: string]: DeepPartial<ClTable.Column> };

	return ({ exposed }) => {
		function deep(arr: ClTable.Column[]) {
			arr.forEach(e => {
				if (e.tag) {
					merge(e, columns[e.tag]);
				}
				deep(e.children || []);
			});
		}

		deep(exposed.columns);
	};
}

const { dict } = useDict();

// cl-crud 配置
const Crud = useCrud(
	{
		service: 'test'
	},
	app => {
		app.refresh();
	}
);

// cl-table 配置
const Table = useTable({
	autoHeight: false,
	contextMenu: ['refresh'],

	columns: [
		{
			type: 'selection'
		},
		{
			tag: 'UserInfo'
		},
		{
			label: '工作',
			prop: 'occupation',
			dict: dict.get('occupation'),
			minWidth: 140
		},
		{
			label: '创建时间',
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc'
		}
	],

	//【很重要】配置插件
	plugins: [setColumn()]
});

const visible = ref(false);

function open() {
	visible.value = true;
}
</script>

```

## 行编辑 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>row-edit</el-tag>
			<span>行编辑</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['table/plugin/row-edit.vue']" />

			<!-- 自定义表格组件 -->
			<cl-dialog v-model="visible" title="行编辑" width="80%">
				<cl-crud ref="Crud">
					<el-text class="mb-4" tag="p">点击姓名、手机号可以进行编辑</el-text>

					<cl-row>
						<cl-table ref="Table" />
					</cl-row>

					<cl-row>
						<cl-flex1 />
						<cl-pagination />
					</cl-row>
				</cl-crud>
			</cl-dialog>
		</div>

		<div class="f">
			<span class="date">2024-01-01</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCrud, useTable } from '@cool-vue/crud';
import { ref } from 'vue';
import { useDict } from '/$/dict';
import { Plugins } from '/#/crud';

const { dict } = useDict();

// cl-crud 配置
const Crud = useCrud(
	{
		service: 'test'
	},
	app => {
		app.refresh();
	}
);

// cl-table 配置
const Table = useTable({
	autoHeight: false,
	contextMenu: ['refresh'],

	columns: [
		{
			label: '姓名',
			prop: 'name',
			minWidth: 140,
			// 【很重要】行编辑，默认 el-input
			edit: true
		},
		{
			label: '手机号',
			prop: 'phone',
			minWidth: 140,
			// 【很重要】行编辑，开启、关闭
			edit: {
				enable: true
			}
		},
		{
			label: '工作',
			prop: 'occupation',
			dict: dict.get('occupation'),
			minWidth: 140,
			edit: {
				enable: true,
				// 【很重要】行编辑，组件配置
				component: {
					name: 'cl-select',
					props: {
						options: dict.get('occupation'),
						tree: true
					}
				}
			}
		},
		{
			label: '创建时间',
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc',
			// 【很重要】行编辑，组件配置
			edit: {
				enable: true,
				component: {
					name: 'el-date-picker',
					props: {
						type: 'date',
						valueFormat: 'YYYY-MM-DD'
					}
				}
			}
		},
		{
			type: 'op',
			buttons: ['delete']
		}
	],

	//【很重要】行编辑插件
	plugins: [Plugins.Table.rowEdit()]
});

const visible = ref(false);

function open() {
	visible.value = true;
}
</script>

```

## 表头搜索 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>search</el-tag>
			<span>表头搜索</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['table/search.vue']" />

			<!-- 自定义表格组件 -->
			<cl-dialog v-model="visible" title="表头搜索" width="80%">
				<cl-crud ref="Crud">
					<cl-row>
						<cl-table ref="Table" />
					</cl-row>

					<cl-row>
						<cl-flex1 />
						<cl-pagination />
					</cl-row>
				</cl-crud>
			</cl-dialog>
		</div>

		<div class="f">
			<span class="date">2024-01-01</span>
		</div>
	</div>
</template>

<script setup lang="tsx">
import { useCrud, useTable } from '@cool-vue/crud';
import { ref } from 'vue';
import { useDict } from '/$/dict';
import { Plus } from '@element-plus/icons-vue';

const { dict } = useDict();

// cl-crud 配置
const Crud = useCrud(
	{
		service: 'test'
	},
	app => {
		app.refresh();
	}
);

// cl-table 配置
const Table = useTable({
	autoHeight: false,
	contextMenu: ['refresh'],

	columns: [
		{
			label: '姓名',
			prop: 'name',
			minWidth: 140,

			//【很重要】搜索参数配置
			search: {
				isInput: false, // 默认false，是否输入框模式
				value: '', // 默认值
				refreshOnChange: true, // 默认false，搜索时刷新数据，service 的 page 接口请求参数为 { page: 1, [绑定的prop]: 输入值 }
				// 自定义渲染组件
				component: {
					name: 'el-input',
					props: {
						placeholder: '搜索姓名'
					}
				}
			}
		},
		{
			label: '手机号',
			prop: 'phone',
			minWidth: 140,

			//【很重要】搜索参数配置
			search: {
				// 是否显示搜索图标
				icon: () => <Plus />,

				// 自定义渲染组件
				component: {
					name: 'el-input',
					props: {
						placeholder: '搜索手机号',

						// 自定义 change 事件
						onChange(val) {
							Crud.value?.refresh({
								page: 1,
								phone: val
							});
						}
					}
				}
			}
		},
		{
			label: '工作',
			prop: 'occupation',
			dict: dict.get('occupation'),
			minWidth: 140,

			//【很重要】搜索参数配置
			search: {
				// 是否显示搜索图标
				icon: () => <cl-svg name="icon-app" size={13} />,
				// 自定义渲染组件
				component: {
					name: 'cl-select',
					props: {
						placeholder: '搜索工作',
						options: dict.get('occupation')
					}
				}
			}
		},
		{
			label: '创建时间',
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc'
		}
	]
});

const visible = ref(false);

function open() {
	visible.value = true;
}
</script>

```