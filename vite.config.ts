import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build : {
    outDir : "dev-dist",
  },
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true 
      },
    })
  ],
})
