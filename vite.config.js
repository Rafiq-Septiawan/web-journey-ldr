import { defineConfig } from 'vite';

export default defineConfig({
  // Harus sesuai nama repository GitHub untuk GitHub Pages
  base: '/web-journey-ldr/',

  build: {
    outDir: 'dist',
    // Agar semua asset masuk ke folder 'assets/' dalam dist
    assetsDir: 'assets',
    // Pastikan sourcemap tidak ikut ter-upload ke production
    sourcemap: false,
  }
});

