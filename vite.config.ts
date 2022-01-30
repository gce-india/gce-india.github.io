import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		createHtmlPlugin({
			entry: 'src/main.tsx',
			template: 'public/index.html',
			minify: true,
			inject: {
				data: {
					title: 'GitHub Campus Experts India'
				}
			}
		})
	],
	base: '/',
	build: {
		assetsDir: 'modules',
		outDir: 'build'
	}
});