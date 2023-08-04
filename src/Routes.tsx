import { FC, ReactElement } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { LangParams } from 'types/locales'

import { Redirect } from 'components/Redirect'
import { Navbar } from 'components/Navbar'
import { Home } from 'pages/Home'
import { Projects } from 'pages/Projects'

export const AppRoutes: FC = (): ReactElement => {
	return (
		<Routes>
			<Route path='/' element={<Redirect to='/es' />} />
			<Route path='/:lang/*' element={<LangRoutes />} />
		</Routes>
	)
}

const LangRoutes: FC = (): ReactElement => {
	const { lang } = useParams<LangParams>()

	const isSpanish = lang === 'es'
	const isEnglish = lang === 'en'

	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				{isEnglish && (
					<Route path='proyectos' element={<Redirect to='/es/proyectos' />} />
				)}
				{isSpanish && (
					<Route path='projects' element={<Redirect to='/en/projects' />} />
				)}
				{isSpanish && <Route path='proyectos' element={<Projects />} />}
				{isEnglish && <Route path='projects' element={<Projects />} />}
			</Routes>
		</>
	)
}
