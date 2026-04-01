---
name: 'module-generator'
description: 'Generates module structure for Cool Admin Vue. Invoke when user needs to create a new module with proper directory structure and configuration.'
---

# Module Generator

This skill helps you create new modules for Cool Admin Vue with the proper directory structure and configuration.

## Module Structure

```
modules/example/
├── components/        # Module components
├── directives/        # Module directives
├── hooks/            # Module hooks
├── locales/          # Internationalization files
│   ├── en.json
│   ├── zh-cn.json
│   └── zh-tw.json
├── pages/            # Page routes (permission controlled)
├── views/            # View routes
├── static/           # Static resources
├── store/            # State management
├── utils/            # Utility functions
├── config.ts         # Module configuration (required)
└── index.ts          # Module export (required)
```

## Usage

### Creating a New Module

1. **Create module directory structure**
2. **Configure config.ts**
3. **Configure index.ts**
4. **Register module in the application**

### config.ts Example

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

		// Global components
		components: [import('./components/example.vue')],

		// View routes
		views: [
			{
				path: '/example',
				meta: {
					label: 'Example',
					icon: 'icon-example'
				},
				component: () => import('./views/index.vue')
			}
		],

		// Page routes
		pages: [
			{
				path: '/example/page',
				meta: {
					label: 'Example Page'
				},
				component: () => import('./pages/index.vue')
			}
		],

		// Module installation hook
		install(app) {
			// Register global components
			// app.component('ExampleComponent', ExampleComponent);
		},

		// Module load hook
		onLoad(events) {
			// Load initial data
			// events.hasToken?.(() => {
			//   // Load data when user is logged in
			// });
		}
	};
};
```

### Module Configuration Options

```typescript
import { ModuleConfig } from '/@/cool';

export default (): ModuleConfig => {
	return {
		// Basic module information
		enable: true, // Whether the module is enabled
		label: 'Module Name', // Module display name
		description: 'Module description', // Module description
		author: 'Author', // Module author
		version: '1.0.0', // Module version
		updateTime: '2024-02-02', // Last update time
		logo: '', // Module logo URL
		order: 0, // Module order in navigation

		// Global components
		components: [
			// Async component imports
			import('./components/example.vue')
		],

		// View routes (top-level navigation)
		views: [
			{
				path: '/module', // Route path
				meta: {
					label: 'Module', // Route label
					icon: 'icon-module', // Route icon
					auth: true, // Whether authentication is required
					roles: ['admin'], // Required roles
					cache: true, // Whether to cache the route
					hidden: false, // Whether to hide from navigation
					fixed: false, // Whether to fix in navigation
					alwaysShow: true, // Whether to always show
					breadcrumb: true, // Whether to show breadcrumb
					activeMenu: '/module' // Active menu when this route is active
				},
				component: () => import('./views/index.vue'),
				children: [
					// Sub-routes
					{
						path: 'list',
						meta: {
							label: 'List'
						},
						component: () => import('./views/list.vue')
					}
				]
			}
		],

		// Page routes (permission-controlled)
		pages: [
			{
				path: '/module/page',
				meta: {
					label: 'Page',
					auth: true
				},
				component: () => import('./pages/index.vue')
			}
		],

		// Module installation hook
		install(app) {
			// Register global components, directives, etc.
			// app.component('GlobalComponent', GlobalComponent);
			// app.directive('custom-directive', customDirective);
		},

		// Module load hook
		onLoad(events) {
			// Load initial data
			events.hasToken?.(() => {
				// Load data when user is logged in
				console.log('User logged in, loading module data');
			});

			events.noToken?.(() => {
				// Load data when user is not logged in
				console.log('User not logged in, loading public data');
			});

			events.enter?.(() => {
				// When entering the module
				console.log('Entering module');
			});

			events.leave?.(() => {
				// When leaving the module
				console.log('Leaving module');
			});
		}
	};
};
```

### index.ts Example

```typescript
import { useExampleStore } from './store';

export function useExample() {
	return {
		// Export store
		...useExampleStore(),

		// Custom methods
		customMethod() {
			console.log('Custom method called');
		},

		// Custom properties
		version: '1.0.0'
	};
}
```

### Store Example

```typescript
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useExampleStore = defineStore('example', () => {
	const count = ref(0);
	const name = ref('Example');

	const doubleCount = computed(() => count.value * 2);

	function increment() {
		count.value++;
	}

	function setName(newName: string) {
		name.value = newName;
	}

	return {
		count,
		name,
		doubleCount,
		increment,
		setName
	};
});
```

### Component Example

```vue
<template>
	<div class="example-component">
		<h2>{{ title }}</h2>
		<p>{{ description }}</p>
	</div>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ExampleComponent'
});

const props = defineProps({
	title: {
		type: String,
		default: 'Example'
	},
	description: {
		type: String,
		default: 'This is an example component'
	}
});
</script>

<style lang="scss" scoped>
.example-component {
	padding: 20px;
	background: #f5f7fa;
	border-radius: 8px;
}
</style>
```

### Locale Example (zh-cn.json)

```json
{
	"example": {
		"title": "示例",
		"description": "这是一个示例模块",
		"button": "点击按钮"
	}
}
```

## Module Registration

Modules are automatically registered by the framework. The system will scan the `src/modules` directory and load all modules with a valid `config.ts` file.

## Best Practices

1. **Module Naming**: Use kebab-case for module directories
2. **Component Naming**: Use PascalCase for component names
3. **Type Safety**: Use TypeScript for all module files
4. **Reusability**: Extract common logic to hooks and utils
5. **Internationalization**: Always include locale files
6. **Performance**: Lazy load components whenever possible
7. **Security**: Never hardcode sensitive information

## Common Issues

### Module Not Loading

- Ensure `config.ts` exists and is properly formatted
- Check if `enable` is set to `true` in config
- Verify module directory structure is correct

### Routes Not Appearing

- Check route configuration in `config.ts`
- Ensure component paths are correct
- Verify meta information is properly set

### Components Not Working

- Ensure components are properly registered
- Check import paths
- Verify component names are unique

## Troubleshooting

1. **Module Not Found**: Check module directory name and structure
2. **Config Error**: Validate `config.ts` syntax and types
3. **Route Issues**: Check route paths and component imports
4. **Locale Issues**: Verify locale files are properly formatted

## Example Workflow

1. Create module directory structure
2. Configure `config.ts` with basic settings
3. Create `index.ts` for module exports
4. Add store, components, and views
5. Test module functionality
6. Add internationalization support
7. Optimize for performance
