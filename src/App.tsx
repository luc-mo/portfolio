import { FC, ReactElement } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { useThemeStore } from 'store/themeStore'
import { Fractal } from 'components/Fractal'
import { AppRoutes } from './Routes'

export const App: FC = (): ReactElement => {
	const { theme } = useThemeStore()

	return (
		<ThemeProvider theme={theme}>
			<Root>
				<Fractal />
				<AppRoutes />
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
