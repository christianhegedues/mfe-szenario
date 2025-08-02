import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: 'http://localhost:5175/',
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        sensors: {
          type: 'module',
          name: 'sensors',
          entry: 'http://localhost:5173/remoteEntry.js',
        },
        filters: {
          type: 'module',
          name: 'filters',
          entry: 'http://localhost:5174/remoteEntry.js',
        }
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
})
