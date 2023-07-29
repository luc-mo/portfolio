import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			assets: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			config: path.resolve(__dirname, './src/config'),
			context: path.resolve(__dirname, './src/context'),
			hooks: path.resolve(__dirname, './src/hooks'),
			pages: path.resolve(__dirname, './src/pages'),
			services: path.resolve(__dirname, './src/services'),
			store: path.resolve(__dirname, './src/store'),
			styles: path.resolve(__dirname, './src/styles'),
			types: path.resolve(__dirname, './src/types'),
			utils: path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: [react()],
})
