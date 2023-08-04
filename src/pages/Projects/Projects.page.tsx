import { FC, ReactElement } from 'react'
import * as S from './Projects.styles'

import { useProjects, useLang } from 'hooks'
import { H1 } from 'styles/titles'
import { ProjectGroup } from 'components/ProjectGroup'

export const Projects: FC = (): ReactElement => {
	const { current, others, loading } = useProjects()
	const { projects } = useLang()

	return (
		<S.Projects>
			<H1>{projects.title}</H1>
			<ProjectGroup
				title={projects.current}
				projects={current}
				loading={loading}
			/>
			<ProjectGroup
				title={projects.others}
				projects={others}
				loading={loading}
			/>
		</S.Projects>
	)
}
