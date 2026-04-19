<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 执行 SQL 按钮 -->
			<el-button type="primary" @click="openSqlDialog()">
				<el-icon>
					<prom />
				</el-icon>
				{{ $t('执行 SQL') }}
			</el-button>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 条件搜索 -->
			<cl-filter :label="t('SQL 类型')">
				<cl-select :options="sqlTypeOptions" :width="140" prop="sqlType" />
			</cl-filter>
			<cl-filter :label="t('执行状态')">
				<cl-select :options="statusOptions" :width="120" prop="status" />
			</cl-filter>
			<cl-search-key :placeholder="t('搜索 SQL 语句')" />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table">
				<template #column-sqlType="{ scope }">
					<el-tag :type="getSqlTypeTag(scope.row.sqlType)">
						{{ scope.row.sqlType || 'UNKNOWN' }}
					</el-tag>
				</template>
				<template #column-status="{ scope }">
					<el-tag :type="scope.row.status === 1 ? 'success' : 'danger'">
						{{ scope.row.status === 1 ? t('成功') : t('失败') }}
					</el-tag>
				</template>
				<template #column-error="{ scope }">
					<el-tag v-if="scope.row.error" size="small" type="danger">
						{{ scope.row.error }}
					</el-tag>
					<span v-else>-</span>
				</template>
				<template #column-warning="{ scope }">
					<el-tag v-if="scope.row.warning" size="small" type="warning">
						{{ scope.row.warning }}
					</el-tag>
					<span v-else>-</span>
				</template>
			</cl-table>
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- SQL 执行弹窗 -->
		<cl-dialog v-model="sqlDialogVisible" :close-on-click-modal="false" :title="$t('执行 SQL')">
			<el-form label-position="top">
				<el-form-item :label="$t('SQL 语句')" required>
					<el-input
						v-model="sqlForm.sql"
						:placeholder="
							$t('请输入 SQL 语句，例如：SELECT * FROM table_name LIMIT 10')
						"
						:rows="10"
						maxlength="5000"
						show-word-limit
						type="textarea"
					/>
				</el-form-item>

				<el-form-item :label="$t('验证码')" required>
					<el-input
						v-model="sqlForm.verifyCode"
						:placeholder="$t('请输入验证码')"
						maxlength="4"
						@keyup.enter="executeSql"
					>
						<template #suffix>
							<pic-captcha
								:ref="setRefs('picCaptcha')"
								v-model="sqlForm.captchaId"
								@change="
									() => {
										sqlForm.verifyCode = '';
									}
								"
							/>
						</template>
					</el-input>
				</el-form-item>
			</el-form>

			<template #footer>
				<el-button @click="sqlDialogVisible = false">{{ $t('取消') }}</el-button>
				<el-button @click="resetSqlForm">{{ $t('重置') }}</el-button>
				<el-button :loading="executing" type="primary" @click="executeSql">
					<el-icon>
						<prom />
					</el-icon>
					{{ $t('执行 SQL') }}
				</el-button>
			</template>
		</cl-dialog>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'cmsdatabase-cmsdatabase'
});

import { reactive, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import PicCaptcha from '/$/base/pages/login/components/pic-captcha.vue';

const { refs, setRefs, service } = useCool();
const { t } = useI18n();

// SQL 类型选项
const sqlTypeOptions = [
	{ label: 'SELECT', value: 'SELECT' },
	{ label: 'INSERT', value: 'INSERT' },
	{ label: 'UPDATE', value: 'UPDATE' },
	{ label: 'DELETE', value: 'DELETE' },
	{ label: 'CREATE', value: 'CREATE' },
	{ label: 'DROP', value: 'DROP' },
	{ label: 'ALTER', value: 'ALTER' },
	{ label: 'TRUNCATE', value: 'TRUNCATE' },
	{ label: 'REPLACE', value: 'REPLACE' },
	{ label: 'UNKNOWN', value: 'UNKNOWN' }
];

// 执行状态选项
const statusOptions = [
	{ label: t('成功'), value: 1 },
	{ label: t('失败'), value: 0 }
];

// 弹窗控制
const sqlDialogVisible = ref(false);
const executing = ref(false);

// SQL 表单
const sqlForm = reactive({
	sql: '',
	captchaId: '',
	verifyCode: ''
});

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('选择创建用户'),
			prop: 'createUserId',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('选择更新用户'),
			prop: 'updateUserId',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('SQL'),
			prop: 'sql',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('SQL 类型'),
			prop: 'sqlType',
			component: {
				name: 'cl-select',
				props: { options: sqlTypeOptions }
			},
			value: 'UNKNOWN',
			span: 12,
			required: true
		},
		{
			label: t('执行状态'),
			prop: 'status',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('影响行数'),
			prop: 'affectedRows',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('执行时间'),
			prop: 'executionTime',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('错误信息'),
			prop: 'error',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('警告信息'),
			prop: 'warning',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },

		{
			label: t('SQL 类型'),
			prop: 'sqlType',
			minWidth: 100,
			component: {
				name: 'slot-sqlType'
			}
		},
		{
			label: t('SQL 语句'),
			prop: 'sql',
			minWidth: 300,
			showOverflowTooltip: true
		},
		{
			label: t('执行状态'),
			prop: 'status',
			minWidth: 100,
			component: {
				name: 'slot-status'
			}
		},
		{
			label: t('影响行数'),
			prop: 'affectedRows',
			minWidth: 100
		},
		{
			label: t('执行时间'),
			prop: 'executionTime',
			minWidth: 100,
			formatter: (row: any) => `${row.executionTime}ms`
		},
		{
			label: t('错误信息'),
			prop: 'error',
			minWidth: 150,
			showOverflowTooltip: true,
			component: {
				name: 'slot-error'
			}
		},
		{
			label: t('警告信息'),
			prop: 'warning',
			minWidth: 150,
			showOverflowTooltip: true,
			component: {
				name: 'slot-warning'
			}
		},
		{ label: t('创建用户 ID'), prop: 'createUserId', minWidth: 120 },
		{ label: t('更新用户 ID'), prop: 'updateUserId', minWidth: 120 },
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 170,
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updateTime',
			minWidth: 170,
			component: { name: 'cl-date-text' }
		},
		{
			type: 'op',
			width: 200,
			buttons: [
				{
					label: t('复制'),
					type: 'primary',
					onClick({ scope }) {
						copyRow(scope.row);
					}
				},
				'delete'
			]
		}
	]
});

// cl-search
const Search = useSearch({
	sqlType: undefined,
	status: undefined
});

// cl-crud
const Crud = useCrud(
	{
		service: service.cmsdatabase.cmsdatabase
	},
	app => {
		app.refresh();
	}
);

// 打开 SQL 执行弹窗
function openSqlDialog(sql?: string) {
	sqlDialogVisible.value = true;
	sqlForm.sql = sql || '';
	sqlForm.verifyCode = '';
	sqlForm.captchaId = '';
	refs.picCaptcha.refresh();
}

// 重置 SQL 表单
function resetSqlForm() {
	sqlForm.sql = '';
	sqlForm.verifyCode = '';
	sqlForm.captchaId = '';
	refs.picCaptcha.refresh();
}

// 执行 SQL
async function executeSql() {
	if (!sqlForm.sql.trim()) {
		return ElMessage.error(t('SQL 语句不能为空'));
	}

	if (!sqlForm.verifyCode) {
		return ElMessage.error(t('验证码不能为空'));
	}

	// 二次确认 - 所有 SQL 操作都需要确认
	try {
		const sqlType = getSqlType(sqlForm.sql);
		let confirmMessage = t('确定要执行以下 SQL 语句吗？');
		let confirmTitle = t('操作确认');
		let confirmType: 'info' | 'warning' | 'error' = 'info';

		// 危险操作检查
		const dangerousKeywords = ['DROP', 'DELETE', 'TRUNCATE'];
		const upperSql = sqlForm.sql.toUpperCase();
		const isDangerous = dangerousKeywords.some(keyword => upperSql.includes(keyword));

		if (isDangerous) {
			confirmMessage = t(
				'⚠️ 警告：检测到危险 SQL 操作，可能会导致数据丢失，确定要继续执行吗？'
			);
			confirmTitle = t('危险操作警告');
			confirmType = 'error';
		} else if (['UPDATE', 'ALTER', 'CREATE', 'INSERT'].includes(sqlType)) {
			confirmMessage = t('该操作将修改数据库数据或结构，确定要继续执行吗？');
			confirmTitle = t('修改操作警告');
			confirmType = 'warning';
		}

		await ElMessageBox.confirm(confirmMessage, confirmTitle, {
			confirmButtonText: t('确定执行'),
			cancelButtonText: t('取消'),
			type: confirmType
		});
	} catch {
		return;
	}

	executing.value = true;

	try {
		// 调用 SQL 执行 API
		const res = await service.cmsdatabase.cmsdatabase.execute({
			sql: sqlForm.sql,
			captchaId: sqlForm.captchaId,
			verifyCode: sqlForm.verifyCode
		});

		ElMessage.success(t('SQL 执行成功'));

		// 关闭执行弹窗
		sqlDialogVisible.value = false;

		// 刷新列表
		Crud.value?.refresh();
	} catch (err: any) {
		ElMessage.error(t('SQL 执行失败'));
	}

	executing.value = false;
}

// 获取 SQL 类型
function getSqlType(sql: string): string {
	const upperSql = sql.trim().toUpperCase();
	if (upperSql.startsWith('SELECT')) return 'SELECT';
	if (upperSql.startsWith('INSERT')) return 'INSERT';
	if (upperSql.startsWith('UPDATE')) return 'UPDATE';
	if (upperSql.startsWith('DELETE')) return 'DELETE';
	if (upperSql.startsWith('CREATE')) return 'CREATE';
	if (upperSql.startsWith('DROP')) return 'DROP';
	if (upperSql.startsWith('ALTER')) return 'ALTER';
	if (upperSql.startsWith('TRUNCATE')) return 'TRUNCATE';
	return 'UNKNOWN';
}

// 获取 SQL 类型的标签颜色
function getSqlTypeTag(sqlType?: string): string {
	switch (sqlType) {
		case 'SELECT':
			return 'success';
		case 'INSERT':
			return 'primary';
		case 'UPDATE':
			return 'warning';
		case 'DELETE':
		case 'DROP':
		case 'TRUNCATE':
			return 'danger';
		default:
			return 'info';
	}
}

// 复制行数据并打开新增表单
async function copyRow(row: any) {
	openSqlDialog(row.sql);
}
</script>

<style lang="scss" scoped></style>
