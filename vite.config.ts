import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blockchain-ui-fun/',
  assetsInclude: ['**/*.png'],
  build: {
    target: 'esnext'
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
    coverage: {
      provider: "c8"
    },
  },
})
