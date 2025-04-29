import { useCool } from "/@/cool";

// 假设 service.video.category.page 方法返回的对象结构是已知的，
// 以下是一个示例类型声明，你需要根据实际情况调整
interface PageResult {
	list: Array<{
		name: string;
		id: string | number;
	}>;
}

const { service } = useCool();

// 增加了输入参数类型和返回值类型声明
export const categoryGet = async (
	params: any
): Promise<Array<{ label: string; value: string | number }>> => {
	// 输入参数校验逻辑，这里使用了一个简单的示例，实际情况可能需要更复杂的逻辑
	if (!params || typeof params !== "object") {
		throw new Error("Invalid parameters");
	}

	try {
		// 假设 service.video.category.page 已经正确类型化，这样就可以避免使用 any
		const { list } = (await service.video.category.page(params)) as PageResult;

		return list.map((item) => {
			return {
				label: item.name,
				value: `${item.id}`
			};
		});
	} catch (error) {
		// 异常处理逻辑
		// 这里简单地将错误抛出，实际应用中可能需要更复杂的错误处理策略
		throw new Error("Failed to fetch category data");
	}
};
