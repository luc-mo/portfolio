import { useMemo } from 'react'

export interface UseLink {
	rel?: string
	target?: string
}

export const useLink = (external: boolean): UseLink => {
	const rel = useMemo(() => (external ? 'noopener noreferrer' : undefined), [external])
	const target = useMemo(() => (external ? '_blank' : undefined), [external])

	return { rel, target }
}
