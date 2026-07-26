import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages under a repo subpath, set base to the repo name.
  // Adjust this to your repo name (including leading and trailing slash).
  base: '/scale-with-raghav/',
})
