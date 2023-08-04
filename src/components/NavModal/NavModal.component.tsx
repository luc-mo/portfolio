import { FC, Fragment, ReactElement, ReactNode } from 'react'
import { Divider } from 'styles/utils'
import * as S from './NavModal.styles'

export interface NavModalItem {
	children: ReactNode
	onClick: () => void
	active: boolean
}

export interface NavModalProps {
	items: NavModalItem[]
}

export const NavModal: FC<NavModalProps> = ({ items }): ReactElement => {
	return (
		<S.NavModal>
			{items.map((item: NavModalItem, index: number) => {
				const isLast = index === items.length - 1
				return (
					<Fragment key={index}>
						<S.NavModalItem onClick={item.onClick} $active={item.active}>
							{item.children}
						</S.NavModalItem>
						{!isLast && <Divider />}
					</Fragment>
				)
			})}
		</S.NavModal>
	)
}
