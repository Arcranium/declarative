import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'live-demo') {
    return {
      base: './',
      plugins: [vue()],
      test: {
        globals: true,
      },
      resolve: {
        alias: {
          '@lib': resolve(__dirname, 'src', 'declarative'),
        },
      }
    }
  } else {
    return {
      plugins: [vue()],
      resolve: {
        alias: {
          '@lib': resolve(__dirname, 'src', 'declarative'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/declarative/index.ts'),
          name: 'declarative',
          fileName: 'declarative',
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    }
  }
})
