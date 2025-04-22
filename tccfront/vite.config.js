import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    outDir: 'dist',  // Certifique-se de que a saída do build é para a pasta 'dist'
  },
});
