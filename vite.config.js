import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // reemplaza por el nombre del repo
  plugins: [react()],
});
