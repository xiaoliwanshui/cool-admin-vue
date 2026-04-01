---
name: 'service-generator'
description: 'Generates service layer code for Cool Admin Vue. Invoke when user needs to create API service classes for backend communication.'
---

# Service Generator

This skill helps you create service layer code for Cool Admin Vue to handle API communication with the backend.

## Service Structure

```typescript
import { BaseService } from '/@/cool/service';

export class ExampleService extends BaseService {
	constructor() {
		super();
		this.namespace = 'example';
	}

	// Custom methods
	async customMethod(params: any) {
		return this.request({
			url: '/custom/path',
			method: 'POST',
			params
		});
	}
}

export default new ExampleService();
```

## Usage

### Creating a New Service

1. **Create service directory**
2. **Define service class extending BaseService**
3. **Set namespace**
4. **Add custom methods**
5. **Export service instance**

### Basic Service Example

```typescript
import { BaseService } from '/@/cool/service';

export class UserService extends BaseService {
	constructor() {
		super();
		this.namespace = 'user';
	}

	// Get user list
	async getList(params: any) {
		return this.request({
			url: '/list',
			method: 'POST',
			params
		});
	}

	// Get user info
	async getInfo(id: number) {
		return this.request({
			url: '/info',
			method: 'POST',
			params: { id }
		});
	}

	// Create user
	async create(data: any) {
		return this.request({
			url: '/add',
			method: 'POST',
			data
		});
	}

	// Update user
	async update(data: any) {
		return this.request({
			url: '/update',
			method: 'POST',
			data
		});
	}

	// Delete user
	async delete(ids: number[]) {
		return this.request({
			url: '/delete',
			method: 'POST',
			params: { ids }
		});
	}
}

export default new UserService();
```

### Advanced Service Example

```typescript
import { BaseService } from '/@/cool/service';

// Types
interface UserInfo {
	id: number;
	name: string;
	email: string;
	status: number;
	createTime: string;
}

interface CreateUserParams {
	name: string;
	email: string;
	password: string;
}

interface UpdateUserParams {
	id: number;
	name?: string;
	email?: string;
	status?: number;
}

export class UserService extends BaseService {
	constructor() {
		super();
		this.namespace = 'user';
	}

	// Get user list with pagination
	async getList(params: {
		page: number;
		size: number;
		keyword?: string;
		status?: number;
	}): Promise<{ list: UserInfo[]; total: number }> {
		return this.request({
			url: '/page',
			method: 'POST',
			params
		});
	}

	// Get user info
	async getInfo(id: number): Promise<UserInfo> {
		return this.request({
			url: '/info',
			method: 'POST',
			params: { id }
		});
	}

	// Create user
	async create(data: CreateUserParams): Promise<void> {
		return this.request({
			url: '/add',
			method: 'POST',
			data
		});
	}

	// Update user
	async update(data: UpdateUserParams): Promise<void> {
		return this.request({
			url: '/update',
			method: 'POST',
			data
		});
	}

	// Delete users
	async delete(ids: number[]): Promise<void> {
		return this.request({
			url: '/delete',
			method: 'POST',
			params: { ids }
		});
	}

	// Export users
	async export(params: { status?: number; startDate?: string; endDate?: string }): Promise<Blob> {
		return this.request({
			url: '/export',
			method: 'POST',
			params,
			responseType: 'blob'
		});
	}

	// Upload avatar
	async uploadAvatar(file: File): Promise<{ url: string }> {
		const formData = new FormData();
		formData.append('file', file);

		return this.request({
			url: '/uploadAvatar',
			method: 'POST',
			data: formData,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	}
}

export default new UserService();
```

## Using Services

### In Components

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCool } from '/@/cool';

const { service } = useCool();
const users = ref<any[]>([]);
const loading = ref(false);

async function loadUsers() {
	loading.value = true;
	try {
		const { list } = await service.user.getList({
			page: 1,
			size: 10
		});
		users.value = list;
	} catch (error) {
		console.error('Failed to load users:', error);
	} finally {
		loading.value = false;
	}
}

async function createUser() {
	try {
		await service.user.create({
			name: 'New User',
			email: 'user@example.com',
			password: '123456'
		});
		loadUsers();
	} catch (error) {
		console.error('Failed to create user:', error);
	}
}

onMounted(() => {
	loadUsers();
});
</script>
```

### In Store

```typescript
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useCool } from '/@/cool';

export const useUserStore = defineStore('user', () => {
	const { service } = useCool();
	const userList = ref<any[]>([]);
	const currentUser = ref<any>(null);
	const loading = ref(false);

	async function fetchUsers(params: any) {
		loading.value = true;
		try {
			const { list } = await service.user.getList(params);
			userList.value = list;
		} finally {
			loading.value = false;
		}
	}

	async function fetchUserInfo(id: number) {
		loading.value = true;
		try {
			const user = await service.user.getInfo(id);
			currentUser.value = user;
		} finally {
			loading.value = false;
		}
	}

	async function createUser(data: any) {
		loading.value = true;
		try {
			await service.user.create(data);
			await fetchUsers({ page: 1, size: 10 });
		} finally {
			loading.value = false;
		}
	}

	return {
		userList,
		currentUser,
		loading,
		fetchUsers,
		fetchUserInfo,
		createUser
	};
});
```

## Best Practices

1. **Namespace**: Always set a unique namespace for each service
2. **Type Safety**: Use TypeScript interfaces for request/response types
3. **Error Handling**: Implement proper error handling
4. **Code Organization**: Group related methods together
5. **Reusability**: Extract common logic to BaseService
6. **Performance**: Use appropriate HTTP methods and caching
7. **Security**: Never expose sensitive information

## Common Issues

### Service Not Found

- Ensure service is properly exported
- Check namespace configuration
- Verify import paths

### API Errors

- Check network connection
- Verify API endpoints
- Check request parameters
- Review error messages in browser dev tools

### Type Errors

- Ensure TypeScript interfaces match API response
- Check parameter types
- Verify return types

## Troubleshooting

1. **Service Registration**: Ensure service is properly exported and imported
2. **API Communication**: Check network requests in browser dev tools
3. **Error Handling**: Implement proper try-catch blocks
4. **Type Issues**: Use TypeScript strict mode for better type checking

## Example Workflow

1. Create service directory and file
2. Extend BaseService and set namespace
3. Define TypeScript interfaces
4. Implement service methods
5. Export service instance
6. Use service in components or store
7. Test API communication
8. Add error handling and optimization
