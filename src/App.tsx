import { FC, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Navbar } from 'components/Navbar'
import { Home } from 'pages/Home'
import { Projects } from 'pages/Projects'

export const App: FC = (): ReactElement => {
	return (
		<Root>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/proyectos' element={<Projects />} />
			</Routes>
		</Root>
	)
}

const Root = styled.div`
	min-height: 100vh;
	background-color: ${({ theme }) => theme.current.bg};
`
