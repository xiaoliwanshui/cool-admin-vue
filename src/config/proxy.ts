const proxy = {
	'/dev/': {
		target: 'http://156.224.29.37:8001',
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, '')
	},

	'/prod/': {
		target: 'http://156.224.29.37:8001',
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, '/api')
	}
};

const value = 'dev';
const host = proxy[`/${value}/`]?.target;

export { proxy, host, value };
