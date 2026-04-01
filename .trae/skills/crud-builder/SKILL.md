---
name: 'crud-builder'
description: 'Builds CRUD components for Cool Admin Vue using @cool-vue/crud. Invoke when user needs to create CRUD operations for a model.'
---

# CRUD Builder

This skill helps you create CRUD (Create, Read, Update, Delete) components for Cool Admin Vue using the @cool-vue/crud library.

## Features

- Generates complete CRUD components with table, form, and search functionality
- Supports custom columns, form items, and actions
- Integrates with Element Plus components
- Provides type safety with TypeScript

## Usage

### Basic CRUD Component

```vue
<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />

			<cl-flex1 />

			<cl-search ref="Search" />
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
import { useCrud, useTable, useUpsert, useAdvSearch, useSearch } from '@cool-vue/crud';
import { useDict } from '/$/dict';
import { useCool } from '/@/cool';

const { service } = useCool();
const { dict } = useDict();

// CRUD configuration
const Crud = useCrud(
	{
		service: 'test',
		onRefresh(params, { next }) {
			return next(params);
		}
	},
	app => {
		app.refresh({
			size: 10
		});
	}
);

// Table configuration
const Table = useTable({
	autoHeight: false,
	columns: [
		{
			type: 'selection'
		},
		{
			label: 'ID',
			prop: 'id',
			minWidth: 80
		},
		{
			label: 'Name',
			prop: 'name',
			minWidth: 120
		},
		{
			label: 'Status',
			prop: 'status',
			dict: dict.get('status'),
			minWidth: 100
		},
		{
			type: 'op',
			buttons: ['info', 'edit', 'delete']
		}
	]
});

// Search configuration
const Search = useSearch({
	items: [
		{
			label: 'Name',
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
		},
		{
			label: 'Status',
			prop: 'status',
			component: {
				name: 'cl-select',
				props: {
					options: dict.get('status')
				}
			}
		}
	]
});

// Form configuration
const Upsert = useUpsert({
	items: [
		{
			label: 'Name',
			prop: 'name',
			required: true,
			component: {
				name: 'el-input'
			}
		},
		{
			label: 'Status',
			prop: 'status',
			component: {
				name: 'cl-select',
				props: {
					options: dict.get('status')
				}
			}
		}
	],

	// Event hooks
	onOpen() {
		console.log('Form opened');
	},

	async onInfo(data, { next, done }) {
		const res = await next({
			id: data.id
		});

		done({
			...res,
			name: `[${res.name}]`
		});
	},

	onOpened(data) {
		if (Upsert.value?.mode === 'update') {
			// Custom logic for edit mode
		}
	},

	async onSubmit(data, { next, done, close }) {
		const res = await next(data);
		close();
	},

	onClose(action, done) {
		done();
	},

	onClosed() {
		console.log('Form closed');
	}
});

// Advanced search configuration
const AdvSearch = useAdvSearch({
	items: [
		{
			label: 'Name',
			prop: 'name',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		},
		{
			label: 'Status',
			prop: 'status',
			component: {
				name: 'cl-select',
				props: {
					options: dict.get('status')
				}
			}
		}
	],

	title: 'Advanced Search',
	size: '50%',
	op: ['close', 'search', 'reset']
});

function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
```

### Advanced Search Component

```vue
<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-adv-btn>Advanced Search</cl-adv-btn>
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<cl-adv-search ref="AdvSearch">
			<!-- Custom buttons -->
			<template #slot-btn>
				<el-button @click="customSearch">Custom Search</el-button>
			</template>
		</cl-adv-search>
	</cl-crud>
</template>

<script setup lang="ts">
import { useCrud, useTable, useAdvSearch } from '@cool-vue/crud';
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
			label: 'Name',
			prop: 'name'
		}
	]
});

const AdvSearch = useAdvSearch({
	items: [
		{
			label: 'Name',
			prop: 'name',
			component: {
				name: 'el-input',
				props: {
					clearable: true
				}
			}
		}
	],

	title: 'Advanced Search',
	size: '50%',
	op: ['close', 'search', 'reset', 'slot-btn']
});

function customSearch() {
	Crud.value?.refresh({ page: 1 });
}
</script>
```

### Collapsible Search Component

```vue
<template>
	<cl-crud ref="Crud">
		<!-- Collapsible search -->
		<cl-search ref="Search" reset-btn collapse :inline="false" />

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
			label: 'Name',
			prop: 'name'
		}
	]
});

const Search = useSearch({
	items: [
		{
			label: 'Name',
			prop: 'name',
			component: {
				name: 'el-input'
			}
		},
		{
			label: 'Email',
			prop: 'email',
			component: {
				name: 'el-input'
			}
		},
		{
			label: 'Phone',
			prop: 'phone',
			component: {
				name: 'el-input'
			}
		}
	]
});
</script>
```

### Custom Actions

```vue
<template>
	<cl-crud ref="Crud">
		<!-- ... other components ... -->
		<cl-table ref="Table">
			<template #slot-btn="{ scope }">
				<el-button @click="handleCustomAction(scope.row)"> Custom Action </el-button>
			</template>
		</cl-table>
		<!-- ... other components ... -->
	</cl-crud>
</template>

<script setup lang="ts">
// ... imports ...

const Table = useTable({
	columns: [
		// ... other columns ...
		{
			type: 'op',
			width: 200,
			buttons: ['edit', 'delete', 'slot-btn']
		}
	]
});

function handleCustomAction(row: any) {
	console.log('Custom action for row:', row);
}
</script>
```

### Advanced Features

#### Dynamic Form Items

```typescript
const Upsert = useUpsert({
	items: [
		{
			label: 'Name',
			prop: 'name',
			component: {
				name: 'el-input'
			}
		},
		() => {
			return {
				label: 'Password',
				prop: 'password',
				hidden: Upsert.value?.mode === 'update',
				component: {
					name: 'el-input',
					props: {
						type: 'password'
					}
				}
			};
		}
	]
});
```

#### Hook Usage for Data Transformation

```typescript
const Upsert = useUpsert({
	items: [
		{
			label: 'Name',
			prop: 'name',
			component: {
				name: 'el-input'
			}
		},
		{
			label: '省市区',
			prop: 'pca2',
			hook: {
				bind(value, { form }) {
					return [form.province, form.city, form.district];
				},
				submit(value, { form, prop }) {
					const [province, city, district] = value || [];
					form.province = province;
					form.city = city;
					form.district = district;
					form[prop] = undefined;
				}
			},
			component: {
				name: 'cl-distpicker'
			}
		},
		{
			label: '标签',
			prop: 'labels',
			hook: {
				bind: ['split', 'number'],
				submit: ['join']
			},
			component: {
				name: 'el-select',
				props: {
					multiple: true
				},
				options: [
					{ label: '帅气', value: 1 },
					{ label: '多金', value: 2 },
					{ label: '有才华', value: 3 }
				]
			}
		}
	]
});
```

#### Different Modes (Add, Update, Info)

```typescript
const Upsert = useUpsert({
	items: [
		{
			label: 'Name',
			prop: 'name',
			component: {
				name: 'el-input'
			}
		},
		() => {
			return {
				label: 'Phone',
				prop: 'phone',
				component: {
					name: 'el-input',
					props: {
						disabled: Upsert.value?.mode === 'update'
					}
				}
			};
		}
	],
	onOpen() {
		console.log('Current mode:', Upsert.value?.mode);
	}
});
```

#### Custom Service Methods

```typescript
const Crud = useCrud({
	service: 'test',
	onSubmit(data, { next, close }) {
		// Custom submit logic
		service.test.customSave(data).then(() => {
			close();
			Crud.value?.refresh();
		});
	}
});
```

## Best Practices

1. **Service Configuration**: Always specify the service name that maps to your backend API
2. **Type Safety**: Use TypeScript interfaces for your models
3. **Dict Integration**: Use dict.get() for dropdown options whenever possible
4. **Customization**: Use slots for custom table columns and form items
5. **Performance**: Set autoHeight: false for tables in dialogs
6. **Error Handling**: Implement proper error handling in event hooks

## Common Issues

### Table Not Displaying Data

- Ensure service name is correct
- Check if the service method returns data in the expected format
- Verify API response structure

### Form Submission Issues

- Check if required fields are properly marked
- Ensure form data matches backend expectations
- Implement onSubmit hook for custom validation

### Search Not Working

- Verify search fields are properly configured
- Check if the service handles search parameters correctly
- Ensure search components are properly placed in the template

## Troubleshooting

1. **Component Not Found**: Ensure @cool-vue/crud is installed and imported
2. **Service Error**: Check network requests in browser dev tools
3. **Type Errors**: Ensure TypeScript interfaces match API response
4. **Styling Issues**: Check Element Plus and Tailwind CSS configurations

## Example Workflow

1. Create a new component file
2. Import necessary CRUD hooks
3. Configure CRUD, Table, and Upsert
4. Add template structure
5. Test functionality
6. Add customizations as needed
