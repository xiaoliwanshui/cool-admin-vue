declare namespace Eps {
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
		 * 广告类型
		 */
		type?: number;

		/**
		 * 应用ID
		 */
		appId?: string;

		/**
		 * 广告ID
		 */
		adsId?: string;

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

	interface FeedbackInfoEntity {
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
		 * 反馈类型
		 */
		feedbackType?: number;

		/**
		 * 反馈内容
		 */
		content?: string;

		/**
		 * 影视id
		 */
		videoId?: number;

		/**
		 * 影视名
		 */
		videoName?: string;

		/**
		 * 资源
		 */
		videoUrl?: string;

		/**
		 * 资源id
		 */
		playLineId?: number;

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
		params?: any;

		/**
		 * 头部信息
		 */
		headers?: any;

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
		menuIdList?: any;

		/**
		 * 部门权限
		 */
		departmentIdList?: any;

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
		exampleImages?: any;

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
		 * 是否启用
		 */
		status?: number;

		/**
		 * 颜色
		 */
		color?: string;

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
		content?: any;

		/**
		 * ts内容
		 */
		tsContent?: any;

		/**
		 * 插件的plugin.json
		 */
		pluginJson?: any;

		/**
		 * 配置
		 */
		config?: any;

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
		entityInfo?: any;

		/**
		 * 操作人
		 */
		userId?: number;

		/**
		 * 被删除的数据
		 */
		data?: any;

		/**
		 * 请求的接口
		 */
		url?: string;

		/**
		 * 请求参数
		 */
		params?: any;

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

	interface ContactEntity {
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
		 * 联系人姓名
		 */
		name?: string;

		/**
		 * 手机号
		 */
		phone?: string;

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
		avatarUrl?: longtext;

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

	interface MemberEntity {
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
		 * 开始时间
		 */
		startTime?: Date;

		/**
		 * 结束时间
		 */
		endTime?: Date;

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
		 * 视频时长
		 */
		duration?: number;

		/**
		 * 观看时长
		 */
		viewingDuration?: number;

		/**
		 * 当前观看索引
		 */
		videoIndex?: number;

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

	interface VideoAlbumEntity {
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

	interface VideoAlbumRelationship {
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
		 * 专辑id
		 */
		album_id?: BigInt;

		/**
		 * 影片id
		 */
		videos_id?: BigInt;

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
		 * 父级分类
		 */
		category_pid?: number;

		/**
		 * 影片封面图
		 */
		surface_plot?: string;

		/**
		 * 是否轮播 1是 2否
		 */
		cycle?: BigInt;

		/**
		 * 轮播图片
		 */
		cycle_img?: string;

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
		imdb_score?: number;

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
		 * 总人气
		 */
		popularity?: BigInt;

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
		 * 年份
		 */
		year?: number;

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
		 * 备注
		 */
		remarks?: string;

		/**
		 * 竖屏海报
		 */
		vertical_poster?: string;

		/**
		 * 发行商
		 */
		publish?: string;

		/**
		 * 上映日期
		 */
		pubdate?: string;

		/**
		 * 序列号
		 */
		serial_number?: string;

		/**
		 * 截屏
		 */
		screenshot?: string;

		/**
		 * 是否连载完毕 0,1
		 */
		end?: number;

		/**
		 * 单位
		 */
		unit?: string;

		/**
		 * 采集的源地址
		 */
		play_url?: longtext;

		/**
		 * 播放地址是否入库1-1已经入库 0未入库
		 */
		play_url_put_in?: number;

		/**
		 * 资源id
		 */
		collection_id?: number;

		/**
		 * 顶数
		 */
		up?: number;

		/**
		 * 踩数
		 */
		down?: number;

		/**
		 * 资源名称
		 */
		collection_name?: string;

		/**
		 * 影片副标题
		 */
		sub_title?: string;

		/**
		 * 影片标签
		 */
		video_tag?: string;

		/**
		 * 影片类型
		 */
		video_class?: string;

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
		 * 说明
		 */
		desc?: string;

		/**
		 * 来源
		 */
		tags?: string;

		/**
		 * 关联播放器ID
		 */
		player_id?: number;

		/**
		 * 排序
		 */
		sort?: number;

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

	interface CollectionTaskTaskEntity {
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
		taskName?: string;

		/**
		 * 任务状态
		 */
		taskStatus?: number;

		/**
		 * 任务类型
		 */
		taskType?: number;

		/**
		 * 执行参数
		 */
		execParams?: any;

		/**
		 * 执行结果
		 */
		execResult?: any;

		/**
		 * 采集源
		 */
		collectionSource?: any;

		/**
		 * 开始时间
		 */
		startDate?: Date;

		/**
		 * 结束时间
		 */
		endDate?: Date;

		/**
		 * 备注信息
		 */
		remark?: string;

		/**
		 * 错误信息
		 */
		errorMessage?: any;

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

	interface VideoHostKeyWordEntity {
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
		keyWord?: string;

		/**
		 * 分类
		 */
		category_id?: number;

		/**
		 * 标签
		 */
		tag?: string;

		/**
		 * 背景颜色
		 */
		bgColor?: string;

		/**
		 * 字体颜色
		 */
		fontColor?: string;

		/**
		 * 排序
		 */
		sort?: number;

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
		category_id?: number;

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
		 * 副标题
		 */
		sub_title?: string;

		/**
		 * 状态
		 */
		status?: number;

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
		 * 影片副标题
		 */
		sub_title?: string;

		/**
		 * 影片标签
		 */
		video_tag?: string;

		/**
		 * 影片类型
		 */
		video_class?: string;

		/**
		 * 分类
		 */
		category_id?: number;

		/**
		 * 父级分类
		 */
		category_pid?: number;

		/**
		 * 影片封面图
		 */
		surface_plot?: string;

		/**
		 * 是否轮播 1是 2否
		 */
		cycle?: BigInt;

		/**
		 * 轮播图片
		 */
		cycle_img?: string;

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
		imdb_score?: number;

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
		 * 总人气
		 */
		popularity?: BigInt;

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
		 * 年份
		 */
		year?: number;

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
		 * 备注
		 */
		remarks?: string;

		/**
		 * 竖屏海报
		 */
		vertical_poster?: string;

		/**
		 * 发行商
		 */
		publish?: string;

		/**
		 * 上映日期
		 */
		pubdate?: string;

		/**
		 * 序列号
		 */
		serial_number?: string;

		/**
		 * 截屏
		 */
		screenshot?: string;

		/**
		 * 是否连载完毕 0,1
		 */
		end?: number;

		/**
		 * 单位
		 */
		unit?: string;

		/**
		 * 采集的源地址
		 */
		play_url?: longtext;

		/**
		 * 播放地址是否入库1-1已经入库 0未入库
		 */
		play_url_put_in?: number;

		/**
		 * 资源id
		 */
		collection_id?: number;

		/**
		 * 顶数
		 */
		up?: number;

		/**
		 * 踩数
		 */
		down?: number;

		/**
		 * 资源名称
		 */
		collection_name?: string;

		/**
		 * 搜索榜单分类
		 */
		searchRecommendType?: number;

		/**
		 * 排序
		 */
		sort?: number;

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
		 * 星期几 0-6
		 */
		week?: number;

		/**
		 * 影视ID
		 */
		videoId?: number;

		/**
		 * 备注
		 */
		remarks?: string;

		/**
		 * 时间
		 */
		time?: time;

		/**
		 * 排序
		 */
		sort?: number;

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
		 * 父级分类
		 */
		category_pid?: number;

		/**
		 * 影片封面图
		 */
		surface_plot?: string;

		/**
		 * 是否轮播 1是 2否
		 */
		cycle?: BigInt;

		/**
		 * 轮播图片
		 */
		cycle_img?: string;

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
		imdb_score?: number;

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
		 * 总人气
		 */
		popularity?: BigInt;

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
		 * 年份
		 */
		year?: number;

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
		 * 上映日期
		 */
		pubdate?: string;

		/**
		 * 序列号
		 */
		serial_number?: string;

		/**
		 * 截屏
		 */
		screenshot?: string;

		/**
		 * 是否连载完毕 0,1
		 */
		end?: number;

		/**
		 * 单位
		 */
		unit?: string;

		/**
		 * 采集的源地址
		 */
		play_url?: longtext;

		/**
		 * 播放地址是否入库1-1已经入库 0未入库
		 */
		play_url_put_in?: number;

		/**
		 * 资源id
		 */
		collection_id?: number;

		/**
		 * 顶数
		 */
		up?: number;

		/**
		 * 踩数
		 */
		down?: number;

		/**
		 * 资源名称
		 */
		collection_name?: string;

		/**
		 * 影片副标题
		 */
		sub_title?: string;

		/**
		 * 影片标签
		 */
		video_tag?: string;

		/**
		 * 影片类型
		 */
		video_class?: string;

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
		 * 父级分类
		 */
		category_pid?: number;

		/**
		 * 影片封面图
		 */
		surface_plot?: string;

		/**
		 * 是否轮播 1是 2否
		 */
		cycle?: BigInt;

		/**
		 * 轮播图片
		 */
		cycle_img?: string;

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
		imdb_score?: number;

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
		 * 年份
		 */
		year?: number;

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
		 * 截屏
		 */
		screenshot?: string;

		/**
		 * 采集的源地址
		 */
		play_url?: longtext;

		/**
		 * 播放地址是否入库1-1已经入库 0未入库
		 */
		play_url_put_in?: number;

		/**
		 * 单位
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
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	interface PagePagination {
		size: number;
		page: number;
		total: number;
		[key: string]: any;
	}

	interface PageResponse<T> {
		pagination: PagePagination;
		list: T[];
		[key: string]: any;
	}

	interface ApplicationAdsPageResponse {
		pagination: PagePagination;
		list: AdsEntity[];
	}

	interface ApplicationFeedbackInfoPageResponse {
		pagination: PagePagination;
		list: FeedbackInfoEntity[];
	}

	interface ApplicationNoticeInfoPageResponse {
		pagination: PagePagination;
		list: NoticeInfoEntity[];
	}

	interface BaseSysLogPageResponse {
		pagination: PagePagination;
		list: BaseSysLogEntity[];
	}

	interface BaseSysMenuPageResponse {
		pagination: PagePagination;
		list: BaseSysMenuEntity[];
	}

	interface BaseSysParamPageResponse {
		pagination: PagePagination;
		list: BaseSysParamEntity[];
	}

	interface BaseSysRolePageResponse {
		pagination: PagePagination;
		list: BaseSysRoleEntity[];
	}

	interface BaseSysUserPageResponse {
		pagination: PagePagination;
		list: BaseSysUserEntity[];
	}

	interface DemoGoodsPageResponse {
		pagination: PagePagination;
		list: DemoGoodsEntity[];
	}

	interface DictInfoPageResponse {
		pagination: PagePagination;
		list: DictInfoEntity[];
	}

	interface DictTypePageResponse {
		pagination: PagePagination;
		list: DictTypeEntity[];
	}

	interface PluginInfoPageResponse {
		pagination: PagePagination;
		list: PluginInfoEntity[];
	}

	interface RecycleDataPageResponse {
		pagination: PagePagination;
		list: RecycleDataEntity[];
	}

	interface SpaceInfoPageResponse {
		pagination: PagePagination;
		list: SpaceInfoEntity[];
	}

	interface SpaceTypePageResponse {
		pagination: PagePagination;
		list: SpaceTypeEntity[];
	}

	interface TaskInfoPageResponse {
		pagination: PagePagination;
		list: TaskInfoEntity[];
	}

	interface UserAddressPageResponse {
		pagination: PagePagination;
		list: UserAddressEntity[];
	}

	interface UserCollectPageResponse {
		pagination: PagePagination;
		list: CollectEntity[];
	}

	interface UserContactsPageResponse {
		pagination: PagePagination;
		list: ContactEntity[];
	}

	interface UserInfoPageResponse {
		pagination: PagePagination;
		list: UserInfoEntity[];
	}

	interface UserLikePageResponse {
		pagination: PagePagination;
		list: LikeEntity[];
	}

	interface UserMemberPageResponse {
		pagination: PagePagination;
		list: MemberEntity[];
	}

	interface UserSharePageResponse {
		pagination: PagePagination;
		list: ShareEntity[];
	}

	interface UserViewsPageResponse {
		pagination: PagePagination;
		list: ViewsEntity[];
	}

	interface VideoAlbumPageResponse {
		pagination: PagePagination;
		list: VideoAlbumEntity[];
	}

	interface VideoAlbum_videoPageResponse {
		pagination: PagePagination;
		list: VideoAlbumRelationship[];
	}

	interface VideoBarragePageResponse {
		pagination: PagePagination;
		list: BarrageEntity[];
	}

	interface VideoCategoryPageResponse {
		pagination: PagePagination;
		list: CategoryEntity[];
	}

	interface VideoCollectionPageResponse {
		pagination: PagePagination;
		list: CollectionEntity[];
	}

	interface VideoCollection_categoryPageResponse {
		pagination: PagePagination;
		list: CollectionCategoryEntity[];
	}

	interface VideoCollection_taskPageResponse {
		pagination: PagePagination;
		list: CollectionTaskTaskEntity[];
	}

	interface VideoHot_keywordPageResponse {
		pagination: PagePagination;
		list: VideoHostKeyWordEntity[];
	}

	interface VideoLivePageResponse {
		pagination: PagePagination;
		list: UserLiveEntity[];
	}

	interface VideoPlayerPageResponse {
		pagination: PagePagination;
		list: PlayerEntity[];
	}

	interface VideoPlay_linePageResponse {
		pagination: PagePagination;
		list: PlayLineEntity[];
	}

	interface VideoSwiperPageResponse {
		pagination: PagePagination;
		list: VideoSwiperEntity[];
	}

	interface VideoVideosPageResponse {
		pagination: PagePagination;
		list: VideoEntity[];
	}

	interface VideoVideo_linePageResponse {
		pagination: PagePagination;
		list: VideoLineEntity[];
	}

	interface VideoWeekPageResponse {
		pagination: PagePagination;
		list: WeekEntity[];
	}

	interface VideoWeek_videoPageResponse {
		pagination: PagePagination;
		list: VideoWeekEntity[];
	}

	interface ApplicationAds {
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
		page(data?: any): Promise<ApplicationAdsPageResponse>;

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

		request: Request;
	}

	interface ApplicationFeedbackInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<ApplicationFeedbackInfoPageResponse>;

		/**
		 * 单个信息
		 */
		info(data?: any): Promise<FeedbackInfoEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; update: string; page: string; info: string; add: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			page: boolean;
			info: boolean;
			add: boolean;
		};

		request: Request;
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
		page(data?: any): Promise<ApplicationNoticeInfoPageResponse>;

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

		request: Request;
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

		request: Request;
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

		request: Request;
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

		request: Request;
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

		request: Request;
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
		page(data?: any): Promise<BaseSysLogPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { setKeep: string; getKeep: string; clear: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { setKeep: boolean; getKeep: boolean; clear: boolean; page: boolean };

		request: Request;
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
		page(data?: any): Promise<BaseSysMenuPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<BaseSysParamPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<BaseSysRolePageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<BaseSysUserPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<DemoGoodsPageResponse>;

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

		request: Request;
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

		request: Request;
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
		page(data?: any): Promise<DictInfoPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<DictTypePageResponse>;

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

		request: Request;
	}

	interface EchartEchart {
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { info: string };

		/**
		 * 权限状态
		 */
		_permission: { info: boolean };

		request: Request;
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
		page(data?: any): Promise<PluginInfoPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<RecycleDataPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { restore: string; info: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { restore: boolean; info: boolean; page: boolean };

		request: Request;
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
		page(data?: any): Promise<SpaceInfoPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<SpaceTypePageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<TaskInfoPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<UserAddressPageResponse>;

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

		request: Request;
	}

	interface UserCollect {
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
		info(data?: any): Promise<CollectEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CollectEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserCollectPageResponse>;

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

		request: Request;
	}

	interface UserContacts {
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
		info(data?: any): Promise<ContactEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ContactEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserContactsPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<UserInfoPageResponse>;

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

		request: Request;
	}

	interface UserLike {
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
		info(data?: any): Promise<LikeEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<LikeEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserLikePageResponse>;

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

		request: Request;
	}

	interface UserMember {
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
		info(data?: any): Promise<MemberEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<MemberEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserMemberPageResponse>;

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

		request: Request;
	}

	interface UserShare {
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
		info(data?: any): Promise<ShareEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ShareEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserSharePageResponse>;

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

		request: Request;
	}

	interface UserViews {
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
		info(data?: any): Promise<ViewsEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<ViewsEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<UserViewsPageResponse>;

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

		request: Request;
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
		info(data?: any): Promise<VideoAlbumEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoAlbumEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<VideoAlbumPageResponse>;

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

		request: Request;
	}

	interface VideoAlbum_video {
		/**
		 * 批量添加专辑
		 */
		add_list(data?: any): Promise<any>;

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
		info(data?: any): Promise<VideoAlbumRelationship>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoAlbumRelationship[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<VideoAlbum_videoPageResponse>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add_list: string;
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
			add_list: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
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
		page(data?: any): Promise<VideoBarragePageResponse>;

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

		request: Request;
	}

	interface VideoCategory {
		/**
		 * 匹配分类
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
		page(data?: any): Promise<VideoCategoryPageResponse>;

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

		request: Request;
	}

	interface VideoCollection {
		/**
		 * 日更新
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
		page(data?: any): Promise<VideoCollectionPageResponse>;

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

		request: Request;
	}

	interface VideoCollection_category {
		/**
		 * 匹配分类
		 */
		match_category(data?: any): Promise<any>;

		/**
		 * 同步分类
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
		page(data?: any): Promise<VideoCollection_categoryPageResponse>;

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

		request: Request;
	}

	interface VideoCollection_task {
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
		info(data?: any): Promise<CollectionTaskTaskEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<CollectionTaskTaskEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<VideoCollection_taskPageResponse>;

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

		request: Request;
	}

	interface VideoHot_keyword {
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
		info(data?: any): Promise<VideoHostKeyWordEntity>;

		/**
		 * 列表查询
		 */
		list(data?: any): Promise<VideoHostKeyWordEntity[]>;

		/**
		 * 分页查询
		 */
		page(data?: any): Promise<VideoHot_keywordPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<VideoLivePageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<VideoPlayerPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<VideoPlay_linePageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<VideoSwiperPageResponse>;

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

		request: Request;
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
		 * 排序
		 */
		sort(data?: any): Promise<any>;

		/**
		 * 周数据
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
		page(data?: any): Promise<VideoVideosPageResponse>;

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
			sort: boolean;
			week: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};

		request: Request;
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
		page(data?: any): Promise<VideoVideo_linePageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<VideoWeekPageResponse>;

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

		request: Request;
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
		page(data?: any): Promise<VideoWeek_videoPageResponse>;

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

		request: Request;
	}

	interface RequestOptions {
		url: string;
		method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
		data?: any;
		params?: any;
		headers?: any;
		timeout?: number;
		[key: string]: any;
	}

	type Request = (options: RequestOptions) => Promise<any>;

	type DictKey =
		| "live_category"
		| "liveTags"
		| "week"
		| "area"
		| "language"
		| "video_category"
		| "notice_type"
		| "feedback_type"
		| "ads_type"
		| "search_type"
		| "video_tag";

	type Service = {
		request: Request;

		application: {
			ads: ApplicationAds;
			feedbackInfo: ApplicationFeedbackInfo;
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
		demo: { goods: DemoGoods; tenant: DemoTenant };
		dict: { info: DictInfo; type: DictType };
		echart: { echart: EchartEchart };
		plugin: { info: PluginInfo };
		recycle: { data: RecycleData };
		space: { info: SpaceInfo; type: SpaceType };
		task: { info: TaskInfo };
		user: {
			address: UserAddress;
			collect: UserCollect;
			contacts: UserContacts;
			info: UserInfo;
			like: UserLike;
			member: UserMember;
			share: UserShare;
			views: UserViews;
		};
		video: {
			album: VideoAlbum;
			album_video: VideoAlbum_video;
			barrage: VideoBarrage;
			category: VideoCategory;
			collection: VideoCollection;
			collection_category: VideoCollection_category;
			collection_task: VideoCollection_task;
			hot_keyword: VideoHot_keyword;
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
}
