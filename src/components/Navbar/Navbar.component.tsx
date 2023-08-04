import { FC, ReactElement, useMemo } from 'react'
import * as S from './Navbar.styles'

import { useLang, useGlobalListener, useModal } from 'hooks'
import { useThemeStore } from 'store/themeStore'

import { NavLink } from 'components/NavLink'
import { NavModal } from 'components/NavModal'

import { Github } from 'assets/Github'
import { LinkedIn } from 'assets/LinkedIn'
import { Moon } from 'assets/Moon'
import { Sun } from 'assets/Sun'
import { Language } from 'assets/Language'

export const Navbar: FC = (): ReactElement => {
	const { theme, toggleTheme } = useThemeStore()
	const { lang, langs, routes, navbar, toggleLang } = useLang()
	const { isOpen, close, toggle } = useModal<HTMLUListElement>()

	const items = useMemo(
		() =>
			langs.map(({ name, lang: value }) => {
				const onClick = () => toggleLang(value)
				const active = lang === value
				return { children: name, active, onClick }
			}),
		[lang, langs, toggleLang]
	)

	useGlobalListener('click', close)

	return (
		<S.Navbar>
			<NavLink title='Inicio' to={`/${lang}`}>
				{navbar.home}
			</NavLink>
			<NavLink title='Proyectos' to={`/${lang}/${routes.projects}`}>
				{navbar.projects}
			</NavLink>
			{/* <NavLink title='Blog' to={`/${lang}/blog`}>
				Blog
			</NavLink> */}
			<NavLink title='Github' to='https://github.com/luc-mo' external>
				<Github />
			</NavLink>
			<NavLink
				title='LinkedIn'
				to='https://www.linkedin.com/in/lucmoralesr'
				external
			>
				<LinkedIn />
			</NavLink>
			<S.NavItem onClick={toggle}>
				<Language />
				{isOpen && <NavModal items={items} />}
			</S.NavItem>
			<S.NavItem onClick={toggleTheme}>
				{theme.isDark ? <Sun /> : <Moon />}
			</S.NavItem>
		</S.Navbar>
	)
}
