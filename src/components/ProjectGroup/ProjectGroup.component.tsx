import { FC, ReactElement } from 'react'
import * as S from './ProjectGroup.styles'

import { H2 } from 'styles/titles'
import { Project } from 'components/Project'
import { ProjectEntity } from 'types/project'

export interface ProjectGroupProps {
	title: string
	projects: ProjectEntity[]
	loading: boolean
}

export const ProjectGroup: FC<ProjectGroupProps> = ({
	title,
	projects,
	loading,
}): ReactElement => {
	return (
		<S.ProjectGroup>
			<H2>{title}</H2>
			<S.ProjectsContainer>
				{loading ? <S.Loading /> : projects.map(renderProject)}
			</S.ProjectsContainer>
		</S.ProjectGroup>
	)
}

const renderProject = (project: ProjectEntity) => (
	<Project key={project.id} {...project} />
)
