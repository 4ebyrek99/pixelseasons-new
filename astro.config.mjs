// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PixelSeasons',
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			logo: {
				src: './public/pixelseasons-logo.png',
				alt: 'PixelSeasons',
				replacesTitle: true,
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '🏠 Главная',
					link: '/',
				},
				{
					label: '📖 Начало работы',
					items: [
						{ label: '🚀 Как начать играть', slug: 'guides/getting-started' },
						{ label: '📋 Правила сервера', slug: 'guides/rules' },
						{ label: '❓ Частые вопросы (FAQ)', slug: 'guides/faq' },
					],
				},
				{
					label: '🔌 Плагины',
					items: [
						{ label: '🍂 RealisticSeasons', slug: 'plugins/realistic-seasons' },
						{ label: '🏰 Lands', slug: 'plugins/lands' },
					],
				},
				{
					label: '📚 Справочник',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
