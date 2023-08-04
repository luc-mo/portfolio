import { FC, ReactElement } from 'react'
import * as S from './Navbar.styles'

import { useLang } from 'hooks/useLang'
import { useThemeStore } from 'store/themeStore'

import { NavLink } from 'components/NavLink'
import { Github } from 'assets/Github'
import { LinkedIn } from 'assets/LinkedIn'
import { Moon } from 'assets/Moon'
import { Sun } from 'assets/Sun'

export const Navbar: FC = (): ReactElement => {
	const { theme, toggleTheme } = useThemeStore()
	const { lang, routes, navbar } = useLang()

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
			<S.NavItem onClick={toggleTheme}>
				{theme.isDark ? <Sun /> : <Moon />}
			</S.NavItem>
		</S.Navbar>
	)
}
