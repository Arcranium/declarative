import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dtsPlugin({
    exclude: "src"
  })],
  resolve: {
    alias: [
      { find: "@root", replacement: resolve(__dirname, ".") },
      { find: "@lib", replacement: resolve(__dirname, "lib") },
      { find: "@stories", replacement: resolve(__dirname, "src/stories") },
    ]
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Declarative',
      fileName: 'declarative',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue'
        }
      }
    }
  },
})
