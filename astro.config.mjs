// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PixelSeasons',
			logo: {
				src: './public/pixelseasons-logo.png',
				alt: 'PixelSeasons',
			},
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/pixelseasons' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pixelseasons' },
			],
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
						{ label: '🏰 Lands — Земли', slug: 'plugins/lands' },
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
