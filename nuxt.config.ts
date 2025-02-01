// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	css: ['~/assets/styles/main.scss'],

	modules: ['@nuxtjs/google-fonts', '@nuxt/icon', '@nuxt/image'],

	googleFonts: {
		families: {
			Montserrat: true,
		},
	},

	image: {
		domains: ['https://cdn.dummyjson.com'],
	},
});
