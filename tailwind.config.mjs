/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '460px',
			'sm': '640px',
			'mds': '860px',
			'md': '960px',
			'lg': '1024px',
			'xl': '1240px',
			'1.5xl': '1337px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
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
			'rainbow': '#466167',
		},
		fontFamily: {
			'display': ['BebasNeue-Regular', ...defaultTheme.fontFamily.sans],
			'body': ['NunitoSans', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			spacing: {
				10: '10px',
				15: '15px',
				20: '20px',
				24: '24px',
				26: '26px',
				30: '30px',
				40: '40px',
				44: '44px',
				50: '50px',
				70: '70px',
				100: '100px',
				104: '104px',
				120: '120px',
				125: '125px',
				140: '140px',
				160: '160px',
				200: '200px',
				210: '210px',
				220: '220px',
				230: '230px',
				250: '250px',
				320: '320px',
				350: '350px',
				360: '360px',
				415: '415px',
				430: '430px',
				450: '450px',
				500: '500px',
				560: '560px',
				704: '704px',
				850: '850px',
				890: '890px',
				1000: '1000px',
				1090: '1090px',
				1360: '1360px',
				1920: '1920px',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/images/background.svg')",
				'valorant-image': "url('/src/images/games/valorant.png')",
				'league-image': "url('/src/images/games/league.png')",
				'rocket_league-image': "url('/src/images/games/rocket_league.png')",
				'rainbow-image': "url('/src/images/games/rainbow.png')",
				'counter_strike-image': "url('/src/images/games/counter_strike.png')",
				'overwatch-image': "url('/src/images/games/overwatch.png')",
			},
			maxWidth: {
				'screen-3xl': '1920px',
			},
		},
	},
	plugins: [],
}
