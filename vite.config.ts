import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
    appType: mode === "development" ? 'spa' : 'mpa',
    plugins: [react()],
    base: mode === "development" ? '' : '/duolar-estoque/'
  }

})
