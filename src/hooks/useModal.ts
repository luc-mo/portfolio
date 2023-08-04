import { MouseEvent, useState } from 'react'

export interface UseModal<T> {
	isOpen: boolean
	open: () => void
	close: () => void
	toggle: (event: MouseEvent<T>) => void
}

export const useModal = <T = HTMLElement>(): UseModal<T> => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const open = () => {
		setIsOpen(true)
	}

	const close = () => {
		setIsOpen(false)
	}

	const toggle = (event: MouseEvent<T>) => {
		event.stopPropagation()
		setIsOpen((prev) => !prev)
	}

	return {
		isOpen,
		open,
		close,
		toggle,
	}
}
