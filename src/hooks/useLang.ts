import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { locales } from 'locales'
import { Translation, LangParams } from 'types/locales'

export type UseLang = Translation & LangParams

export const useLang = (): UseLang => {
	const { lang: paramLang } = useParams<LangParams>()
	const lang = useMemo(() => paramLang!, [paramLang])
	const translations = useMemo(() => locales[lang], [lang])

	return { ...translations, lang }
}
