import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo will be david-portfolio, so base is set for GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/david-portfolio/',
})
