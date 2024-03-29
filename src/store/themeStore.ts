import { create } from 'zustand'
import { css, type DefaultTheme, type Themes } from 'styled-components'
import { LocalStorageService } from 'services/localStorage'

export const lightTheme: Themes = {
	bg: '#ffffff',
	title: '#000000',
	text: '#555555',
	url: '#000000',
	urlBorder: 'rgba(0, 0, 0, 0.3)',
	navUrl: '#374151',
	iconStroke: '#374151',
	iconFill: '#374151',
	projectBg: '#f2f2f2',
	modalBg: '#f2f2f2',
	modalBgHover: '#e9e9e9',
	divider: '#C4C4C4',
	loadingBorder: '#000000',
}

export const darkTheme: Themes = {
	bg: '#000000',
	title: '#ffffff',
	text: '#bbbbbb',
	url: '#ffffff',
	urlBorder: 'rgba(255, 255, 255, 0.5)',
	navUrl: '#e5e7eb',
	iconStroke: '#e5e7eb',
	iconFill: '#e5e7eb',
	projectBg: '#161616',
	modalBg: '#191919',
	modalBgHover: '#1d1d1d',
	divider: '#484848',
	loadingBorder: '#ffffff',
}

export const defaultTheme: DefaultTheme = {
	isDark: LocalStorageService.isDarkTheme(),
	light: lightTheme,
	dark: darkTheme,
	current: LocalStorageService.isDarkTheme() ? darkTheme : lightTheme,
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

export interface ThemeStore {
	// States
	theme: DefaultTheme

	// Actions
	toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
	// States
	theme: defaultTheme,

	// Actions
	toggleTheme: () =>
		set(({ theme }) => {
			LocalStorageService.toggleTheme(theme.isDark)
			return {
				theme: {
					...theme,
					isDark: !theme.isDark,
					current: theme.isDark ? theme.light : theme.dark,
				},
			}
		}),
}))
