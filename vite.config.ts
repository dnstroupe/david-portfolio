import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/david-portfolio/',   // IMPORTANT for GitHub Pages
  plugins: [react()],
})
