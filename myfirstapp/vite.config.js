import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Project1/', // ← this is crucial
  plugins: [react()],
  build: {
  outDir: 'docs',
}

})

