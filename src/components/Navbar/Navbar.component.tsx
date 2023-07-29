import { FC, ReactElement } from 'react'
import * as S from './Navbar.styles'

import { NavLink } from 'components/NavLink'
import { Github } from 'assets/Github'
import { LinkedIn } from 'assets/LinkedIn'

export const Navbar: FC = (): ReactElement => {
	return (
		<S.Navbar>
			<div />
			<S.NavbarList>
				<NavLink title='Inicio' to='/'>
					Inicio
				</NavLink>
				<NavLink title='Proyectos' to='/proyectos'>
					Proyectos
				</NavLink>
				<NavLink title='Blog' to='/blog'>
					Blog
				</NavLink>
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
			</S.NavbarList>
		</S.Navbar>
	)
}
