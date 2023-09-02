import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import { SITE } from './src/config.mjs';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docsss',
			logo: {
				// src: './src/assets/images/finopsguide-547x127.png',
				light: './src/assets/images/finopsguide-547x127.png',
				dark: './src/assets/images/finopsguide-547x127-inverted.png',
				replacesTitle: true,
				alt: 'Finops Guide',
			},
			social: {
				github: 'https://github.com/finopsguide/finopsguide.com',
			},
			editLink: {
				baseUrl: 'https://github.com/withastro/starlight/edit/main/',
			},
			lastUpdated: true,
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'FinopsGuide',
					items: [
						{ label: 'Contact Form', link: '/contact' },
						{ label: 'Write for Us', link: '/write' },
						{ label: 'Suggest a topic', link: '/suggest' },
					],
				},
				{
					label: 'Terms',
					items: [
						{ label: 'Privacy Policy', link: '/privacy-policy' },
						{ label: 'Terms of Service', link: '/tos' },
					],
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	// image: { service: { entrypoint: 'astro/assets/services/sharp' } },
	experimental: {
    assets: true
  },
});
