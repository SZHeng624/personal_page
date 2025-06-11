import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/personal_page/', // 匹配 GitHub Pages 子路径
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // 明确指定输出目录
    emptyOutDir: true, // 构建前清空输出目录
    sourcemap: true, // 可选：生成 sourcemap 便于调试
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // 静态资源命名规则
        entryFileNames: 'assets/[name].[hash].js', // 入口文件命名规则
      }
    }
  },
  server: {
    port: 3000, // 本地开发服务器端口
    open: true // 启动时自动打开浏览器
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> 21e9e5f438c77680382bfe89672ce975b0bb1f96
