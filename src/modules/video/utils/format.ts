/**
 * 格式化标签数据
 * @param value 标签值，可以是字符串或数组
 * @returns 格式化后的标签数组
 */
export function formatTags(value: string | string[] | any): string[] {
	if (!value) return [];

	if (typeof value === 'string') {
		return value
			.split(',')
			.filter(Boolean)
			.map(item => item.trim());
	}

	if (Array.isArray(value)) {
		return value.filter(Boolean).map(item => String(item).trim());
	}

	return [];
}

/**
 * 防抖函数
 * @param func 要执行的函数
 * @param delay 延迟时间（毫秒）
 * @returns 防抖后的函数
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timer: ReturnType<typeof setTimeout> | null = null;

	return (...args: Parameters<T>) => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, delay);
	};
}

/**
 * 节流函数
 * @param func 要执行的函数
 * @param limit 时间限制（毫秒）
 * @returns 节流后的函数
 */
export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (...args: Parameters<T>) => void {
	let inThrottle = false;

	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			func(...args);
			inThrottle = true;
			setTimeout(() => {
				inThrottle = false;
			}, limit);
		}
	};
}
