import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cehcvkr/', // 👈 replace 'portfolio' with your repo name if different
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
