import { Locales } from 'types/locales'

export type GetCurrentLang = [keyof Locales, keyof DynamicKeys | undefined]

export const getCurrentLang = (pathname: string) => {
	return pathname.split('/').filter(Boolean) as GetCurrentLang
}
