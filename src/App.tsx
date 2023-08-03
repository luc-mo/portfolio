import { FC, ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import { Fractal } from 'components/Fractal'
import { Navbar } from 'components/Navbar'
import { Home } from 'pages/Home'
import { Projects } from 'pages/Projects'
import { useThemeStore } from 'store/themeStore'

export const App: FC = (): ReactElement => {
	const { theme } = useThemeStore()

	return (
		<ThemeProvider theme={theme}>
			<Root>
				<Fractal />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/proyectos' element={<Projects />} />
				</Routes>
			</Root>
		</ThemeProvider>
	)
}

const Root = styled.div`
	position: relative;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.current.bg};
	transition: background-color 0.3s ease-in-out;
	z-index: 0;
`
