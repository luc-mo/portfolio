import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export interface RedirectProps {
	to: string
}

export const Redirect: FC<RedirectProps> = ({ to }): null => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate(to)
	}, [navigate, to])

	return null
}
