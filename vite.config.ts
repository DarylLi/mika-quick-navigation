import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCDNImport from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    viteCDNImport({
      modules: [
        // 添加更多依赖，如 axios, vue-router 等
      ],
    }),
  ],
  base: './'
})