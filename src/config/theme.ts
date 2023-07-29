import { css } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
	isDark: false,
	light: {
		bg: '#ffffff',
		title: '#000000',
		text: '#555555',
		url: '#000000',
		urlBorder: 'rgba(0, 0, 0, 0.3)',
		navUrl: '#374151',
		iconStroke: '#374151',
		iconFill: '#374151',
		projectBg: '#f7f7f7',
	},
	dark: {
		bg: '#000000',
		title: '#ffffff',
		text: '#bbbbbb',
		url: '#ffffff',
		urlBorder: 'rgba(255, 255, 255, 0.5)',
		navUrl: '#e5e7eb',
		iconStroke: '#e5e7eb',
		iconFill: '#e5e7eb',
		projectBg: '#121212',
	},
	get current() {
		return this.isDark ? this.dark : this.light
	},
	utils: {
		flexCenter: css`
			display: flex;
      justify-content: center;
      align-items: center;
    `,
		inlineFlexCenter: css`
			display: inline-flex;
      justify-content: center;
      align-items: center;
		`,
	},
}
