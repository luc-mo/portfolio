import { FC, ReactElement } from 'react'
import { useLink } from 'hooks'
import * as S from './Link.styles'

export const Link: FC<LinkProps> = ({
	children,
	to,
	external = false,
	...rest
}): ReactElement => {
	const { target, rel } = useLink(external)

	return (
		<S.Link to={to} target={target} rel={rel} {...rest}>
			{children}
		</S.Link>
	)
}
