import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

import { title } from './src/constants';

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
					title: title
				}
			}
		})
	],
	base: '/',
	css: {
		postcss: {
			plugins: [
			{
				postcssPlugin: 'internal:charset-removal',
				AtRule: {
				charset: (atRule) => {
					if (atRule.name === 'charset') {
					atRule.remove();
					}
				}
				}
			}
			]
		}
	},
	build: {
		assetsDir: 'modules',
		outDir: 'build'
	}
});