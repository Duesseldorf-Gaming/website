/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'primary': '#DDA169',
			'white': '#F3F3F3',
			'gray-100': '#8C8C8C',
			'gray-200': '#444444',
			'gray-300': '#2C2C2C',
			'gray-400': '#1A1A1A',
			'gray-500': '#010101',
			'valorant': '#FF4655',
			'league': '#C89B3C',
			'rocket': '#016FF2',
			'overwatch': '#ED6516',
		},
		fontFamily: {
			'display': ['BebasNeue-Regular', ...defaultTheme.fontFamily.sans],
			'body': ['NunitoSans', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			backgroundImage: {
				'hero-pattern': "url('./src/images/background.svg')",
				'valorant-image': "url('./src/images/games/valorant.png')",
				'league-image': "url('./src/images/games/league.png')",
				'rocket_league-image': "url('./src/images/games/rocket_league.png')",
				'rainbow-image': "url('./src/images/games/rainbow.png')",
				'counter_strike-image': "url('./src/images/games/counter_strike.png')",
				'overwatch-image': "url('./src/images/games/overwatch.png')",
			},
			maxWidth: {
				'screen-3xl': '1920px',
			},
		},
	},
	plugins: [],
}
