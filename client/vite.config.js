// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import * as path from 'path';


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve:{
//     alias : {
//       "@" : path.resolve(__dirname, "./src"),
//     },
//   }  ,
// });
import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server : {
    port : 5173,
    host : true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
//import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     loader: 'jsx',
//     include: /src\/.*\.jsx?$/, // Include .js and .jsx files
//     exclude: [],
//   },
//   optimizeDeps: {
//     esbuildOptions: {
//       loader: {
//         '.js': 'jsx',
//       },
//     },
//   },
// })