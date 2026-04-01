---
name: 'form-builder'
description: 'Builds form components for Cool Admin Vue using cl-form. Invoke when user needs to create forms with validation, layout, and custom components.'
---

# Form Builder

This skill helps you create form components for Cool Admin Vue using the cl-form component from @cool-vue/crud.

## Features

- Generates form components with validation
- Supports various form layouts
- Integrates with Element Plus components
- Provides type safety with TypeScript
- Supports nested forms and tabs
- Dynamic form items based on conditions
- Form plugins for extended functionality
- Advanced validation rules
- Custom form components
- Layout customization
- Event hooks for form lifecycle

## Usage

### Basic Form

```vue
<template>
	<cl-form ref="Form">
		<template #slot-btns>
			<el-button type="primary" @click="handleSubmit">Submit</el-button>
			<el-button @click="handleReset">Reset</el-button>
		</template>
	</cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';
import { ElMessage } from 'element-plus';

const Form = useForm();

function openForm() {
	Form.value?.open({
		title: 'Basic Form',
		items: [
			{
				label: 'Name',
				prop: 'name',
				required: true,
				component: {
					name: 'el-input',
					props: {
						placeholder: 'Enter name'
					}
				},
				rules: {
					required: true,
					message: 'Name is required'
				}
			},
			{
				label: 'Email',
				prop: 'email',
				component: {
					name: 'el-input',
					props: {
						type: 'email',
						placeholder: 'Enter email'
					}
				},
				rules: {
					required: true,
					message: 'Email is required',
					validator: (rule: any, value: string, callback: any) => {
						if (!value) {
							callback(new Error('Email is required'));
						} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
							callback(new Error('Invalid email format'));
						} else {
							callback();
						}
					}
				}
			},
			{
				label: 'Age',
				prop: 'age',
				component: {
					name: 'el-input-number',
					props: {
						min: 1,
						max: 100
					}
				}
			},
			{
				label: 'Gender',
				prop: 'gender',
				component: {
					name: 'el-radio-group',
					options: [
						{ label: 'Male', value: 1 },
						{ label: 'Female', value: 2 }
					]
				}
			},
			{
				label: 'Status',
				prop: 'status',
				component: {
					name: 'el-select',
					options: [
						{ label: 'Active', value: 1 },
						{ label: 'Inactive', value: 0 }
					]
				}
			}
		],
		on: {
			submit(data: any, { close }: any) {
				ElMessage.success('Form submitted successfully');
				console.log('Form data:', data);
				close();
			}
		}
	});
}

function handleSubmit() {
	Form.value?.submit();
}

function handleReset() {
	Form.value?.reset();
}
</script>
```

### Form with Tabs

```vue
<template>
	<cl-form ref="Form"></cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';

const Form = useForm();

function openTabbedForm() {
	Form.value?.open({
		title: 'Form with Tabs',
		items: [
			{
				type: 'tabs',
				props: {
					type: 'card',
					labels: [
						{ label: 'Basic Info', value: 'basic' },
						{ label: 'Contact Info', value: 'contact' },
						{ label: 'Settings', value: 'settings' }
					]
				}
			},
			// Basic Info Tab
			{
				group: 'basic',
				label: 'Name',
				prop: 'name',
				required: true,
				component: {
					name: 'el-input'
				}
			},
			{
				group: 'basic',
				label: 'Age',
				prop: 'age',
				component: {
					name: 'el-input-number'
				}
			},
			// Contact Info Tab
			{
				group: 'contact',
				label: 'Email',
				prop: 'email',
				component: {
					name: 'el-input'
				}
			},
			{
				group: 'contact',
				label: 'Phone',
				prop: 'phone',
				component: {
					name: 'el-input'
				}
			},
			// Settings Tab
			{
				group: 'settings',
				label: 'Theme',
				prop: 'theme',
				component: {
					name: 'el-select',
					options: [
						{ label: 'Light', value: 'light' },
						{ label: 'Dark', value: 'dark' }
					]
				}
			},
			{
				group: 'settings',
				label: 'Notifications',
				prop: 'notifications',
				component: {
					name: 'el-switch'
				}
			}
		]
	});
}
</script>
```

### Form with Nested Components

```vue
<template>
	<cl-form ref="Form"></cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';

const Form = useForm();

function openNestedForm() {
	Form.value?.open({
		title: 'Nested Form',
		items: [
			{
				label: 'User Info',
				component: {
					name: 'cl-form-card',
					props: {
						label: 'User Information',
						expand: true
					}
				},
				children: [
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
					}
				]
			},
			{
				label: 'Address',
				component: {
					name: 'cl-form-card',
					props: {
						label: 'Address Information',
						expand: false
					}
				},
				children: [
					{
						label: 'Street',
						prop: 'street',
						component: {
							name: 'el-input'
						}
					},
					{
						label: 'City',
						prop: 'city',
						component: {
							name: 'el-input'
						}
					},
					{
						label: 'Country',
						prop: 'country',
						component: {
							name: 'el-select',
							options: [
								{ label: 'China', value: 'CN' },
								{ label: 'USA', value: 'US' },
								{ label: 'Japan', value: 'JP' }
							]
						}
					}
				]
			}
		]
	});
}
</script>
```

### Custom Form Components

```vue
<template>
	<cl-form ref="Form">
		<template #slot-custom-component="{ scope }">
			<div class="custom-component">
				<el-input v-model="scope.customValue" placeholder="Custom input"></el-input>
				<el-button @click="handleCustomAction">Custom Action</el-button>
			</div>
		</template>
	</cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';
import { ElMessage } from 'element-plus';

const Form = useForm();

function openFormWithCustomComponent() {
	Form.value?.open({
		title: 'Form with Custom Component',
		items: [
			{
				label: 'Standard Input',
				prop: 'standard',
				component: {
					name: 'el-input'
				}
			},
			{
				label: 'Custom Component',
				prop: 'customValue',
				component: {
					name: 'slot-custom-component'
				}
			}
		]
	});
}

function handleCustomAction() {
	ElMessage.info('Custom action triggered');
}
</script>

<style lang="scss" scoped>
.custom-component {
	display: flex;
	align-items: center;
	gap: 10px;
}
</style>
```

### Dynamic Form Items

```vue
<template>
	<cl-form ref="Form"></cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';
import { ref } from 'vue';

const Form = useForm();
const formData = ref({});

function openDynamicForm() {
	Form.value?.open({
		title: 'Dynamic Form',
		form: formData.value,
		items: [
			{
				label: 'User Type',
				prop: 'userType',
				component: {
					name: 'el-select',
					options: [
						{ label: 'Admin', value: 'admin' },
						{ label: 'User', value: 'user' }
					]
				}
			},
			// Dynamic field based on userType
			() => {
				if (formData.value.userType === 'admin') {
					return {
						label: 'Admin Level',
						prop: 'adminLevel',
						component: {
							name: 'el-select',
							options: [
								{ label: 'Super Admin', value: 1 },
								{ label: 'Admin', value: 2 }
							]
						}
					};
				} else if (formData.value.userType === 'user') {
					return {
						label: 'User Role',
						prop: 'userRole',
						component: {
							name: 'el-select',
							options: [
								{ label: 'Viewer', value: 1 },
								{ label: 'Editor', value: 2 }
							]
						}
					};
				}
				return null;
			}
		],
		on: {
			change(data, prop) {
				formData.value = data;
				// Refresh form to show/hide dynamic fields
				Form.value?.refresh();
			}
		}
	});
}
</script>
```

### Advanced Validation Rules

```vue
<template>
	<cl-form ref="Form"></cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';

const Form = useForm();

function openFormWithAdvancedValidation() {
	Form.value?.open({
		title: 'Form with Advanced Validation',
		items: [
			{
				label: 'Username',
				prop: 'username',
				required: true,
				component: {
					name: 'el-input'
				},
				rules: {
					required: true,
					message: 'Username is required',
					trigger: 'blur',
					min: 3,
					max: 20
				}
			},
			{
				label: 'Password',
				prop: 'password',
				required: true,
				component: {
					name: 'el-input',
					props: {
						type: 'password'
					}
				},
				rules: {
					required: true,
					message: 'Password is required',
					trigger: 'blur',
					validator: (rule: any, value: string, callback: any) => {
						if (!value) {
							callback(new Error('Password is required'));
						} else if (value.length < 8) {
							callback(new Error('Password must be at least 8 characters'));
						} else if (!/[A-Z]/.test(value)) {
							callback(
								new Error('Password must contain at least one uppercase letter')
							);
						} else if (!/[0-9]/.test(value)) {
							callback(new Error('Password must contain at least one number'));
						} else {
							callback();
						}
					}
				}
			},
			{
				label: 'Confirm Password',
				prop: 'confirmPassword',
				required: true,
				component: {
					name: 'el-input',
					props: {
						type: 'password'
					}
				},
				rules: {
					required: true,
					message: 'Please confirm password',
					trigger: 'blur',
					validator: (rule: any, value: string, callback: any) => {
						const form = Form.value?.getForm();
						if (value !== form?.password) {
							callback(new Error('Passwords do not match'));
						} else {
							callback();
						}
					}
				}
			}
		]
	});
}
</script>
```

### Form with Plugins

```vue
<template>
	<cl-form ref="Form"></cl-form>
</template>

<script setup lang="ts">
import { useForm } from '@cool-vue/crud';
import { Plugins } from '/#/crud';

const Form = useForm();

function openFormWithPlugins() {
	Form.value?.open({
		title: 'Form with Plugins',
		plugins: [
			// Add form plugins here
			Plugins.Form.setAuto({
				// Auto generate form items from service
				service: 'user',
				customComponent(field: any) {
					// Customize component based on field
					if (field.propertyName === 'status') {
						return {
							name: 'el-switch'
						};
					}
					return null;
				}
			})
		],
		on: {
			submit(data: any, { close }: any) {
				console.log('Form data:', data);
				close();
			}
		}
	});
}
</script>
```

## Form Configuration

### Form Props

```typescript
Form.value?.open({
	title: 'Form Title',
	width: '60%',
	height: '80vh',
	props: {
		labelWidth: '120px',
		labelPosition: 'left'
	},
	dialog: {
		hideHeader: false,
		controls: ['fullscreen', 'close']
	},
	op: {
		justify: 'flex-end',
		saveButtonText: 'Submit',
		closeButtonText: 'Cancel',
		hidden: false,
		buttons: ['close', 'save']
	},
	isReset: true,
	form: {
		// Default form values
		name: 'Default Name'
	},
	items: [
		// Form items
	],
	on: {
		open() {
			// Form opened
		},
		submit(data, { close, done }) {
			// Form submitted
			close();
		},
		close(action, done) {
			// Form closed
			done();
		}
	}
});
```

### Form Item Configuration

```typescript
{
  label: 'Field Label',
  prop: 'fieldName',
  value: 'defaultValue',
  required: true,
  span: 12, // Layout span (24 for full width)
  hidden: false, // Boolean or function
  disabled: false, // Boolean or function
  rules: {
    required: true,
    message: 'Field is required',
    trigger: 'blur'
  },
  component: {
    name: 'el-input', // Component name
    props: {
      // Component props
      placeholder: 'Enter value'
    },
    options: [
      // Select options
      { label: 'Option 1', value: 1 }
    ],
    slots: {
      // Component slots
      prepend() {
        return 'Prefix';
      }
    }
  }
}
```

## Best Practices

1. **Form Structure**: Organize form items logically
2. **Validation**: Always add proper validation rules
3. **Layout**: Use appropriate span values for responsive design
4. **User Experience**: Provide clear labels and placeholders
5. **Error Handling**: Implement proper error feedback
6. **Accessibility**: Ensure forms are accessible
7. **Performance**: Use appropriate form components

## Common Issues

### Form Validation Not Working

- Ensure rules are properly defined
- Check trigger events
- Verify required fields are marked

### Form Submission Issues

- Check if submit handler is properly implemented
- Ensure form data is correctly formatted
- Verify API endpoint

### Layout Issues

- Check span values
- Verify form props configuration
- Ensure parent container has proper styling

## Troubleshooting

1. **Component Not Found**: Ensure Element Plus components are imported
2. **Validation Errors**: Check rule syntax and triggers
3. **Form Data Issues**: Verify prop names match form model
4. **Layout Problems**: Check grid system and span values

## Example Workflow

1. Define form structure and fields
2. Configure form items with validation
3. Add appropriate components
4. Implement form submission logic
5. Test form functionality
6. Optimize user experience
7. Add error handling and feedback
