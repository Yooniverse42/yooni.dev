import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: isDev
        ? '[name]_[local]_[hash:base64:4]'
        : '[local]_[hash:base64:2]',
    },
  },
  envPrefix: 'VITE_',
});
