import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import FullReload from 'vite-plugin-full-reload'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {}
  },
  plugins: [
      vue(),
    // VitePWA({
    //   mode: 'development',
    //   srcDir: 'src',
    //   filename: 'sw.ts',
    //   strategies: 'injectManifest',
    //   includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    //   manifest: {
    //     name: 'Vue 3 Template',
    //     short_name: 'Vue 3',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: '/android-chrome-192x192.png', // <== don't remove slash, for testing purposes
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/android-chrome-512x512.png', // <== don't remove slash, for testing purposes
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/android-chrome-512x512.png', // <== don't remove slash, for testing purposes
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable',
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    extensions: ['.html', '.ts'],
    alias: [
      {
        find: '@/assets',
        replacement: path.resolve(__dirname, './src/assets')
      },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@/interface',
        replacement: path.resolve(__dirname, './src/interface')
      },
      {
        find: '@/layout',
        replacement: path.resolve(__dirname, './src/layout')
      },
      {
        find: '@/plugins',
        replacement: path.resolve(__dirname, './src/plugins')
      },
      {
        find: '@/store',
        replacement: path.resolve(__dirname, './src/store')
      },
      {
        find: '@/views',
        replacement: path.resolve(__dirname, './src/views')
      },
      {
        find: '@/router',
        replacement: path.resolve(__dirname, './src/router')
      },
      {
        find: '@/server',
        replacement: path.resolve(__dirname, './src/server')
      },
      {
        find: '@/utils',
        replacement: path.resolve(__dirname, './src/utils')
      },
      {
        find: '@/',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  optimizeDeps: {
    include: ['lodash']
  }
})
