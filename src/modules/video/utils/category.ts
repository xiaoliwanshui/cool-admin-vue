import { useCool } from "/@/cool";

// 定义服务返回的数据结构
interface CategoryItem {
	name: string;
	id: string | number;
}

interface PageResult {
	list: CategoryItem[];
}

// 定义返回的数据结构
export interface CategoryOption {
	label: string;
	value: string;
}

// 定义参数类型
interface CategoryParams {
	[key: string]: any;
}

const { service } = useCool();

/**
 * 获取分类数据
 * @param params 查询参数
 * @returns 分类选项列表
 */
export const categoryGet = async (
	params: CategoryParams = {}
): Promise<CategoryOption[]> => {
	// 输入参数校验
	if (!params || typeof params !== "object") {
		throw new Error("Invalid parameters: params must be an object");
	}

	try {
		const response = await service.video.category.page(params);
		const { list } = response as unknown as PageResult;

		// 确保 list 是数组
		if (!Array.isArray(list)) {
			return [];
		}

		return list.map((item) => ({
			label: item.name || '',
			value: String(item.id)
		}));
	} catch (error) {
		// 更详细的错误处理
		console.error('Error fetching category data:', error);
		// 返回空数组而不是抛出错误，避免影响正常流程
		return [];
	}
};
