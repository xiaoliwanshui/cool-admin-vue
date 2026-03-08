<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 导出按钮 -->
			<cl-export-btn :columns="Table?.columns" />
			<cl-flex1 />
			<!-- 条件搜索 -->
			<cl-filter :label="t('分类')">
				<cl-select
					:options="dict.get('video_category')"
					:width="140"
					allLevelsId
					check-strictly
					prop="category"
					tree
				/>
			</cl-filter>
			<cl-search-key :placeholder="t('搜索关键字')" />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table">
				<template #column-color="{ scope }">
					<el-tag v-if="scope.row.color" :color="scope.row.color"
						>{{ scope.row.color ?? t('暂无颜色') }}
					</el-tag>
				</template>
			</cl-table>
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert">
			<template #slot-video-select="{ scope }">
				<video-select :video-id="scope?.relatedId" @change="videoSelectChange" />
			</template>
		</cl-upsert>
	</cl-crud>
</template>

<script lang="ts" setup>
import { useDict } from '/$/dict';
import { useCrud, useSearch, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import ColorThief from 'colorthief';
import videoSelect from '/$/video/components/video-select.vue';

const { refs, setRefs } = useCool();

defineOptions({
	name: 'video-swiper'
});

const { dict } = useDict();
const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('标题'),
			prop: 'title',
			required: true,
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('副标题'),
			prop: 'subTitle',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('图片'),
			required: true,
			prop: 'image',
			component: {
				name: 'cl-upload',
				props: {
					clearable: true,
					onSuccess: async res => {
						console.log('上传成功:', res);
						// 获取上传的图片 URL
						const imageUrl = res.url || res.data?.url;
						if (imageUrl) {
							try {
								// 使用 ColorThief 获取主色调
								const colorThief = new ColorThief();
								const img = new Image();
								// 设置跨域属性
								img.crossOrigin = 'Anonymous';
								img.src = imageUrl;

								img.onload = () => {
									try {
										const dominantColor = colorThief.getColor(img);
										// 将 RGB 值转换为十六进制颜色值
										const hexColor = rgbToHex(
											dominantColor[0],
											dominantColor[1],
											dominantColor[2]
										);

										console.log('提取的颜色:', hexColor);

										// 将颜色亮度调整到0.8，避免颜色过暗
										const adjustedColor = adjustBrightness(hexColor, 0.8);
										console.log('调整后的颜色:', adjustedColor);

										// 根据官方文档，使用 nextTick 确保 DOM 更新
										import('vue').then(vue => {
											vue.nextTick(() => {
												// 使用官方推荐的方式设置表单值
												if (Upsert.value) {
													Upsert.value.setForm('color', adjustedColor);
												}
											});
										});
									} catch (getColorError) {
										console.error('获取图片颜色失败:', getColorError);
									}
								};

								img.onerror = () => {
									console.error('图片加载失败:', imageUrl);
								};
							} catch (error) {
								console.error('初始化ColorThief失败:', error);
								console.error('错误详情:', error.message);
							}
						}
					},
					onChange: file => {
						console.log('文件改变:', file);
					},
					onUpload: (data, file) => {
						console.log('开始上传:', data, file);
					},
					onError: err => {
						console.log('上传失败:', err);
					}
				}
			}
		},
		{
			label: t('类型'),
			required: true,
			prop: 'category',
			component: {
				name: 'el-tree-select',
				props: {
					data: dict.get('video_category'),
					'check-strictly': true
				}
			}
		},
		{
			label: t('颜色'),
			prop: 'color',
			component: {
				name: 'el-color-picker',
				ref: setRefs('color'),
				props: {
					predefine: ['#ff4400', '#ff8c00', '#ffd700', '#90ee90', '#1e90ff', '#c71585'],
					modelValue: undefined // 初始值为undefined
				}
			}
		},
		///TODO: 添加关联视频路径
		// {
		// 	label: t('页面'),
		// 	prop: 'path',
		// 	component: { name: 'el-input', props: { clearable: true } }
		// },
		{
			label: t('选择关联'),
			prop: 'relatedId',
			component: {
				name: 'slot-video-select'
			}
		},

		{
			label: t('排序'),
			prop: 'sort',
			component: { name: 'el-input', props: { clearable: true } }
		},
		{
			label: t('状态'),
			prop: 'status',
			flex: false,
			component: {
				name: 'cl-switch',
				props: {
					activeValue: 1,
					inactiveValue: 2
				}
			},
			required: true,
			value: 1
		}
	]
});

const videoSelectChange = (data: any) => {
	if (data) {
		Upsert.value.setForm('relatedId', data.id);
		// 如果需要同时设置其他字段，也可以在这里添加
	}
};

// RGB 转十六进制颜色值的辅助函数
function rgbToHex(r: number, g: number, b: number): string {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// 调整颜色亮度的辅助函数，将亮度调整到指定值
function adjustBrightness(hex: string, brightness: number): string {
	// 移除 # 符号
	hex = hex.replace('#', '');

	// 解析十六进制颜色值
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// 将RGB转换为HSL
	const { h, s, l } = rgbToHsl(r, g, b);

	// 创建新的HSL值，保持色相和饱和度不变，只调整亮度
	return hslToHex(h, s, brightness);
}

// RGB转HSL的辅助函数
function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
	r /= 255;
	g /= 255;
	b /= 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max === min) {
		h = s = 0; // achromatic
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		h /= 6;
	}

	return { h, s, l };
}

// HSL转十六进制颜色值的辅助函数
function hslToHex(h: number, s: number, l: number): string {
	const { r, g, b } = hslToRgb(h, s, l);
	return rgbToHex(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255));
}

// HSL转RGB的辅助函数
function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
	let r: number, g: number, b: number;

	if (s === 0) {
		r = g = b = l; // achromatic
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;

		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return { r, g, b };
}

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('标题'), prop: 'title', minWidth: 120 },
		{ label: t('副标题'), prop: 'subTitle', minWidth: 120 },
		{
			label: t('图片'),
			prop: 'image',
			minWidth: 120,
			component: {
				name: 'cl-image'
			}
		},
		{
			label: t('分类'),
			prop: 'category',
			dict: dict.get('video_category'),
			dictColor: true,
			minWidth: 150,
			dictAllLevels: true // 显示所有等级
		},
		{
			label: t('颜色'),
			prop: 'color'
		},
		{ label: t('页面'), prop: 'path', minWidth: 120 },
		{ label: t('关联ID'), prop: 'relatedId', minWidth: 120 },
		{ label: t('排序'), prop: 'sort', minWidth: 120 },
		{
			label: t('状态'),
			prop: 'status',
			minWidth: 120,
			component: {
				name: 'cl-switch'
			}
		},
		{ label: t('创建用户ID'), prop: 'createUserId', minWidth: 120 },
		{ label: t('更新用户ID'), prop: 'updateUserId', minWidth: 120 },
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc',
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updateTime',
			minWidth: 170,
			sortable: 'custom',
			component: { name: 'cl-date-text' }
		},
		{ type: 'op', width: 250, buttons: ['info', 'edit', 'delete'] }
	]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.video.swiper
	},
	app => {
		app.refresh();
	}
);
</script>
