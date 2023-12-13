import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://api.themoviedb.org/3',
        changeOrigin: true,
        headers: {
          // Add any necessary headers here, such as API keys
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUzYjg4MzU2OGYxOWQ1YzFlODYxZDU3ZjAwNDNiMiIsInN1YiI6IjYxZGZmYTVlOTBiODdlMDA2ZDA5NDhlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9977sdQCF016EoSrjJAnHqASttkaO1fklE1krTvRRFU',
        },
      },
    },
  },
})
