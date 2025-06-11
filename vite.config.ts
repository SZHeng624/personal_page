import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/personal_page/', // 确保与GitHub仓库名一致
  
  // 关键修复配置
  resolve: {
    alias: {
      '@': '/src' // 添加路径别名方便引用
    }
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false, // 生产环境建议关闭
    
    // 增强的rollup配置
    rollupOptions: {
      input: {
        main: './index.html' // 显式指定HTML入口
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // 优化资源命名
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    },
    
    // 构建优化
    minify: 'terser', // 启用代码压缩
    cssCodeSplit: true // CSS代码分割
  },

  server: {
    port: 3000,
    open: true,
    strictPort: true // 端口占用时直接报错
  },

  // 预构建排除
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom'] // 显式包含核心依赖
  }
});