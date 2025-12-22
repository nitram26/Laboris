import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    // otros plugins si los necesitas
  ],
  server: {
    port: 5503,        // <--- aquí defines el puerto del servidor de desarrollo
    open: true,        // (opcional) abre automáticamente el navegador
    host: true         // (opcional) permite acceso desde la red local
  }
})
