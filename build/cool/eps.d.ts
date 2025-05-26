declare namespace Eps {
	interface NoticeInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DemoGoodsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CollectEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface LikeEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ShareEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ViewsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AdsEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoAlbumEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoAlbum {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BarrageEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CategoryEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CollectionEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CollectionCategoryEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CollectionTaskTaskEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserLiveEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PlayerEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PlayLineEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoSwiperEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoLineEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface WeekEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface VideoWeekEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	interface ApplicationNoticeInfo {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<NoticeInfoEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<NoticeInfoEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: NoticeInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * getModuleTree
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * createCode
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
		 * personUpdate
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * uploadMode
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * permmenu
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * program
		 */
		program(data?: any): Promise<any>;

		/**
		 * person
		 */
		person(data?: any): Promise<any>;

		/**
		 * upload
		 */
		upload(data?: any): Promise<any>;

		/**
		 * logout
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
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * login
		 */
		login(data?: any): Promise<any>;

		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * eps
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * order
		 */
		order(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * add
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
		 * setKeep
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * getKeep
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * clear
		 */
		clear(data?: any): Promise<any>;

		/**
		 * page
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
		 * create
		 */
		create(data?: any): Promise<any>;

		/**
		 * export
		 */
		export(data?: any): Promise<any>;

		/**
		 * import
		 */
		import(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * parse
		 */
		parse(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * move
		 */
		move(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysUserEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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

	interface DemoGoods {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<DemoGoodsEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * noTenant
		 */
		noTenant(data?: any): Promise<any>;

		/**
		 * noUse
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * types
		 */
		types(data?: any): Promise<any>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * install
		 */
		install(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PluginInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * restore
		 */
		restore(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * page
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * start
		 */
		start(data?: any): Promise<any>;

		/**
		 * once
		 */
		once(data?: any): Promise<any>;

		/**
		 * stop
		 */
		stop(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TaskInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * log
		 */
		log(data?: any): Promise<any>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<UserAddressEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<UserAddressEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserAddressEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * info
		 */
		info(data?: any): Promise<CollectEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<CollectEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CollectEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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

	interface UserInfo {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * info
		 */
		info(data?: any): Promise<LikeEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<LikeEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: LikeEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<ShareEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<ShareEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ShareEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<ViewsEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<ViewsEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ViewsEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; info: string; list: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { delete: boolean; info: boolean; list: boolean; page: boolean };

		request: Service["request"];
	}

	interface VideoAds {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<AdsEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<AdsEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: AdsEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<VideoAlbumEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<VideoAlbumEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoAlbumEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<VideoAlbum>;

		/**
		 * list
		 */
		list(data?: any): Promise<VideoAlbum[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoAlbum[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BarrageEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<BarrageEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BarrageEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<CategoryEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<CategoryEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<CollectionEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<CollectionEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CollectionEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<CollectionCategoryEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<CollectionCategoryEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CollectionCategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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

	interface VideoCollection_task {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<CollectionTaskTaskEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<CollectionTaskTaskEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: CollectionTaskTaskEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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

	interface VideoLive {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<UserLiveEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<UserLiveEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserLiveEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<PlayerEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<PlayerEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PlayerEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<PlayLineEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<PlayLineEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PlayLineEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<VideoSwiperEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<VideoSwiperEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoSwiperEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
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
		 * info
		 */
		info(data?: any): Promise<VideoEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<VideoEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<VideoLineEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<VideoLineEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoLineEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<WeekEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<WeekEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: WeekEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<VideoWeekEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<VideoWeekEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: VideoWeekEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
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

		application: { noticeInfo: ApplicationNoticeInfo };
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
		plugin: { info: PluginInfo };
		recycle: { data: RecycleData };
		space: { info: SpaceInfo; type: SpaceType };
		task: { info: TaskInfo };
		user: {
			address: UserAddress;
			collect: UserCollect;
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
			collection_task: VideoCollection_task;
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

	undefined;
}
