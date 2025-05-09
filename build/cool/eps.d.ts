declare namespace Eps {
	interface AppListEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 程序名
		 */
		name?: string;

		/**
		 * logo
		 */
		logo?: string;

		/**
		 * 封面图
		 */
		cover?: string;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 联系人
		 */
		contact?: string;

		/**
		 * 联系电话
		 */
		phone?: string;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 域名
		 */
		url?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AppMenuEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 页面名
		 */
		name?: string;

		/**
		 * 别名
		 */
		label?: string;

		/**
		 * icon
		 */
		icon?: string;

		/**
		 * 页面路径
		 */
		path?: string;

		/**
		 * condition
		 */
		condition?: string;

		/**
		 * 启用
		 */
		status?: number;

		/**
		 * i18n
		 */
		i18n?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 数据来源
		 */
		dataSource?: number;

		/**
		 * component
		 */
		component?: string;

		/**
		 * seo标题
		 */
		seoTitle?: string;

		/**
		 * seo描述
		 */
		seoDescription?: string;

		/**
		 * seo关键字
		 */
		seoKeywords?: string;

		/**
		 *  props
		 */
		props?: string;

		/**
		 *  show
		 */
		show?: number;

		/**
		 *  appid
		 */
		appid?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface NoticeInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 内容
		 */
		content?: longtext;

		/**
		 * 类型
		 */
		type?: number;

		/**
		 * 摘要
		 */
		summary?: longtext;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 部门名称
		 */
		name?: string;

		/**
		 * 创建者ID
		 */
		userId?: number;

		/**
		 * 上级部门ID
		 */
		parentId?: number;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 行为
		 */
		action?: string;

		/**
		 * ip
		 */
		ip?: string;

		/**
		 * 参数
		 */
		params?: json;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 父菜单ID
		 */
		parentId?: number;

		/**
		 * 菜单名称
		 */
		name?: string;

		/**
		 * 菜单地址
		 */
		router?: string;

		/**
		 * 权限标识
		 */
		perms?: string;

		/**
		 * 类型 0-目录 1-菜单 2-按钮
		 */
		type?: number;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 视图地址
		 */
		viewPath?: string;

		/**
		 * 路由缓存
		 */
		keepAlive?: boolean;

		/**
		 * 是否显示
		 */
		isShow?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 键
		 */
		keyName?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 数据类型 0-字符串 1-富文本 2-文件
		 */
		dataType?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 用户ID
		 */
		userId?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 角色标签
		 */
		label?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 数据权限是否关联上下级
		 */
		relevance?: boolean;

		/**
		 * 菜单权限
		 */
		menuIdList?: json;

		/**
		 * 部门权限
		 */
		departmentIdList?: json;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 部门ID
		 */
		departmentId?: number;

		/**
		 * 创建者ID
		 */
		userId?: number;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 密码版本, 作用是改完密码，让原来的token失效
		 */
		passwordV?: number;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 头像
		 */
		headImg?: string;

		/**
		 * 手机
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * socketId
		 */
		socketId?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AlbumEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 类型 1影片 2名人 3文章
		 */
		title?: string;

		/**
		 * 标题
		 */
		name?: string;

		/**
		 * 封面地址
		 */
		surface_plot?: string;

		/**
		 * 是否推荐 1是 2否
		 */
		recommend?: BigInt;

		/**
		 * 是否推荐 1是 2否
		 */
		status?: BigInt;

		/**
		 * 简介
		 */
		introduce?: string;

		/**
		 * 日人气
		 */
		popularity_day?: BigInt;

		/**
		 * 周人气
		 */
		popularity_week?: BigInt;

		/**
		 * 月人气
		 */
		popularity_month?: BigInt;

		/**
		 * 总人气
		 */
		popularity_sum?: BigInt;

		/**
		 * 备注
		 */
		note?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 专题关联类型
		 */
		category_id?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AlbumCloudDiskEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 云盘ID
		 */
		cloudDiskId?: number;

		/**
		 * 专辑ID
		 */
		albumId?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 图片
		 */
		image?: string;

		/**
		 * 标签
		 */
		tags?: json;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 链接
		 */
		link?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CloudDiskEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 图片
		 */
		image?: string;

		/**
		 * 标签
		 */
		tags?: json;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * 链接
		 */
		link?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 金币
		 */
		coin?: number;

		/**
		 * 浏览量
		 */
		views?: number;

		/**
		 * 收藏
		 */
		collect?: number;

		/**
		 * 点赞
		 */
		like?: number;

		/**
		 * 分享
		 */
		share?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CloudDiskSwiperEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 图片
		 */
		image?: string;

		/**
		 * 页面
		 */
		path?: string;

		/**
		 * 关联ID
		 */
		relatedId?: number;

		/**
		 * appid
		 */
		appid?: number;

		/**
		 * 类型
		 */
		type?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AlbumComicEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 漫画ID
		 */
		comicId?: number;

		/**
		 * 专题ID
		 */
		albumId?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 标题
		 */
		name?: string;

		/**
		 * 封面图片链接
		 */
		coverImg?: string;

		/**
		 * 标签
		 */
		tags?: json;

		/**
		 * 评分
		 */
		score?: float;

		/**
		 * 漫画简介
		 */
		description?: string;

		/**
		 * 上架下架状态
		 */
		status?: number;

		/**
		 * 总章节数
		 */
		chapter?: number;

		/**
		 * 出版日期
		 */
		publishingDate?: string;

		/**
		 * 出版社
		 */
		publishingHouse?: string;

		/**
		 * 买断价格
		 */
		buyoutPrice?: number;

		/**
		 * 是否直接买断
		 */
		buyoutStatus?: number;

		/**
		 * 总卷数
		 */
		volume?: number;

		/**
		 * 收藏
		 */
		collect?: number;

		/**
		 * 总页数
		 */
		page?: number;

		/**
		 * 漫画语言
		 */
		language?: number;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 漫画更新状态
		 */
		updateStatus?: number;

		/**
		 * 人气
		 */
		popularity?: number;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ComicEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		name?: string;

		/**
		 * 标签
		 */
		tags?: json;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 人气
		 */
		popularity?: number;

		/**
		 * 收藏
		 */
		collect?: number;

		/**
		 * 关联作者
		 */
		author?: string;

		/**
		 * 封面图片链接
		 */
		coverImg?: string;

		/**
		 * 出版社
		 */
		publishingHouse?: string;

		/**
		 * 出版日期
		 */
		publishingDate?: string;

		/**
		 * 漫画简介
		 */
		description?: string;

		/**
		 * 上架下架状态
		 */
		status?: number;

		/**
		 * 总卷数
		 */
		volume?: number;

		/**
		 * 是否直接买断
		 */
		buyoutStatus?: number;

		/**
		 * 买断价格
		 */
		buyoutPrice?: number;

		/**
		 * 总章节数
		 */
		chapter?: number;

		/**
		 * 总页数
		 */
		page?: number;

		/**
		 * 评分
		 */
		score?: float;

		/**
		 * 漫画语言
		 */
		language?: number;

		/**
		 * 漫画更新状态
		 */
		updateStatus?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ComicImageEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 漫画
		 */
		comicId?: number;

		/**
		 * 剧集封面
		 */
		coverImg?: string;

		/**
		 * 图片链接
		 */
		image?: json;

		/**
		 * 图片在漫画中的顺序
		 */
		sequence?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 是否收费
		 */
		payStatus?: number;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ComicSwiperEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 图片
		 */
		image?: string;

		/**
		 * 页面
		 */
		path?: string;

		/**
		 * 关联ID
		 */
		relatedId?: number;

		/**
		 * appid
		 */
		appid?: number;

		/**
		 * 类型
		 */
		type?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 价格
		 */
		price?: number;

		/**
		 * 描述
		 */
		description?: string;

		/**
		 * 主图
		 */
		mainImage?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 示例图
		 */
		exampleImages?: json;

		/**
		 * 库存
		 */
		stock?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 昵称
		 */
		userName?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 类型ID
		 */
		typeId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 值
		 */
		value?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 父ID
		 */
		parentId?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标识
		 */
		key?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 简介
		 */
		description?: string;

		/**
		 * Key名
		 */
		keyName?: string;

		/**
		 * Hook
		 */
		hook?: string;

		/**
		 * 描述
		 */
		readme?: string;

		/**
		 * 版本
		 */
		version?: string;

		/**
		 * Logo(base64)
		 */
		logo?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * 内容
		 */
		content?: json;

		/**
		 * ts内容
		 */
		tsContent?: json;

		/**
		 * 插件的plugin.json
		 */
		pluginJson?: json;

		/**
		 * 配置
		 */
		config?: json;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 表
		 */
		entityInfo?: json;

		/**
		 * 操作人
		 */
		userId?: number;

		/**
		 * 被删除的数据
		 */
		data?: json;

		/**
		 * 请求的接口
		 */
		url?: string;

		/**
		 * 请求参数
		 */
		params?: json;

		/**
		 * 删除数据条数
		 */
		count?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 姓名
		 */
		userName?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 地址
		 */
		url?: string;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 分类ID
		 */
		classifyId?: number;

		/**
		 * 文件id
		 */
		fileId?: string;

		/**
		 * 文件名
		 */
		name?: string;

		/**
		 * 文件大小
		 */
		size?: number;

		/**
		 * 文档版本
		 */
		version?: number;

		/**
		 * 文件位置
		 */
		key?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 类别名称
		 */
		name?: string;

		/**
		 * 父分类ID
		 */
		parentId?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 任务ID
		 */
		jobId?: string;

		/**
		 * 任务配置
		 */
		repeatConf?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * cron
		 */
		cron?: string;

		/**
		 * 最大执行次数 不传为无限次
		 */
		limit?: number;

		/**
		 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
		 */
		every?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0-停止 1-运行
		 */
		status?: number;

		/**
		 * 开始时间
		 */
		startDate?: Date;

		/**
		 * 结束时间
		 */
		endDate?: Date;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 执行的service实例ID
		 */
		service?: string;

		/**
		 * 状态 0-系统 1-用户
		 */
		type?: number;

		/**
		 * 下一次执行时间
		 */
		nextRunTime?: Date;

		/**
		 * 状态 0-cron 1-时间间隔
		 */
		taskType?: number;

		/**
		 * undefined
		 */
		lastExecuteTime?: Date;

		/**
		 * undefined
		 */
		lockExpireTime?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 联系人
		 */
		contact?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 省
		 */
		province?: string;

		/**
		 * 市
		 */
		city?: string;

		/**
		 * 区
		 */
		district?: string;

		/**
		 * 地址
		 */
		address?: string;

		/**
		 * 是否默认
		 */
		isDefault?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CollectEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 关联id
		 */
		associationId?: number;

		/**
		 * 封面
		 */
		cover?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DownloadEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 关联Id
		 */
		associationId?: number;

		/**
		 * appid
		 */
		appid?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 登录唯一ID
		 */
		unionid?: string;

		/**
		 * 头像
		 */
		avatarUrl?: string;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 性别
		 */
		gender?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 登录方式
		 */
		loginType?: number;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 介绍
		 */
		description?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface LikeEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 关联id
		 */
		associationId?: number;

		/**
		 * 封面
		 */
		cover?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShareEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 关联id
		 */
		associationId?: number;

		/**
		 * 封面
		 */
		cover?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ViewsEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 关联id
		 */
		associationId?: number;

		/**
		 * 封面
		 */
		cover?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AdsEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 广告名称
		 */
		name?: string;

		/**
		 * 位置
		 */
		position?: string;

		/**
		 * 广告类型 image图片 text文字 custom自定义
		 */
		ads_type?: string;

		/**
		 * 自定义内容
		 */
		custom?: string;

		/**
		 * 内容
		 */
		content?: string;

		/**
		 * html广告
		 */
		html?: string;

		/**
		 * 视频广告地址
		 */
		video?: string;

		/**
		 * 链接
		 */
		link?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 状态 1显示 2关闭
		 */
		state?: number;

		/**
		 * 允许关闭 1允许 2不允许
		 */
		close?: number;

		/**
		 * 显示时长 单位秒
		 */
		duration?: number;

		/**
		 * 链接
		 */
		url?: string;

		/**
		 * 是否默认静音
		 */
		muted?: number;

		/**
		 * 须观看的时长，期间不能被跳过
		 */
		playDuration?: number;

		/**
		 * 广告总时长，单位为秒
		 */
		totalDuration?: number;

		/**
		 * 创建时间
		 */
		create_at?: BigInt;

		/**
		 * 上线时间
		 */
		online_at?: BigInt;

		/**
		 * 下线时间
		 */
		offline_at?: BigInt;

		/**
		 * 更新时间
		 */
		update_at?: BigInt;

		/**
		 * 打开方式
		 */
		target?: string;

		/**
		 * 是否是全站应用,1-是，2-否
		 */
		is_all_site?: number;

		/**
		 * 定时器
		 */
		ad_timer?: number;

		/**
		 * 终端web h5 app
		 */
		terminal?: number;

		/**
		 * createdAt
		 */
		createdAt?: Date;

		/**
		 * updated_at
		 */
		updatedAt?: Date;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoAlbum {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 名人id
		 */
		album_id?: BigInt;

		/**
		 * 影片id
		 */
		videos_id?: BigInt;

		/**
		 * create_at
		 */
		create_at?: BigInt;

		/**
		 * update_at
		 */
		update_at?: BigInt;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 影片标题
		 */
		title?: string;

		/**
		 * 分类
		 */
		category_id?: number;

		/**
		 * 影片封面图
		 */
		surface_plot?: string;

		/**
		 * 是否推荐 1是 2否
		 */
		recommend?: BigInt;

		/**
		 * 是否轮播 1是 2否
		 */
		cycle?: BigInt;

		/**
		 * 轮播图片
		 */
		cycle_img?: string;

		/**
		 * 收费模式 1免费 2vip免费 3金币点播
		 */
		charging_mode?: BigInt;

		/**
		 * 购买模式 1按部 2按集
		 */
		buy_mode?: BigInt;

		/**
		 * 金币点播值
		 */
		gold?: BigInt;

		/**
		 * 导演
		 */
		directors?: string;

		/**
		 * 演员
		 */
		actors?: string;

		/**
		 * imd评分.百分制
		 */
		imdb_score?: BigInt;

		/**
		 * iimd评分ID
		 */
		imdb_score_id?: string;

		/**
		 * 豆瓣评分.百分制
		 */
		douban_score?: number;

		/**
		 * 豆瓣评分ID
		 */
		douban_score_id?: string;

		/**
		 * 简介
		 */
		introduce?: string;

		/**
		 * 自定义标签
		 */
		label?: string;

		/**
		 * 自定义语言
		 */
		language?: number;

		/**
		 * 自定义地区
		 */
		region?: number;

		/**
		 * 连载状态
		 */
		note?: string;

		/**
		 * 时长(单位s)
		 */
		duration?: BigInt;

		/**
		 * 序列号
		 */
		serial_number?: string;

		/**
		 * 连载状态
		 */
		year?: string;

		/**
		 * alias
		 */
		alias?: string;

		/**
		 * 状态
		 */
		status?: BigInt;

		/**
		 * 总人气
		 */
		popularity_sum?: BigInt;

		/**
		 * 日人气
		 */
		popularity_day?: BigInt;

		/**
		 * 月人气
		 */
		popularity_month?: BigInt;

		/**
		 * 周人气
		 */
		popularity_week?: BigInt;

		/**
		 * alias
		 */
		release_at?: BigInt;

		/**
		 * shelf_at
		 */
		shelf_at?: BigInt;

		/**
		 * 截屏
		 */
		screenshot?: string;

		/**
		 * 采集的源地址
		 */
		play_url?: longtext;

		/**
		 * 播放地址是否入库1-已经入库
		 */
		play_url_put_in?: number;

		/**
		 * 片尾时间
		 */
		trailer_time?: number;

		/**
		 * unit
		 */
		unit?: string;

		/**
		 * 总集数
		 */
		number?: BigInt;

		/**
		 * 更新集数
		 */
		total?: BigInt;

		/**
		 * 横屏海报
		 */
		horizontal_poster?: string;

		/**
		 * 竖屏海报
		 */
		vertical_poster?: string;

		/**
		 * gif
		 */
		gif?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BarrageEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 站点ID
		 */
		site_id?: BigInt;

		/**
		 * 用户ID
		 */
		member_id?: string;

		/**
		 * 视频ID
		 */
		video_id?: BigInt;

		/**
		 * 资源名称
		 */
		resource_name?: string;

		/**
		 * 线路ID
		 */
		play_line_id?: BigInt;

		/**
		 * 相对时间
		 */
		relative_time?: number;

		/**
		 * 发送时间
		 */
		send_time?: number;

		/**
		 * 发送日期
		 */
		send_date?: string;

		/**
		 * 弹幕内容
		 */
		content?: string;

		/**
		 * 弹幕字体大小
		 */
		size?: number;

		/**
		 * 弹幕类型
		 */
		type?: number;

		/**
		 * 弹幕颜色
		 */
		color?: string;

		/**
		 * 点赞数
		 */
		agree?: number;

		/**
		 * IP地址
		 */
		ip?: string;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 拒绝理由
		 */
		reject_reason?: string;

		/**
		 * createdAt
		 */
		create_at?: BigInt;

		/**
		 * updatedAt
		 */
		updated_at?: BigInt;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CategoryEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 父id
		 */
		parent_id?: BigInt;

		/**
		 * 类型 1影片 2名人 3文章
		 */
		type?: BigInt;

		/**
		 * 分类名称
		 */
		name?: string;

		/**
		 * 排序
		 */
		sort?: BigInt;

		/**
		 * create_at
		 */
		create_at?: BigInt;

		/**
		 * update_at
		 */
		update_at?: BigInt;

		/**
		 * 是否是竖屏，1-是，0-否
		 */
		is_vertical?: number;

		/**
		 * 是否是纯文字，1-是，0-否
		 */
		is_font?: number;

		/**
		 * 站点id
		 */
		site_id?: number;

		/**
		 * status
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CollectionEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 数据类型:1JSON 2XML
		 */
		data_method?: BigInt;

		/**
		 * 数据类型:1视频 2影人
		 */
		data_type?: BigInt;

		/**
		 * 地址
		 */
		address?: string;

		/**
		 * 参数
		 */
		param?: string;

		/**
		 * 收费模式 1免费 2vip免费 3金币点播
		 */
		charging_mode?: BigInt;

		/**
		 * 数据操作 1新增+更新 2新增 3更新
		 */
		data_handle?: BigInt;

		/**
		 * 请求日志id
		 */
		log_id?: BigInt;

		/**
		 * 超管平台资源id
		 */
		sr_id?: BigInt;

		/**
		 * COMMENT
		 */
		status?: BigInt;

		/**
		 * 说明
		 */
		desc?: string;

		/**
		 * 来源
		 */
		tags?: string;

		/**
		 * 来源
		 */
		color?: string;

		/**
		 * 来源
		 */
		bold?: number;

		/**
		 * 适用系统:sda-精品 mc-苹果cms mc10-苹果10 fei4-飞飞4 sea-海洋cms ct-赤兔 zp-赞片 max-马克思
		 */
		cms?: string;

		/**
		 * 关联播放器ID
		 */
		player_id?: number;

		/**
		 * 是否匹配资源播放器
		 */
		match_player?: number;

		/**
		 * 是否启用解析,1-是，2-否
		 */
		use_parse?: number;

		/**
		 * 解析地址，视频播放地址
		 */
		parse_address?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * create_at
		 */
		create_at?: BigInt;

		/**
		 * update_at
		 */
		update_at?: BigInt;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CollectionCategoryEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 资源id
		 */
		collection_id?: number;

		/**
		 * 资源名称
		 */
		collection_name?: string;

		/**
		 * 采集资源分类id
		 */
		class_id?: number;

		/**
		 * 采集资源分类名称
		 */
		class_name?: string;

		/**
		 * 采集资源分类父id
		 */
		class_pid?: string;

		/**
		 * 采集资源分类pid
		 */
		parentId?: number;

		/**
		 * 系统资源分类id
		 */
		sys_category_id?: number;

		/**
		 * 收费模式 1免费 2vip免费 3金币点播
		 */
		charging_mode?: number;

		/**
		 * 金币点播值
		 */
		gold?: number;

		/**
		 * 购买模式 1按部 2按集
		 */
		buy_mode?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserLiveEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 图片
		 */
		image?: string;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 房间号
		 */
		roomId?: string;

		/**
		 * 分类
		 */
		type?: number;

		/**
		 * 标签
		 */
		types?: json;

		/**
		 * 推流地址
		 */
		pushUrl?: string;

		/**
		 * 拉流地址
		 */
		pullUrl?: string;

		/**
		 * 推流码
		 */
		pushCode?: string;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PlayerEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标签
		 */
		tag?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * key
		 */
		key?: string;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 介绍
		 */
		introduce?: string;

		/**
		 * 代码
		 */
		code?: string;

		/**
		 * 解析模式
		 */
		parse_mod?: number;

		/**
		 * 解析地址
		 */
		parse_address?: string;

		/**
		 * 解析字段
		 */
		parse_column?: string;

		/**
		 * json服务器
		 */
		json_server?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PlayLineEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 影视ID
		 */
		video_id?: BigInt;

		/**
		 * 影视名称
		 */
		video_name?: string;

		/**
		 * 资源ID
		 */
		video_line_id?: BigInt;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 资源id
		 */
		collection_id?: number;

		/**
		 * 资源名称
		 */
		collection_name?: string;

		/**
		 * 文件地址
		 */
		file?: string;

		/**
		 * 收费模式 1免费 2vip免费 3金币点播
		 */
		charging_mode?: BigInt;

		/**
		 * 金币数量
		 */
		currency?: BigInt;

		/**
		 * 副标题
		 */
		sub_title?: string;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 是否是直播源1-是 0-否
		 */
		live_source?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 标识
		 */
		tag?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoSwiperEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 图片
		 */
		image?: string;

		/**
		 * 页面
		 */
		path?: string;

		/**
		 * 关联ID
		 */
		relatedId?: number;

		/**
		 * category
		 */
		category?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 状态
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 影片标题
		 */
		title?: string;

		/**
		 * 分类
		 */
		category_id?: number;

		/**
		 * 影片封面图
		 */
		surface_plot?: string;

		/**
		 * 是否推荐 1是 2否
		 */
		recommend?: BigInt;

		/**
		 * 是否轮播 1是 2否
		 */
		cycle?: BigInt;

		/**
		 * 轮播图片
		 */
		cycle_img?: string;

		/**
		 * 收费模式 1免费 2vip免费 3金币点播
		 */
		charging_mode?: BigInt;

		/**
		 * 购买模式 1按部 2按集
		 */
		buy_mode?: BigInt;

		/**
		 * 金币点播值
		 */
		gold?: BigInt;

		/**
		 * 导演
		 */
		directors?: string;

		/**
		 * 演员
		 */
		actors?: string;

		/**
		 * imd评分.百分制
		 */
		imdb_score?: BigInt;

		/**
		 * iimd评分ID
		 */
		imdb_score_id?: string;

		/**
		 * 豆瓣评分.百分制
		 */
		douban_score?: number;

		/**
		 * 豆瓣评分ID
		 */
		douban_score_id?: string;

		/**
		 * 简介
		 */
		introduce?: string;

		/**
		 * 日人气
		 */
		popularity_day?: BigInt;

		/**
		 * 周人气
		 */
		popularity_week?: BigInt;

		/**
		 * 月人气
		 */
		popularity_month?: BigInt;

		/**
		 * 总人气
		 */
		popularity_sum?: BigInt;

		/**
		 * 连载状态
		 */
		note?: string;

		/**
		 * 连载状态
		 */
		year?: string;

		/**
		 * 关联专题id
		 */
		album_id?: number;

		/**
		 * 状态
		 */
		status?: BigInt;

		/**
		 * 时长(单位s)
		 */
		duration?: BigInt;

		/**
		 * 自定义地区
		 */
		region?: number;

		/**
		 * 自定义语言
		 */
		language?: number;

		/**
		 * 自定义标签
		 */
		label?: string;

		/**
		 * 总集数
		 */
		number?: BigInt;

		/**
		 * 更新集数
		 */
		total?: BigInt;

		/**
		 * 横屏海报
		 */
		horizontal_poster?: string;

		/**
		 * 竖屏海报
		 */
		vertical_poster?: string;

		/**
		 * 发行商
		 */
		publish?: string;

		/**
		 * 序列号
		 */
		serial_number?: string;

		/**
		 * 截屏
		 */
		screenshot?: string;

		/**
		 * gif
		 */
		gif?: string;

		/**
		 * alias
		 */
		alias?: string;

		/**
		 * alias
		 */
		release_at?: BigInt;

		/**
		 * shelf_at
		 */
		shelf_at?: BigInt;

		/**
		 * end
		 */
		end?: number;

		/**
		 * unit
		 */
		unit?: string;

		/**
		 * watch
		 */
		watch?: BigInt;

		/**
		 * use_local_image
		 */
		use_local_image?: number;

		/**
		 * 片头时间
		 */
		titles_time?: number;

		/**
		 * 片尾时间
		 */
		trailer_time?: number;

		/**
		 * 采集的源地址
		 */
		play_url?: longtext;

		/**
		 * 播放地址是否入库1-已经入库
		 */
		play_url_put_in?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoLineEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 影视ID
		 */
		video_id?: BigInt;

		/**
		 * 影视名称
		 */
		video_name?: string;

		/**
		 * 名称
		 */
		collection_name?: string;

		/**
		 * 资源id
		 */
		collection_id?: number;

		/**
		 * 关联播放器ID
		 */
		player_id?: number;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * 标识
		 */
		tag?: string;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface WeekEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 星期几 0-6
		 */
		week?: number;

		/**
		 * 封面地址
		 */
		surface_plot?: string;

		/**
		 * 是否推荐 1是 2否
		 */
		recommend?: BigInt;

		/**
		 * 简介
		 */
		introduce?: string;

		/**
		 * 日人气
		 */
		popularity_day?: BigInt;

		/**
		 * 周人气
		 */
		popularity_week?: BigInt;

		/**
		 * 月人气
		 */
		popularity_month?: BigInt;

		/**
		 * 总人气
		 */
		popularity_sum?: BigInt;

		/**
		 * 备注
		 */
		note?: string;

		/**
		 * 排序
		 */
		sort?: number;

		/**
		 * create_at
		 */
		create_at?: BigInt;

		/**
		 * update_at
		 */
		update_at?: BigInt;

		/**
		 * update_at
		 */
		site_id?: number;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoWeekEntity {
		/**
		 * ID
		 */
		id?: number;

		/**
		 * 创建用户ID
		 */
		createUserId?: number;

		/**
		 * 更新用户ID
		 */
		updateUserId?: number;

		/**
		 * 周表id
		 */
		week_id?: BigInt;

		/**
		 * 影片id
		 */
		videos_id?: BigInt;

		/**
		 * 排序
		 */
		sort?: BigInt;

		/**
		 * create_at
		 */
		create_at?: BigInt;

		/**
		 * update_at
		 */
		update_at?: BigInt;

		/**
		 * 创建时间
		 */
		createTime?: string;

		/**
		 * 更新时间
		 */
		updateTime?: string;

		/**
		 * 影片标题
		 */
		title?: string;

		/**
		 * 影片封面图
		 */
		surface_plot?: string;

		/**
		 * 是否推荐 1是 2否
		 */
		recommend?: BigInt;

		/**
		 * 是否轮播 1是 2否
		 */
		cycle?: BigInt;

		/**
		 * 轮播图片
		 */
		cycle_img?: string;

		/**
		 * 收费模式 1免费 2vip免费 3金币点播
		 */
		charging_mode?: BigInt;

		/**
		 * 购买模式 1按部 2按集
		 */
		buy_mode?: BigInt;

		/**
		 * 金币点播值
		 */
		gold?: BigInt;

		/**
		 * 导演
		 */
		directors?: string;

		/**
		 * 演员
		 */
		actors?: string;

		/**
		 * imd评分.百分制
		 */
		imdb_score?: BigInt;

		/**
		 * iimd评分ID
		 */
		imdb_score_id?: string;

		/**
		 * 豆瓣评分.百分制
		 */
		douban_score?: number;

		/**
		 * 豆瓣评分ID
		 */
		douban_score_id?: string;

		/**
		 * 简介
		 */
		introduce?: string;

		/**
		 * 自定义标签
		 */
		label?: string;

		/**
		 * 自定义语言
		 */
		language?: number;

		/**
		 * 自定义地区
		 */
		region?: number;

		/**
		 * 连载状态
		 */
		note?: string;

		/**
		 * 时长(单位s)
		 */
		duration?: BigInt;

		/**
		 * 序列号
		 */
		serial_number?: string;

		/**
		 * 连载状态
		 */
		year?: string;

		/**
		 * alias
		 */
		alias?: string;

		/**
		 * 状态
		 */
		status?: BigInt;

		/**
		 * 总人气
		 */
		popularity_sum?: BigInt;

		/**
		 * 日人气
		 */
		popularity_day?: BigInt;

		/**
		 * 月人气
		 */
		popularity_month?: BigInt;

		/**
		 * 周人气
		 */
		popularity_week?: BigInt;

		/**
		 * alias
		 */
		release_at?: BigInt;

		/**
		 * shelf_at
		 */
		shelf_at?: BigInt;

		/**
		 * 截屏
		 */
		screenshot?: string;

		/**
		 * 采集的源地址
		 */
		play_url?: longtext;

		/**
		 * 播放地址是否入库1-已经入库
		 */
		play_url_put_in?: number;

		/**
		 * 片尾时间
		 */
		trailer_time?: number;

		/**
		 * unit
		 */
		unit?: string;

		/**
		 * 总集数
		 */
		number?: BigInt;

		/**
		 * 更新集数
		 */
		total?: BigInt;

		/**
		 * 横屏海报
		 */
		horizontal_poster?: string;

		/**
		 * 竖屏海报
		 */
		vertical_poster?: string;

		/**
		 * gif
		 */
		gif?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	interface ApplicationAppList {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AppListEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AppListEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppListEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ApplicationAppMenu {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AppMenuEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AppMenuEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AppMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ApplicationNoticeInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<NoticeInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<NoticeInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: NoticeInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseCoding {
		/**
		 * 获取模块目录结构
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * 创建代码
		 */
		createCode(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getModuleTree: string; createCode: string };

		/**
		 * 权限状态
		 */
		_permission: { getModuleTree: boolean; createCode: boolean };

		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * 修改个人信息
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 权限与菜单
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 编程
		 */
		program(data?: any): Promise<any>;

		/**
		 * 个人信息
		 */
		person(data?: any): Promise<any>;

		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 退出
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			personUpdate: string;
			uploadMode: string;
			permmenu: string;
			program: string;
			person: string;
			upload: string;
			logout: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			personUpdate: boolean;
			uploadMode: boolean;
			permmenu: boolean;
			program: boolean;
			person: boolean;
			upload: boolean;
			logout: boolean;
		};

		request: Service["request"];
	}

	interface BaseOpen {
		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 验证码
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 登录
		 */
		login(data?: any): Promise<any>;

		/**
		 * 获得网页内容的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			captcha: string;
			login: string;
			html: string;
			eps: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			captcha: boolean;
			login: boolean;
			html: boolean;
			eps: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysDepartment {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 排序
		 */
		order(data?: any): Promise<any>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; order: string; list: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			order: boolean;
			list: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysLog {
		/**
		 * 日志保存时间
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 获得日志保存时间
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 清理
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysLogEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: { setKeep: string; getKeep: string; clear: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { setKeep: boolean; getKeep: boolean; clear: boolean; page: boolean };

		request: Service["request"];
	}

	interface BaseSysMenu {
		/**
		 * 创建代码
		 */
		create(data?: any): Promise<any>;

		/**
		 * 导出
		 */
		export(data?: any): Promise<any>;

		/**
		 * 导入
		 */
		import(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 解析
		 */
		parse(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			create: string;
			export: string;
			import: string;
			delete: string;
			update: string;
			parse: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			create: boolean;
			export: boolean;
			import: boolean;
			delete: boolean;
			update: boolean;
			parse: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysParam {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 获得网页内容的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			html: string;
			info: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			html: boolean;
			info: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysRole {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysUser {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 移动部门
		 */
		move(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BaseSysUserEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			move: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			move: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface CloudDiskAlbum {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AlbumEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AlbumEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AlbumEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface CloudDiskAlbum_cloudDisk {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AlbumCloudDiskEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AlbumCloudDiskEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AlbumCloudDiskEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface CloudDiskCloudDisk {
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CloudDiskEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CloudDiskEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CloudDiskEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { update: string; info: string; list: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { update: boolean; info: boolean; list: boolean; page: boolean; add: boolean };

		request: Service["request"];
	}

	interface CloudDiskSwiper {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CloudDiskSwiperEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CloudDiskSwiperEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CloudDiskSwiperEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ComicAlbum {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AlbumEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AlbumEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AlbumEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ComicAlbum_comic {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AlbumComicEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AlbumComicEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AlbumComicEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ComicComic {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ComicEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ComicEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ComicEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ComicImage_comic {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ComicImageEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ComicImageEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ComicImageEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ComicSwiper {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ComicSwiperEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ComicSwiperEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ComicSwiperEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface DemoGoods {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DemoGoodsEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface DemoTenant {
		/**
		 * 局部不使用多租户
		 */
		noTenant(data?: any): Promise<any>;

		/**
		 * 不使用多租户
		 */
		noUse(data?: any): Promise<any>;

		/**
		 * use
		 */
		use(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { noTenant: string; noUse: string; use: string };

		/**
		 * 权限状态
		 */
		_permission: { noTenant: boolean; noUse: boolean; use: boolean };

		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 获得所有字典类型
		 */
		types(data?: any): Promise<any>;

		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			types: string;
			data: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			types: boolean;
			data: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface DictType {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface PluginInfo {
		/**
		 * 安装插件
		 */
		install(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PluginInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			install: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			install: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface RecycleData {
		/**
		 * 恢复数据
		 */
		restore(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: RecycleDataEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: { restore: string; info: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { restore: boolean; info: boolean; page: boolean };

		request: Service["request"];
	}

	interface SpaceInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface SpaceType {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface TaskInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 开始
		 */
		start(data?: any): Promise<any>;

		/**
		 * 执行一次
		 */
		once(data?: any): Promise<any>;

		/**
		 * 停止
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TaskInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 日志
		 */
		log(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			start: string;
			once: string;
			stop: string;
			info: string;
			page: string;
			log: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			start: boolean;
			once: boolean;
			stop: boolean;
			info: boolean;
			page: boolean;
			log: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface UserAddress {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserAddressEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserAddressEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserAddressEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface UserCollect {
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CollectEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CollectEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CollectEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { info: string; list: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean; list: boolean; page: boolean; add: boolean };

		request: Service["request"];
	}

	interface UserDownload {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DownloadEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DownloadEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DownloadEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface UserLike {
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<LikeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<LikeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: LikeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { info: string; list: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean; list: boolean; page: boolean; add: boolean };

		request: Service["request"];
	}

	interface UserShare {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ShareEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShareEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ShareEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; info: string; list: string; page: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: { delete: boolean; info: boolean; list: boolean; page: boolean; add: boolean };

		request: Service["request"];
	}

	interface UserViews {
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<ViewsEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ViewsEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ViewsEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: { info: string; list: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean; list: boolean; page: boolean };

		request: Service["request"];
	}

	interface VideoAds {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AdsEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AdsEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AdsEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoAlbum {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<AlbumEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<AlbumEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AlbumEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoAlbum_video {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<VideoAlbum>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoAlbum[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoAlbum[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoBarrage {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<BarrageEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<BarrageEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BarrageEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoCategory {
		/**
		 * match_category
		 */
		match_category(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CategoryEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CategoryEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			match_category: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			match_category: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoCollection {
		/**
		 * collection_day
		 */
		collection_day(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CollectionEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CollectionEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CollectionEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			collection_day: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			collection_day: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoCollection_category {
		/**
		 * match_category
		 */
		match_category(data?: any): Promise<any>;

		/**
		 * sync_category
		 */
		sync_category(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<CollectionCategoryEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CollectionCategoryEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CollectionCategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			match_category: string;
			sync_category: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			match_category: boolean;
			sync_category: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoLive {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserLiveEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserLiveEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserLiveEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoPlayer {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PlayerEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PlayerEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PlayerEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoPlay_line {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<PlayLineEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<PlayLineEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PlayLineEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoSwiper {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<VideoSwiperEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoSwiperEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoSwiperEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoVideos {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * album
		 */
		album(data?: any): Promise<any>;

		/**
		 * sort
		 */
		sort(data?: any): Promise<any>;

		/**
		 * week
		 */
		week(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<VideoEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			album: string;
			sort: string;
			week: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			album: boolean;
			sort: boolean;
			week: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoVideo_line {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<VideoLineEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoLineEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoLineEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoWeek {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<WeekEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<WeekEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: WeekEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface VideoWeek_video {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<VideoWeekEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoWeekEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoWeekEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	type Service = {
		/**
		 * 基础请求
		 */
		request(options?: {
			url: string;
			method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
			data?: any;
			params?: any;
			headers?: {
				authorization?: string;
				[key: string]: any;
			};
			timeout?: number;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;

		application: {
			appList: ApplicationAppList;
			appMenu: ApplicationAppMenu;
			noticeInfo: ApplicationNoticeInfo;
		};
		base: {
			coding: BaseCoding;
			comm: BaseComm;
			open: BaseOpen;
			sys: {
				department: BaseSysDepartment;
				log: BaseSysLog;
				menu: BaseSysMenu;
				param: BaseSysParam;
				role: BaseSysRole;
				user: BaseSysUser;
			};
		};
		cloudDisk: {
			album: CloudDiskAlbum;
			album_cloudDisk: CloudDiskAlbum_cloudDisk;
			cloudDisk: CloudDiskCloudDisk;
			swiper: CloudDiskSwiper;
		};
		comic: {
			album: ComicAlbum;
			album_comic: ComicAlbum_comic;
			comic: ComicComic;
			image_comic: ComicImage_comic;
			swiper: ComicSwiper;
		};
		demo: { goods: DemoGoods; tenant: DemoTenant };
		dict: { info: DictInfo; type: DictType };
		plugin: { info: PluginInfo };
		recycle: { data: RecycleData };
		space: { info: SpaceInfo; type: SpaceType };
		task: { info: TaskInfo };
		user: {
			address: UserAddress;
			collect: UserCollect;
			download: UserDownload;
			info: UserInfo;
			like: UserLike;
			share: UserShare;
			views: UserViews;
		};
		video: {
			ads: VideoAds;
			album: VideoAlbum;
			album_video: VideoAlbum_video;
			barrage: VideoBarrage;
			category: VideoCategory;
			collection: VideoCollection;
			collection_category: VideoCollection_category;
			live: VideoLive;
			player: VideoPlayer;
			play_line: VideoPlay_line;
			swiper: VideoSwiper;
			videos: VideoVideos;
			video_line: VideoVideo_line;
			week: VideoWeek;
			week_video: VideoWeek_video;
		};
	};

	type DictKey =
		| "wallpaperTags"
		| "wallpaperType"
		| "songTags"
		| "songAlbumType"
		| "goodsTags"
		| "goodsType"
		| "appType"
		| "appTags"
		| "agreementType"
		| "orderStatus"
		| "integralType"
		| "appModule"
		| "emailType"
		| "specialType"
		| "flix"
		| "documentType"
		| "documentTags"
		| "updateType"
		| "commonType"
		| "messageType"
		| "friendApplyStatus"
		| "liveStatus"
		| "liveType"
		| "liveTags"
		| "week"
		| "index-tabs"
		| "comicTags"
		| "area"
		| "language"
		| "cloudDiskType"
		| "pageType"
		| "comicUpdateStatus"
		| "comicType"
		| "videoM3u8SliceStatus"
		| "cloudDiskTags"
		| "songType"
		| "video_category"
		| "notice_type";
}
