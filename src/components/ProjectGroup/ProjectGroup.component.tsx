import { FC, ReactElement, useMemo } from 'react'
import * as S from './ProjectGroup.styles'

import { useLang } from 'hooks'
import { H2 } from 'styles/titles'
import { Project } from 'components/Project'
import { ProjectEntity } from 'types/project'
import { Locales } from 'types/locales'

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
	const { lang } = useLang()
	const projectRender = useMemo(() => renderProject(lang), [lang])

	return (
		<S.ProjectGroup>
			<H2>{title}</H2>
			<S.ProjectsContainer>
				{loading ? <S.Loading /> : projects.map(projectRender)}
			</S.ProjectsContainer>
		</S.ProjectGroup>
	)
}

const renderProject = (lang: keyof Locales) => (project: ProjectEntity) =>
	<Project key={project.id} lang={lang} {...project} />
