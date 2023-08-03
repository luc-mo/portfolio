import { FC, ReactElement } from 'react'
import * as S from './Projects.styles'

import { H1 } from 'styles/titles'
import { ProjectGroup } from 'components/ProjectGroup'
import { useProjects } from 'hooks'

export const Projects: FC = (): ReactElement => {
	const { current, others, loading } = useProjects()

	return (
		<S.Projects>
			<H1>Proyectos</H1>
			<ProjectGroup
				title='Enfoque actual'
				projects={current}
				loading={loading}
			/>
			<ProjectGroup
				title='Otros proyectos'
				projects={others}
				loading={loading}
			/>
		</S.Projects>
	)
}
