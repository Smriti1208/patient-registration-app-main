// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['@electric-sql/pglite'],
//   },
// });
// vite.config.js



// vite.config.js
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['fs', 'path'] // add other Node modules as needed
    })
  ]
});

// vite.config.ts
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     target: 'esnext'
//   }
// })




// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     target: 'esnext'
//   },
//   build: {
//     target: 'esnext'
//   }
// })


