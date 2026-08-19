import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/WULab/',
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  }
})
