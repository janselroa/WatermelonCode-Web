import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-html'

export default defineConfig({
    base: './',
    plugins: [
      ViteMinifyPlugin({}),
      handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        })
    ],
  })