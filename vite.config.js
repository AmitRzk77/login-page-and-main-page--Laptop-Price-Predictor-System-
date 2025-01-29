import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/login-page-and-main-page--Laptop-Price-Predictor-System/',  // Add this line
});