import { useEffect } from 'react'

type ListenerType = keyof WindowEventMap
type ListenerCallback = () => void

export const useGlobalListener = (
	listener: ListenerType,
	cb: ListenerCallback
) => {
	useEffect(() => {
		window.addEventListener(listener, cb)
		return () => {
			window.removeEventListener(listener, cb)
		}
	}, [cb])
}
