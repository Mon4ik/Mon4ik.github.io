// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                "Playfair Display": {
                    wght: '400..900',
                    ital: '400..700',
                }
            },
            outputDir: 'assets'
        }]
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
