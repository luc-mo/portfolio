import { FC, ReactElement } from 'react'
import * as S from './Project.styles'

import { Github } from 'assets/Github'
import { Url } from 'assets/Url'
import { ProjectEntity } from 'types/project'
import { LangParams } from 'types/locales'

export type ProjectProps = ProjectEntity & LangParams

export const Project: FC<ProjectProps> = ({
	title,
	description,
	url,
	repoUrl,
	lang,
}): ReactElement => {
	return (
		<S.Project>
			<S.Header>
				<S.Title>{title}</S.Title>
				<S.LinksContainer>
					<S.Link to={repoUrl} external>
						<Github />
					</S.Link>
					{url && (
						<S.Link to={url} external>
							<Url />
						</S.Link>
					)}
				</S.LinksContainer>
			</S.Header>
			<S.Description>{description[lang]}</S.Description>
		</S.Project>
	)
}
