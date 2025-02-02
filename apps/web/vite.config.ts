import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  build: {
    outDir: './dist',
  },
  esbuild: {
    jsxInject: `import 'regenerator-runtime/runtime'`,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.sparcs27.jeongrae.me/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
