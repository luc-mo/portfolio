export interface Description {
	es: string
	en: string
}

export interface ProjectEntity {
	id: string
	index: number
	current: boolean
	title: string
	url: string | null
	repoUrl: string
	description: Description
}
