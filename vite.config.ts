import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // Only import lovable-tagger if it exists
  const plugins = [
    react()
  ];

  // Add lovable-tagger only in development mode
  if (mode === 'development') {
    try {
      const { componentTagger } = require('lovable-tagger');
      plugins.push(componentTagger());
    } catch (e) {
      console.log('lovable-tagger not found, skipping...');
    }
  }
  
  return {
    base: env.NODE_ENV === 'production' ? '/' : '/',
    
    server: {
      host: "::",
      port: 8080,
    },
    
    plugins,
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.BASE_URL': JSON.stringify(env.NODE_ENV === 'production' ? '/' : '/')
    }
  };
});
