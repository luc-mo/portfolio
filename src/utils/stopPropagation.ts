import { MouseEvent } from 'react'

type VoidFunction = () => void

export const stopPropagation = (fn: VoidFunction) => (event: MouseEvent) => {
	event.stopPropagation()
	fn()
}
