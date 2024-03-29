// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                Belanosima: [400, 600],
                Nunito: "400..700"
            },
            outputDir: 'assets'
        }]
    ],
    devtools: {enabled: true},
})
