import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

export default defineConfig({
  
  build: {
    outDir: "build",
  },
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(projectRootDir, 'src')},
      { find: '@assets', replacement: resolve(projectRootDir, 'src/assets')},
      { find: '@common', replacement: resolve(projectRootDir, 'src/common')},
      { find: '@pages', replacement: resolve(projectRootDir, 'src/pages')},
    ]
  },
  plugins: [react()],
});