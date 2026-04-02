## 数据格式化 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>formatter</el-tag>
			<span>数据格式化</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['table/formatter.vue']" />

			<!-- 自定义表格组件 -->
			<cl-dialog v-model="visible" title="数据格式化" width="80%">
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
			<span class="date">2024-09-26</span>
		</div>
	</div>
</template>

<script setup lang="tsx">
import { useCrud, useTable } from '@cool-vue/crud';
import { ref } from 'vue';

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
			minWidth: 140
		},
		{
			label: '手机号',
			prop: 'phone',
			minWidth: 140,
			formatter(row) {
				return '📱' + row.phone;
			}
		},
		{
			label: '用户信息',
			minWidth: 200,
			// tsx 方式渲染
			// 【很重要】使用 tsx 语法时，script 的 lang 一定要设置为 tsx
			formatter(row) {
				// row 为当前行数据
				return (
					<el-row>
						<cl-avatar size={30} />
						<el-text style={{ marginLeft: '10px' }}>{row.name}</el-text>
					</el-row>
				);
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

## 隐藏/显示 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>hidden</el-tag>
			<span>隐藏/显示</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['table/hidden.vue']" />

			<!-- 自定义表格组件 -->
			<cl-dialog v-model="visible" title="隐藏/显示" width="80%">
				<cl-crud ref="Crud">
					<!--配置一个 tab -->
					<el-tabs v-model="active">
						<el-tab-pane label="员工" name="user"></el-tab-pane>
						<el-tab-pane label="企业" name="company"></el-tab-pane>
					</el-tabs>

					<cl-row>
						<!-- 使用方法 showColumn 显示 -->
						<el-button @click="showColumn('account')">显示账号</el-button>

						<!-- 使用方法 hideColumn 隐藏 -->
						<el-button @click="hideColumn('account')">隐藏账号</el-button>
					</cl-row>

					<cl-row>
						<cl-table ref="Table"></cl-table>
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
import { computed, ref } from 'vue';
import { useDict } from '/$/dict';

const { dict } = useDict();

// cl-crud 配置
const Crud = useCrud(
	{
		// 测试数据，移步到 cl-crud 例子查看
		service: 'test'
	},
	app => {
		app.refresh();
	}
);

const active = ref('user');

// cl-table 配置
const Table = useTable({
	autoHeight: false,
	contextMenu: ['refresh'],

	columns: [
		{
			label: 'ID',
			prop: 'id',
			minWidth: 140,

			//【很重要】配置 hidden 参数，格式为 boolean 或者 Vue.ComputedRef<boolean>
			hidden: computed(() => {
				return active.value != 'company';
			})
		},
		{
			label: '账号',
			prop: 'account',
			minWidth: 140,
			hidden: true // 默认 false
		},
		{
			label: '姓名',
			prop: 'name',
			minWidth: 140
		},
		{
			label: '手机号',
			prop: 'phone',
			minWidth: 140
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
	]
});

const visible = ref(false);

function open() {
	visible.value = true;
}

function showColumn(prop: string) {
	Table.value?.showColumn(prop);
}

function hideColumn(prop: string) {
	Table.value?.hideColumn(prop);
}
</script>

```

## 操作栏 示例

```vue
<template>
	<div class="scope">
		<div class="h">
			<el-tag size="small" effect="dark" disable-transitions>op</el-tag>
			<span>操作栏</span>
		</div>

		<div class="c">
			<el-button @click="open">预览</el-button>
			<demo-code :files="['table/op.vue']" />

			<!-- 自定义表格组件 -->
			<cl-dialog v-model="visible" title="操作栏" width="80%">
				<cl-crud ref="Crud">
					<cl-row>
						<cl-table ref="Table">
							<!-- 插槽的渲染方式 #[component.name] -->
							<template #slot-btns="{ scope }">
								<el-button
									@click="
										() => {
											ElMessage.info(scope.row.name);
										}
									"
									>插槽按钮</el-button
								>
							</template>
						</cl-table>
					</cl-row>

					<cl-row>
						<cl-flex1 />
						<cl-pagination />
					</cl-row>

					<!-- 新增、编辑 -->
					<cl-upsert ref="Upsert" />
				</cl-crud>
			</cl-dialog>
		</div>

		<div class="f">
			<span class="date">2024-01-01</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { ref } from 'vue';
import { useDict } from '/$/dict';
import { ElMessage } from 'element-plus';

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
			minWidth: 140
		},
		{
			label: '手机号',
			prop: 'phone',
			minWidth: 140
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
		},
		{
			//【很重要】type 必须是 op
			type: 'op',

			width: 410, // 宽度

			//【很重要】操作按钮配置，edit 和 info 必须搭配 cl-upsert 实现
			// edit 编辑，预先获取 service 的 info 接口数据，并带入 cl-upsert 的表单值中
			// info 详情，cl-upsert 内的组件全部传入 disabled 参数
			// delete 删除，调用 service 的 delete 接口删除行数据
			buttons: [
				{
					label: '编辑',
					type: 'primary',
					onClick({ scope }) {
						ElMessage.info(scope.row.name);
					}
				},
				{
					label: '删除',
					type: 'danger',
					onClick({ scope }) {
						ElMessage.info(scope.row.name);
					}
				},
				{
					label: '更多',
					type: 'success',
					children: [
						{
							label: '查看',
							onClick({ scope }) {
								ElMessage.info(scope.row.name);
							}
						},
						{
							label: '禁用',
							onClick({ scope }) {
								ElMessage.info(scope.row.name);
							}
						}
					]
				},
				{
					name: 'slot-btns'
				}
			]
		}
	]
});

// cl-upsert 配置，详细移步到 cl-upsert 示例查看
const Upsert = useUpsert({
	items: [
		{
			label: '姓名',
			prop: 'name',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '手机号',
			prop: 'phone',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '工作',
			prop: 'occupation',
			component: {
				name: 'cl-select',
				props: {
					tree: true, // 树形方式选择
					checkStrictly: true, // 任意层级都能点
					options: dict.get('occupation') // 使用字典数据
				}
			}
		}
	]
});

const visible = ref(false);

function open() {
	visible.value = true;
}
</script>

```