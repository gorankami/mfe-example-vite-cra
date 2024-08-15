import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

const federationPlugin = federation({
  name: 'craGuest',
  remotes: [{
    craGuest: {
      external: "http://localhost:5173/api/remoteEntry.js",
      from: "webpack",
      format: "esm",
      externalType: "url"
    },
  }],
  shared: ["react",
    'react-dom',
  ]
})
export default defineConfig({
  plugins: [react(), federationPlugin],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
