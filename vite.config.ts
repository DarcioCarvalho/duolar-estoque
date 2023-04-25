import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
    appType: 'mpa',  
    plugins: [react()],
    base: mode === "development" ? '' : '/duolar-estoque/'
  }

})
