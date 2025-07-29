import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'  // ✅ 추가

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'B-SIDE',
        short_name: 'B-SIDE',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/bside.png', // ✅ public 폴더 안에 넣어야 함
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/bside.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
