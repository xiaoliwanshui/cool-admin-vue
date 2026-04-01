---
name: 'table-builder'
description: 'Builds table components for Cool Admin Vue using cl-table. Invoke when user needs to create data tables with pagination, sorting, and custom columns.'
---

# Table Builder

This skill helps you create table components for Cool Admin Vue using the cl-table component from @cool-vue/crud.

## Features

- Generates data tables with pagination
- Supports sorting, filtering, and selection
- Integrates with Element Plus table
- Provides type safety with TypeScript
- Supports custom columns and actions
- Multi-level headers
- Row/column spanning
- Row editing
- Context menu
- Header search
- Expandable rows
- Summary row
- Fixed columns

## Usage

### Basic Table

```vue
<template>
	<cl-table ref="Table"></cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';

const Table = useTable({
	autoHeight: true,
	columns: [
		{
			type: 'selection',
			width: 55
		},
		{
			label: 'ID',
			prop: 'id',
			width: 80,
			sortable: true
		},
		{
			label: 'Name',
			prop: 'name',
			minWidth: 120
		},
		{
			label: 'Email',
			prop: 'email',
			minWidth: 180
		},
		{
			label: 'Status',
			prop: 'status',
			width: 100,
			dict: [
				{ label: 'Active', value: 1 },
				{ label: 'Inactive', value: 0 }
			]
		},
		{
			label: 'Create Time',
			prop: 'createTime',
			minWidth: 160,
			formatter: (row: any) => {
				return new Date(row.createTime).toLocaleString();
			}
		},
		{
			type: 'op',
			width: 150,
			buttons: ['edit', 'delete']
		}
	]
});
</script>
```

### Table with Custom Actions

```vue
<template>
	<cl-table ref="Table">
		<template #slot-btn="{ scope }">
			<el-button type="primary" size="small" @click="handleView(scope.row)"> View </el-button>
			<el-button type="success" size="small" @click="handleEdit(scope.row)"> Edit </el-button>
			<el-button type="danger" size="small" @click="handleDelete(scope.row)">
				Delete
			</el-button>
		</template>
	</cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';
import { ElMessage } from 'element-plus';

const Table = useTable({
	columns: [
		{
			type: 'selection'
		},
		{
			label: 'ID',
			prop: 'id'
		},
		{
			label: 'Name',
			prop: 'name'
		},
		{
			type: 'op',
			width: 200,
			buttons: ['slot-btn']
		}
	]
});

function handleView(row: any) {
	ElMessage.info(`Viewing row: ${row.id}`);
}

function handleEdit(row: any) {
	ElMessage.info(`Editing row: ${row.id}`);
}

function handleDelete(row: any) {
	ElMessage.info(`Deleting row: ${row.id}`);
}
</script>
```

### Table with Custom Columns

```vue
<template>
	<cl-table ref="Table">
		<template #slot-avatar="{ scope }">
			<el-avatar :size="40">
				{{ scope.row.name.charAt(0) }}
			</el-avatar>
		</template>
		<template #slot-actions="{ scope }">
			<el-button-group>
				<el-button size="small" @click="handleAction(scope.row, 'view')">
					<el-icon><View /></el-icon>
				</el-button>
				<el-button size="small" @click="handleAction(scope.row, 'edit')">
					<el-icon><Edit /></el-icon>
				</el-button>
				<el-button size="small" @click="handleAction(scope.row, 'delete')">
					<el-icon><Delete /></el-icon>
				</el-button>
			</el-button-group>
		</template>
	</cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';
import { ElMessage } from 'element-plus';
import { View, Edit, Delete } from '@element-plus/icons-vue';

const Table = useTable({
	columns: [
		{
			label: 'Avatar',
			width: 80,
			component: {
				name: 'slot-avatar'
			}
		},
		{
			label: 'ID',
			prop: 'id'
		},
		{
			label: 'Name',
			prop: 'name'
		},
		{
			label: 'Email',
			prop: 'email'
		},
		{
			label: 'Actions',
			width: 150,
			component: {
				name: 'slot-actions'
			}
		}
	]
});

function handleAction(row: any, action: string) {
	ElMessage.info(`Action ${action} for row: ${row.id}`);
}
</script>
```

### Table with Dynamic Columns

```vue
<template>
	<cl-table ref="Table"></cl-table>
</template>

<script setup lang="ts">
import { useTable, type TableColumn } from '@cool-vue/crud';
import { ref, computed } from 'vue';

const showEmail = ref(true);
const showPhone = ref(true);

const columns = computed<TableColumn[]>(() => {
	const cols: TableColumn[] = [
		{
			type: 'selection'
		},
		{
			label: 'ID',
			prop: 'id'
		},
		{
			label: 'Name',
			prop: 'name'
		}
	];

	if (showEmail.value) {
		cols.push({
			label: 'Email',
			prop: 'email'
		});
	}

	if (showPhone.value) {
		cols.push({
			label: 'Phone',
			prop: 'phone'
		});
	}

	cols.push({
		type: 'op',
		buttons: ['edit', 'delete']
	});

	return cols;
});

const Table = useTable({
	columns: columns.value,
	on: {
		refresh() {
			// Table refreshed
		}
	}
});
</script>
```

### Table with Multi-level Headers

```vue
<template>
	<cl-table ref="Table"></cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';

const Table = useTable({
	columns: [
		{
			type: 'selection',
			width: 55
		},
		{
			label: 'Personal Information',
			children: [
				{
					label: 'ID',
					prop: 'id',
					width: 80
				},
				{
					label: 'Name',
					prop: 'name',
					minWidth: 120
				},
				{
					label: 'Email',
					prop: 'email',
					minWidth: 180
				}
			]
		},
		{
			label: 'Work Information',
			children: [
				{
					label: 'Department',
					prop: 'department',
					minWidth: 120
				},
				{
					label: 'Position',
					prop: 'position',
					minWidth: 120
				},
				{
					label: 'Status',
					prop: 'status',
					width: 100,
					dict: [
						{ label: 'Active', value: 1 },
						{ label: 'Inactive', value: 0 }
					]
				}
			]
		},
		{
			type: 'op',
			width: 150,
			buttons: ['edit', 'delete']
		}
	]
});
</script>
```

### Table with Row Spanning

```vue
<template>
	<cl-table ref="Table" :span-method="onSpanMethod"></cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';

const Table = useTable({
	columns: [
		{
			label: 'Department',
			prop: 'department',
			minWidth: 120
		},
		{
			label: 'Name',
			prop: 'name',
			minWidth: 120
		},
		{
			label: 'Position',
			prop: 'position',
			minWidth: 120
		},
		{
			label: 'Status',
			prop: 'status',
			width: 100,
			dict: [
				{ label: 'Active', value: 1 },
				{ label: 'Inactive', value: 0 }
			]
		}
	]
});

// Row spanning method
function onSpanMethod({ row, column, rowIndex, columnIndex }: any) {
	if (columnIndex === 0) {
		// Span department column when value is the same
		if (rowIndex === 0) {
			return { rowspan: 3, colspan: 1 };
		} else if (rowIndex === 1 || rowIndex === 2) {
			return { rowspan: 0, colspan: 0 };
		}
	}
}
</script>
```

### Table with Context Menu

```vue
<template>
	<cl-table ref="Table"></cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';
import { ElMessage } from 'element-plus';

const Table = useTable({
	contextMenu: ['refresh', 'slot-context-menu'],
	columns: [
		{
			type: 'selection'
		},
		{
			label: 'ID',
			prop: 'id'
		},
		{
			label: 'Name',
			prop: 'name'
		},
		{
			label: 'Email',
			prop: 'email'
		}
	],
	on: {
		contextMenuClick(action: string, row: any) {
			if (action === 'refresh') {
				Table.value?.refresh();
			} else if (action === 'custom-action') {
				ElMessage.info(`Custom action for row: ${row.id}`);
			}
		}
	}
});
</script>
```

### Table with Expandable Rows

```vue
<template>
	<cl-table ref="Table" type="expand">
		<template #slot-expand="{ scope }">
			<div class="expand-content">
				<h4>Details for {{ scope.row.name }}</h4>
				<p><strong>Email:</strong> {{ scope.row.email }}</p>
				<p><strong>Phone:</strong> {{ scope.row.phone }}</p>
				<p><strong>Address:</strong> {{ scope.row.address }}</p>
			</div>
		</template>
	</cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';

const Table = useTable({
	columns: [
		{
			type: 'expand'
		},
		{
			label: 'ID',
			prop: 'id'
		},
		{
			label: 'Name',
			prop: 'name'
		},
		{
			label: 'Email',
			prop: 'email'
		}
	]
});
</script>

<style lang="scss" scoped>
.expand-content {
	padding: 16px;
	background-color: #f5f7fa;
	border-radius: 4px;
}
</style>
```

### Table with Summary Row

```vue
<template>
	<cl-table ref="Table"></cl-table>
</template>

<script setup lang="ts">
import { useTable } from '@cool-vue/crud';

const Table = useTable({
	showSummary: true,
	summaryMethod: (data: any[]) => {
		const sums: any[] = [];
		sums[0] = 'Total';
		sums[1] = data.length;
		sums[2] = data.reduce((acc, row) => acc + (row.amount || 0), 0);
		return sums;
	},
	columns: [
		{
			label: 'Name',
			prop: 'name',
			minWidth: 120
		},
		{
			label: 'Amount',
			prop: 'amount',
			minWidth: 100,
			formatter: (row: any) => {
				return `$${row.amount}`;
			}
		},
		{
			label: 'Date',
			prop: 'date',
			minWidth: 160
		}
	]
});
</script>
```

## Table Configuration

### Table Props

```typescript
const Table = useTable({
	autoHeight: true,
	maxHeight: '500px',
	stripe: true,
	border: true,
	size: 'default', // small, default, large
	showHeader: true,
	showSummary: false,
	highlightCurrentRow: true,
	rowKey: 'id',
	emptyText: 'No data available',
	defaultExpandAll: false,
	treeProps: {
		children: 'children',
		hasChildren: 'hasChildren'
	},
	columns: [
		// Columns configuration
	],
	on: {
		rowClick(row: any, event: Event, column: any) {
			console.log('Row clicked:', row);
		},
		selectionChange(selection: any[]) {
			console.log('Selection changed:', selection);
		},
		sortChange({ prop, order }: { prop: string; order: string }) {
			console.log('Sort changed:', prop, order);
		},
		filterChange(filters: any) {
			console.log('Filter changed:', filters);
		}
	}
});
```

### Column Configuration

```typescript
{
  type: 'selection' | 'index' | 'expand' | 'op',
  label: 'Column Label',
  prop: 'fieldName',
  width: 100,
  minWidth: 120,
  maxWidth: 200,
  fixed: 'left' | 'right',
  sortable: true | false | 'custom',
  sortMethod: (a: any, b: any) => number,
  sortBy: string | ((row: any, index: number) => any),
  resizable: true,
  formatter: (row: any, column: any, cellValue: any, index: number) => any,
  dict: Array<{ label: string; value: any }>,
  component: {
    name: string,
    props: object,
    slots: object
  },
  buttons: string[],
  render: (row: any, column: any, index: number) => any
}
```

## Table Methods

```typescript
// Get selected rows
const selection = Table.value?.getSelection();

// Clear selection
Table.value?.clearSelection();

// Toggle row selection
Table.value?.toggleRowSelection(row);

// Set current row
Table.value?.setCurrentRow(row);

// Get current row
const currentRow = Table.value?.getCurrentRow();

// Refresh table
Table.value?.refresh();

// Load data manually
Table.value?.loadData(data);

// Set loading state
Table.value?.setLoading(true);
```

## Best Practices

1. **Column Width**: Set appropriate width for each column
2. **Responsive Design**: Use minWidth for better responsiveness
3. **Sorting**: Enable sorting for relevant columns
4. **Selection**: Use selection type for bulk operations
5. **Customization**: Use slots for custom column content
6. **Performance**: Virtual scroll for large datasets
7. **Accessibility**: Ensure proper labels and ARIA attributes

## Common Issues

### Table Not Displaying Data

- Ensure data is properly formatted
- Check if service is returning data correctly
- Verify column prop names match data keys

### Sorting Not Working

- Ensure sortable is enabled
- Check if service handles sorting parameters
- Verify sortBy function is correctly implemented

### Selection Issues

- Ensure rowKey is set correctly
- Check if selection-change event is properly handled
- Verify toggleRowSelection works as expected

## Troubleshooting

1. **Data Issues**: Check data structure and column props
2. **Performance Issues**: Use virtual scroll for large datasets
3. **Styling Issues**: Check Element Plus table styles
4. **Functionality Issues**: Verify event handlers and methods

## Example Workflow

1. Define table columns and configuration
2. Implement custom columns and actions
3. Add event handlers for user interactions
4. Test table functionality
5. Optimize performance for large datasets
6. Add error handling and loading states
7. Ensure responsive design
