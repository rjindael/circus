import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

const svelteConfig = {
    preprocess: vitePreprocess(),
}

const tailwindConfig = {
    content: ["./ui/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    plugins: [],
}

const postcssConfig = {
    plugins: {
        tailwindcss: tailwindConfig,
        autoprefixer: {},
    },
}

export default defineConfig({
    plugins: [svelte(svelteConfig)],
    root: "ui",
    build: {
        outDir: "../app/static/build",
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: "ui/js/app.js",
        },
    },
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            host: "localhost",
        },
    },
    css: {
        postcss: postcssConfig,
    },
})
