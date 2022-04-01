import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      name: 'enbw-ui',
      fileName: (name) => `enbw.${name}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, `./src/assets/scss`),
      '@css-tokens': path.resolve(
        __dirname,
        `./styleDictionary/build/enbw/scss/`
      ),
      '@css-tools': path.resolve(
        __dirname,
        `./src/assets/scss/tools`
      ),
      '@css-brand': path.resolve(
        __dirname,
        `./src/assets/scss/enbw/`
      ),
      '@css-components': path.resolve(
        __dirname,
        `./src/assets/scss/shared/components`
      ),
      '@css-components-brand': path.resolve(
        __dirname,
        `./src/assets/scss/enbw/components`
      )
    }
},
  plugins: [vue()]
})
