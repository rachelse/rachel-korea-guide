import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from /<repo>/ when using project pages.
// Repo name: rachel-guide
export default defineConfig({
  plugins: [react()],
  base: '/rachel-guide/',
})
