import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {polyfillNode} from "esbuild-plugin-polyfill-node";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), polyfillNode({globals: {buffer: true, process: false}}), tsconfigPaths(),],
    build: {
        outDir: "./build",
        sourcemap: true,
        target: "esnext",
        reportCompressedSize: true,
    },
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
        "process.env": {},
    },
    clearScreen: false,
    server: {
        port: 3001,
    },
    test: {
        globals: true,
        css: false,
        environment: "happy-dom",
        setupFiles: ["./src/setupTests.ts"],
        include: ["**/*.test.?(c|m)[jt]s?(x)"],
        reporters: ["default", "html"],
    },
})
