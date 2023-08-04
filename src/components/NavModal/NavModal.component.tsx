import { FC, ReactElement, ReactNode } from 'react'
import * as S from './NavModal.styles'
import { Divider } from 'styles/utils'

export interface NavModalItem {
	children: ReactNode
	onClick: () => void
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
					<>
						<S.NavModalItem onClick={item.onClick}>
							{item.children}
						</S.NavModalItem>
						{!isLast && <Divider />}
					</>
				)
			})}
		</S.NavModal>
	)
}
