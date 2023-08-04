export module LocalStorageService {
	type Theme = 'light' | 'dark'

	const get = (key: string) => localStorage.getItem(key)
	const set = (key: string, value: string) => localStorage.setItem(key, value)

	// Theme
	export const getTheme = () => get('theme')
	export const setTheme = (theme: Theme) => set('theme', theme)

	// Theme utils
	export const isDarkTheme = () => getTheme() === 'dark'
	export const toggleTheme = (isDark?: boolean) =>
		setTheme(isDark ?? isDarkTheme() ? 'light' : 'dark')
}
