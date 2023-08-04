import type { css } from 'styled-components'
import 'styled-components'

declare module 'styled-components' {
	export interface Themes {
		bg: string
		title: string
		text: string
		url: string
		urlBorder: string
		navUrl: string
		iconStroke: string
		iconFill: string
		projectBg: string
		modalBg: string
		modalBgHover: string
		divider: string
		loadingBorder: string
	}

	export interface Utils {
		flexCenter: ReturnType<typeof css>
		inlineFlexCenter: ReturnType<typeof css>
	}

	export interface DefaultTheme {
		isDark: boolean
		light: Themes
		dark: Themes
		current: Themes
		utils: Utils
	}
}
