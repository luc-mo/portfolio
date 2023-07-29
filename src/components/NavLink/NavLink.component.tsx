import { FC, ReactElement } from 'react'
import { useLink } from 'hooks'
import * as S from './NavLink.styles'

export const NavLink: FC<NavLinkProps> = ({
	children,
	to,
	external = false,
	...rest
}): ReactElement => {
	const { target, rel } = useLink(external)

	return (
		<S.NavLink to={to} target={target} rel={rel} {...rest}>
			{children}
		</S.NavLink>
	)
}
