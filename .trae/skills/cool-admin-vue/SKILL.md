---
name: 'cool-admin-vue'
description: 'Provides Cool Admin Vue project structure and component usage guidelines. Invoke when working with Cool Admin Vue projects.'
---

# Cool Admin Vue Project Guide

This skill provides comprehensive guidelines for working with Cool Admin Vue projects, including project structure, component usage, and best practices.

## 技术选型

- Vue3
- Element Plus
- Vite
- Pinia
- Axios
- ECharts
- Vue Router
- TypeScript

## 主要特点

- **Ai 编码**：从页面到后端代码，部分功能实现零代码
- **Ai 流程编排**：专门为 Ai 开发设计的，Ai 开发几乎不用写代码，只需拖一拖即可
- **扩展插件**：可插拔，如支付、短信这类功能的插件可以通过后台动态安装卸载，灵活又不臃肿
- **代码简洁**：不像一般代码生成器生成一堆冗余代码，Cool 只需极少编码即可实现大部分需求

## 内置功能

- **用户管理**：呈现公司组织部门树形结构，用户是系统操作者，该功能主要完成系统用户配置
- **菜单管理**：配置系统菜单，操作权限标识等
- **角色管理**：角色菜单权限分配、设置角色按机构进行数据范围权限划分
- **参数管理**：对系统动态配置常用参数
- **字典管理**：对系统中经常使用的一些较为固定的数据进行维护
- **请求日志**：接口的请求入参日志，便于问题排查
- **操作日志**：系统正常操作日志记录和查询；系统异常信息日志记录和查询
- **定时任务**：在线（添加、修改、删除）任务调度包含执行结果日志
- **文件管理**：支持静态资源文件上传云端进行云管理
- **数据回收站**：数据有 30 天的保留，支持回滚操作
- **前后端插件**：支持动态安装、卸载插件，实现功能可插拔（后端插件开发中...）

## Project Structure

```
cool-admin-vue/
├── .cursor/                    # Cursor AI rules
├── .vscode/                   # VS Code configuration
├── public/                    # Static resources
├── packages/                  # Source packages
│   ├── crud/                  # CRUD component package
│   └── vite-plugin/           # Vite plugin package
├── src/
│   ├── cool/                  # Core files
│   │   ├── bootstrap/         # Bootstrap configuration
│   │   ├── hooks/             # Common hooks
│   │   ├── module/            # Module management
│   │   ├── router/            # Router configuration
│   │   ├── service/           # Service layer
│   │   ├── types/             # Type definitions
│   │   └── utils/             # Utility functions
│   ├── modules/               # Business modules
│   │   ├── base/              # Base module
│   │   ├── application/       # Application module
│   │   └── ...                # Other business modules
│   ├── plugins/               # Plugins
│   │   ├── crud/              # CRUD plugin
│   │   ├── element-ui/        # Element Plus
│   │   ├── upload/            # Upload plugin
│   │   └── ...                # Other plugins
│   ├── config/                # Configuration files
│   ├── App.vue                # Root component
│   └── main.ts                # Entry file
├── build/                     # Build related
├── package.json               # Project dependencies
└── vite.config.ts             # Vite configuration
```

## Core Components

### CRUD Components

#### Basic CRUD

```vue
<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />

			<cl-flex1 />

			<cl-search-key />
			<cl-adv-btn />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<cl-upsert ref="Upsert" />
		<cl-adv-search ref="AdvSearch" />
	</cl-crud>
</template>

<script setup lang="ts">
import { useCrud, useTable, useUpsert, useAdvSearch } from '@cool-vue/crud';
import { useDict } from '/$/dict';
import { useCool } from '/@/cool';

const { service } = useCool();
const { dict } = useDict();

const Crud = useCrud(
	{
		service: 'test'
	},
	app => {
		app.refresh({
			size: 10
		});
	}
);

const Table = useTable({
	columns: [
		{
			type: 'selection'
		},
		{
			label: 'Name',
			prop: 'name'
		},
		{
			type: 'op',
			buttons: ['edit', 'delete']
		}
	]
});

const Upsert = useUpsert({
	items: [
		{
			label: 'Name',
			prop: 'name',
			component: {
				name: 'el-input'
			}
		}
	]
});
</script>
```

#### Advanced CRUD

- **Custom actions**
- **Event hooks**
- **Service configuration**
- **Select table**
- **User select**

### Search Components

#### Basic Search

```vue
<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-search ref="Search" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>
	</cl-crud>
</template>

<script setup lang="ts">
import { useCrud, useSearch, useTable } from '@cool-vue/crud';
import { useDict } from '/$/dict';

const { dict } = useDict();

const Crud = useCrud(
	{
		service: 'test'
	},
	app => {
		app.refresh();
	}
);

const Table = useTable({
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
		}
	]
});

const Search = useSearch({
	items: [
		{
			label: '姓名',
			prop: 'name',
			component: {
				name: 'el-input',
				props: {
					clearable: true,
					onChange(val: string) {
						refresh({
							name: val,
							page: 1
						});
					}
				}
			}
		}
	]
});

function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
```

#### Advanced Search Features

- **Collapsible search**
- **Custom search buttons**
- **Layout customization**
- **Search plugins**
- **Event hooks**

### Advanced Search Components

#### Basic Advanced Search

```vue
<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-adv-btn />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<cl-adv-search ref="AdvSearch" />
	</cl-crud>
</template>

<script setup lang="ts">
import { useCrud, useAdvSearch, useTable } from '@cool-vue/crud';
import { useDict } from '/$/dict';

const { dict } = useDict();

const Crud = useCrud(
	{
		service: 'test'
	},
	app => {
		app.refresh();
	}
);

const Table = useTable({
	columns: [
		{
			label: '姓名',
			prop: 'name',
			minWidth: 140
		}
	]
});

const AdvSearch = useAdvSearch({
	items: [
		{
			label: '姓名',
			prop: 'name',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		}
	]
});
</script>
```

### Upsert Components

#### Basic Upsert

```vue
<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-add-btn />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script setup lang="ts">
import { useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useDict } from '/$/dict';

const { dict } = useDict();

const Crud = useCrud(
	{
		service: 'test'
	},
	app => {
		app.refresh();
	}
);

const Table = useTable({
	columns: [
		{
			label: '姓名',
			prop: 'name',
			minWidth: 140
		},
		{
			type: 'op',
			buttons: ['edit', 'delete']
		}
	]
});

const Upsert = useUpsert({
	items: [
		{
			label: '姓名',
			prop: 'name',
			component: {
				name: 'el-input'
			}
		}
	]
});
</script>
```

#### Advanced Upsert Features

- **Event hooks (onOpen, onInfo, onOpened, onSubmit, onClose, onClosed)**
- **Hook usage for data transformation**
- **Different modes (add, update, info)**
- **Dynamic form items**

### Form Components

#### Basic Form

```vue
<template>
	<cl-form ref="Form"></cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';

const Form = useForm();

function openForm() {
	Form.value?.open({
		title: 'Basic Form',
		items: [
			{
				label: 'Name',
				prop: 'name',
				component: {
					name: 'el-input'
				}
			}
		],
		on: {
			submit(data, { close }) {
				close();
			}
		}
	});
}
</script>
```

#### Advanced Form Features

- **Nested forms**
- **Tabbed forms**
- **Custom components**
- **Form validation**
- **Dynamic form items**
- **Form plugins**
- **Layout customization**

### Table Components

#### Basic Table

```vue
<template>
	<cl-table ref="Table"></cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';
import { useDict } from '/$/dict';

const { dict } = useDict();

const Table = useTable({
	columns: [
		{
			type: 'selection'
		},
		{
			label: 'Name',
			prop: 'name'
		},
		{
			label: 'Status',
			prop: 'status',
			dict: dict.get('status')
		}
	]
});
</script>
```

#### Advanced Table Features

- **Custom columns**
- **Row editing**
- **Context menu**
- **Header search**
- **Selection**
- **Slot usage**
- **Row/column spanning**
- **Summary row**
- **Multi-level headers**
- **Fixed columns**
- **Expandable rows**

## Service Layer

### Basic Service

```typescript
import { BaseService } from '/@/cool/service';

export class UserService extends BaseService {
	constructor() {
		super();
		this.namespace = 'user';
	}
}

export default new UserService();
```

### Service Methods

- **page**: Pagination query
- **list**: List query
- **info**: Detail query
- **add**: Create
- **update**: Update
- **delete**: Delete

## Module Development

### Module Structure

```
modules/example/
├── components/        # Module components
├── directives/        # Module directives
├── hooks/            # Module hooks
├── locales/          # Internationalization files
├── pages/            # Page routes
├── views/            # View routes
├── static/           # Static resources
├── store/            # State management
├── utils/            # Utility functions
├── config.ts         # Module configuration
└── index.ts          # Module export
```

### Module Configuration

```typescript
import { ModuleConfig } from '/@/cool';

export default (): ModuleConfig => {
	return {
		enable: true,
		label: 'Example Module',
		description: 'This is an example module',
		author: 'Author',
		version: '1.0.0',
		updateTime: '2024-02-02',
		logo: '',
		order: 0,

		// Ignore configuration
		ignore: {
			// Ignore NProgress for specific requests
			NProgress: ['/base/open/eps', '/base/comm/person'],

			// Ignore token for specific routes
			token: ['/login', '/401', '/403', '/404', '/500', '/502']
		},

		// Module options
		options: {
			size: 120,
			text: '选择文件',
			limit: {
				upload: 9,
				select: 9,
				size: 100
			}
		},

		// Demo pages
		demo: [
			{
				name: '基础用法',
				component: () => import('...')
			}
		],

		// Global components
		components: [import('./components/test.vue')],

		// View routes
		views: [
			{
				path: '/test',
				meta: {
					label: '测试中心'
				},
				component: () => import('./views/test.vue')
			}
		],

		// Page routes
		pages: [
			{
				path: '/test',
				meta: {
					label: '测试中心'
				},
				component: () => import('./views/test.vue')
			}
		],

		// Toolbar configuration
		toolbar: {
			order: 1,
			pc: true,
			h5: true,
			component: import('./components/index.vue')
		},

		// Global injection
		index: {
			component: import('./components/index.vue')
		},

		// Module installation
		install(app) {
			// Register components
			// app.component("test", Test);
			// Register directives
			// app.directive("focus", {
			//   created(el, bind) {}
			// });
		},

		// Module loading
		onLoad(events) {
			// Load data
			// const { hasToken } = events;
			// hasToken(() => {
			//   // Load user data
			// });
		}
	};
};
```

### Module Export

```typescript
// modules/test/index.ts
import { useStore } from './store';

export function useTest() {
	return {
		// Export pinia store
		...useStore(),

		// Custom methods
		test() {},

		// Custom data
		data: {
			description: '数据描述'
		}
	};
}
```

### Store Usage

```typescript
// modules/test/store.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTestStore = defineStore('test', function () {
	const count = ref(0);

	function add() {
		count.value += 1;
	}

	return {
		count,
		add
	};
});
```

### Directive Usage

```typescript
// modules/test/directives/test.ts
export default {
	created(el, binding) {},
	mounted() {}
	// Other lifecycle hooks
};

// Usage in template
// <div v-test></div>
```

## Best Practices

### Component Development

- **Single responsibility principle**
- **Type safety**
- **Reusability**
- **Performance optimization**
- **Error handling**

### Service Layer

- **Type definitions**
- **Error handling**
- **Code organization**
- **Performance optimization**

### Module Development

- **Modular design**
- **Internationalization**
- **Lazy loading**
- **Configuration management**

## Common Patterns

### CRUD Operations

1. **List**: Display data with pagination
2. **Create**: Open form for new record
3. **Read**: View record details
4. **Update**: Edit existing record
5. **Delete**: Remove record

### Form Handling

1. **Validation**: Client-side validation
2. **Submission**: Handle form submit
3. **Reset**: Reset form values
4. **Dynamic fields**: Show/hide fields based on conditions

### Table Operations

1. **Sorting**: Sort columns
2. **Filtering**: Filter data
3. **Selection**: Select rows
4. **Actions**: Perform row-level actions

## Troubleshooting

### Common Issues

- **Service not found**: Check namespace configuration
- **Form validation errors**: Verify rules configuration
- **Table data not displaying**: Check service response format
- **Component not rendering**: Verify component registration

### Debugging Tips

- **Network requests**: Check browser dev tools
- **Console errors**: Look for TypeScript errors
- **Component props**: Verify prop types
- **Service responses**: Check API response structure

## Resources

- [Cool Admin Vue Documentation](https://cool-js.com/)
- [Element Plus Documentation](https://element-plus.org/)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
