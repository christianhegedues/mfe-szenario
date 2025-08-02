import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'http://localhost:5173',
  plugins: [
    vue(),
    federation({
      name: 'sensors',
      filename: 'remoteEntry.js',
      exposes: {
        './sensors': './src/sensors.js',
        './sensors.css': './src/sensors.css',
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: '3.5.17'
        },
      },
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  server: {
    origin: 'http://localhost:5173',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5175',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    },
  },
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      },
    },
  },
})
