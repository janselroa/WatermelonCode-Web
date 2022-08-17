import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
/*
** Using ViteMinifyPlugin, shows the following error:
  failed to load config from C:\Users\mrlui\workspace\watermeloncode-web\vite.config.js
  error when starting dev server:
  file:///C:/Users/mrlui/workspace/watermeloncode-web/vite.config.js.timestamp-1660711818755.mjs:5
  import { ViteMinifyPlugin } from "vite-plugin-html";
           ^^^^^^^^^^^^^^^^
  SyntaxError: The requested module 'vite-plugin-html' does not provide an export named 'ViteMinifyPlugin' 
*/
// import { ViteMinifyPlugin } from 'vite-plugin-html'

// This is what should be used
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
