import { resolve } from 'path';
import { defineConfig } from 'vite';
import clean from 'vite-plugin-clean';

export default defineConfig({
    root: 'src',
    base: './',
    build: {
        outDir: '../dist',
        minify: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                main: resolve('src', 'index.html'),
                giftPage: resolve('src', 'gifts-page.html'),
            },
        },
    },
    plugins: [
        clean({
            targets: ['../dist'],
        }),
    ],
    css: {
        minify: false,
        devSourcemap: true,
    },
    assetsInclude: ['**/*.js'],
});
