import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  base: './',
  plugins: [
    // ViteMinifyPlugin({}),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.ts',
      template: 'index.html'
    }),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    })
  ],
})