import { FC, ReactElement } from 'react'
import * as S from './ProjectGroup.styles'

import { H2 } from 'styles/titles'
import { Project } from 'components/Project'
import { ProjectEntity } from 'types/project'

export interface ProjectGroupProps {
	title: string
	projects: ProjectEntity[]
}

export const ProjectGroup: FC<ProjectGroupProps> = ({
	title,
	projects,
}): ReactElement => {
	return (
		<S.ProjectGroup>
			<H2>{title}</H2>
			<S.ProjectsContainer>
				{projects.map((project) => (
					<Project key={project.id} {...project} />
				))}
			</S.ProjectsContainer>
		</S.ProjectGroup>
	)
}
