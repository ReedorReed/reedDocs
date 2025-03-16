// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Reed's Dev Notes",
	tagline: 'My Journey Through Web Development',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://github.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/reedDocs/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'ReedorReed', // Usually your GitHub org/user name.
	projectName: 'reedDocs', // Usually your repo name.
	deploymentBranch: 'gh-pages',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					routeBasePath: '/'
					//editUrl: 'https://github.com/ReedorReed'
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//editUrl: 'https://github.com/ReedorReed',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn'
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'ReedsDocs',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg'
				},
				items: [
					// {
					// 	type: 'docSidebar',
					// 	sidebarId: 'tutorialSidebar',
					// 	position: 'left',
					// 	label: 'Docs'
					// },
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/ReedorReed/reedDocs',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Documentation',
								to: '/'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/in/christiansreed/'
							},
							{
								label: 'Instagram',
								href: 'https://www.instagram.com/reedorreed/'
							},
							{
								label: 'BlueSky',
								href: 'https://bsky.app/profile/reedorreed.bsky.social'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/ReedorReed'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} Christian Reed.`
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula
			}
		})
};

export default config;
