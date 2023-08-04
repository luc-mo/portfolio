import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { locales } from 'locales'
import { Locales } from 'types/locales'

export type LangParams = {
	lang: keyof Locales
}

export const useLang = () => {
	const { lang: paramLang } = useParams<LangParams>()
	const lang = useMemo(() => paramLang!, [paramLang])
	const translations = useMemo(() => locales[lang], [lang])

	return { ...translations, lang }
}
