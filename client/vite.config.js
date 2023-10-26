import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
	outDir: 'dist', // Directorio de salida para los archivos de producción
	assetsDir: '', // Directorio de activos
	},
	base: 'https://menu-final-production.up.railway.app/', // Ruta base para el despliegue en producción (ajusta según tu necesidad)
  })
