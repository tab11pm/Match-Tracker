import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'process.env': process.env,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, ''),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@app': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist',
	},
	server: {
		host: '0.0.0.0',
		port: parseInt(process.env.VITE_PORT) || 5173,
	},
	preview: {
		port: parseInt(process.env.VITE_PORT) || 5173,
	},
})
