import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@chakra-ui/icons': '@chakra-ui/icons/dist/esm',
  //   },
  // },
})
