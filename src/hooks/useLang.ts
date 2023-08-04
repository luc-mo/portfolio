import { useMemo } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { locales } from 'locales'
import { getCurrentLang } from 'utils'
import { Translation, LangParams, Locales } from 'types/locales'

export interface UseLang extends Translation, LangParams {
	toggleLang: (lang: keyof Locales) => void
}

const paths: DynamicKeys = {
	// english
	projects: 'proyectos',
	// spanish
	proyectos: 'projects',
}

export const useLang = (): UseLang => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { lang: paramLang } = useParams<LangParams>()

	const lang = useMemo(() => paramLang!, [paramLang])
	const translations = useMemo(() => locales[lang], [lang])

	const toggleLang = (newLang: keyof Locales) => {
		const [currentLang, currentPath] = getCurrentLang(pathname)
		if (currentLang === newLang) return

		const newPath = currentPath && paths[currentPath]
		const newUrl = newPath ? `/${newLang}/${newPath}` : `/${newLang}`
		navigate(newUrl)
	}

	return { ...translations, lang, toggleLang }
}
