<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 快速导入按钮 -->
			<el-button type="success" @click="openQuickImport">快速导入</el-button>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 导出按钮 -->
			<cl-export-btn :columns="Table?.columns" />
			<cl-flex1 />
			<cl-filter :label="t('分类')">
				<cl-select
					:options="dict.get('live_category')"
					:width="140"
					check-strictly
					prop="category_id"
					tree
				/>
			</cl-filter>
			<!-- 关键字搜索 -->
			<cl-search-key />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
	<!-- 快速导入表单 -->
	<cl-form ref="ImportForm"></cl-form>
</template>

<script lang="ts" name="video-live" setup>
import { useCrud, useForm, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useDict } from '/$/dict';
import { useI18n } from 'vue-i18n';
import { ElMessage, ElMessageBox } from 'element-plus';

const { service } = useCool();
const { dict } = useDict();
const { t } = useI18n();
const ImportForm = useForm();
const image: string = `https://cool-file-1300398902.cos.ap-nanjing.myqcloud.com/app%2Fbase%2F693631ad5c0d48ea95c4db3cadbea02e_%E7%94%B5%E8%A7%86%E5%8F%B0%E5%9B%BE%E6%A0%87%402x%20(2).png`;
// cl-upsert
const Upsert = useUpsert({
	items: [
		{ label: t('标题'), prop: 'title', required: true, component: { name: 'el-input' } },
		{
			label: t('分类'),
			prop: 'category_id',
			required: true,
			component: {
				name: 'el-select',
				options: dict.get('live_category')
			}
		},
		{
			label: t('状态'),
			prop: 'status',
			component: {
				name: 'cl-switch'
			},
			required: true
		},
		{
			label: t('图片'),
			prop: 'image',
			required: true,
			component: {
				name: 'cl-upload',
				props: {
					text: t('选择图片')
				}
			},
			value: image
		},
		{ label: t('拉流地址'), prop: 'pullUrl', component: { name: 'el-input' } }
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('ID'), prop: 'id' },
		{ label: t('房间号'), prop: 'roomId' },
		{ label: t('标题'), prop: 'title' },
		{ label: t('分类'), prop: 'category_id', dict: dict.get('live_category') },
		{ label: t('图片'), prop: 'image', component: { name: 'cl-image' } },
		{
			label: t('状态'),
			prop: 'status',
			component: {
				name: 'cl-switch'
			},
			required: true
		},
		() => {
			return {
				label: t('推流服务器'),
				prop: 'pushUrl'
			};
		},
		() => {
			return {
				label: t('推流码'),
				prop: 'pushCode'
			};
		},
		() => {
			return {
				label: t('拉流地址'),
				prop: 'pullUrl'
			};
		},
		{ label: t('创建时间'), prop: 'createTime' },
		{ label: t('更新时间'), prop: 'updateTime' },
		{ type: 'op', width: 250, buttons: ['info', 'edit', 'delete'] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.video.live
	},
	app => {
		app.refresh();
	}
);



// 打开快速导入表单
function openQuickImport() {
	ImportForm.value?.open({
		title: '快速导入',
		width: '800px',
		items: [
			{
				label: '导入数据',
				prop: 'importData',
				component: {
					name: 'el-input',
					props: {
						type: 'textarea',
						rows: 10,
						placeholder:
							'请输入数据，格式：标题,拉流地址（每行一条）\n例如：\n澳视澳门,http://103.233.191.134:1935/ch1/ch1.live/playlist.m3u8'
					}
				},
			},
			{
				label: '默认分类',
				prop: 'category_id',
				required: true,
				component: {
					name: 'el-select',
					options: dict.get('live_category')
				}
			},
			{
				label: '默认状态',
				prop: 'status',
				component: {
					name: 'cl-switch'
				},
				value: 1
			}
		],
		on: {
			async submit(data, { close, done }) {
				try {
					// 解析导入数据
					const lines = data.importData
						.split('\n')
						.map(line => line.trim())
						.filter(line => line);

					if (lines.length === 0) {
						ElMessage.warning('请输入要导入的数据');
						done();
						return;
					}

					// 解析每行数据
					const importList: Array<{ title: string; pullUrl: string }> = [];
					const errors: string[] = [];

					for (let i = 0; i < lines.length; i++) {
						const line = lines[i];
						const parts = line.split(',');

						if (parts.length < 2) {
							errors.push(`第 ${i + 1} 行格式错误：${line}`);
							continue;
						}

						const title = parts[0].trim();
						const pullUrl = parts.slice(1).join(',').trim(); // 处理URL中可能包含逗号的情况

						if (!title || !pullUrl) {
							errors.push(`第 ${i + 1} 行数据不完整：${line}`);
							continue;
						}

						importList.push({ title, pullUrl });
					}

					if (errors.length > 0) {
						ElMessageBox.alert(errors.join('\n'), '数据格式错误', {
							type: 'warning',
							dangerouslyUseHTMLString: false
						});
						done();
						return;
					}

					if (importList.length === 0) {
						ElMessage.warning('没有有效的数据可导入');
						done();
						return;
					}

					// 确认导入
					await ElMessageBox.confirm(
						`将导入 ${importList.length} 条数据，是否继续？`,
						'确认导入',
						{
							type: 'info'
						}
					);

					// 批量创建
					let successCount = 0;
					let failCount = 0;

					for (const item of importList) {
						try {
							await service.video.live.add({
								title: item.title,
								pullUrl: item.pullUrl,
								category_id: data.category_id,
								status: data.status || 1,
								image: image
							});
							successCount++;
						} catch (error: any) {
							failCount++;
							console.error(`导入失败：${item.title}`, error);
						}
					}

					ElMessage.success(`导入完成！成功：${successCount} 条，失败：${failCount} 条`);

					// 刷新列表
					Crud.value?.refresh();
					close();
				} catch (error: any) {
					if (error !== 'cancel') {
						ElMessage.error(error.message || '导入失败');
					}
					done();
				}
			}
		}
	});
}
</script>
