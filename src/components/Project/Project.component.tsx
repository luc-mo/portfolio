import { FC, ReactElement } from 'react'
import * as S from './Project.styles'

import { Github } from 'assets/Github'
import { Url } from 'assets/Url'
import { ProjectEntity } from 'types/project'

export const Project: FC<ProjectEntity> = ({
	title,
	description,
	url,
	repoUrl,
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
			<S.Description>{description.es}</S.Description>
		</S.Project>
	)
}
