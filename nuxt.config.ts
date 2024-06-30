// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                "Prompt": {
                    wght: [200, 300, 400, 500, 600, 700, 800],
                    ital: [200, 300, 400, 500, 600, 700, 800]
                }
            }
        }]
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
