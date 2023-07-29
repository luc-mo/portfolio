import { SanityClient } from 'services/sanityClient'
import type { ProjectEntity } from 'types/project'
import type { SanityProject } from 'types/sanity'

export module ProjectService {
	const PROJECTS_QUERY = `*[_type == 'project'] {
		_id,
		index,
		current,
		title,
		url,
		repoUrl,
		description_es,
		description_en
	} | order(index asc)`

	const projectParser = (project: SanityProject): ProjectEntity => {
		return {
			id: project._id,
			index: project.index,
			current: project.current ?? false,
			title: project.title,
			url: project.url ?? null,
			repoUrl: project.repoUrl,
			description: {
				es: project.description_es,
				en: project.description_en,
			},
		}
	}

	export const getProjects = async () => {
		const response = await SanityClient.fetch<SanityProject[]>(PROJECTS_QUERY)
		return response.map(projectParser)
	}
}
