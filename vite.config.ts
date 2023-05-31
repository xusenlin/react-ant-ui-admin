import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base:"./",
  server: {
    port: 3003,
    host: '0.0.0.0',
    open: true,
  },
  resolve:{
    alias: {
      '@': '/src/'
    },
  },
  plugins: [react()],
})
