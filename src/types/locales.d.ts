export interface Lang {
	and: string
	navbar: {
		home: string
		projects: string
	}
	home: {
		description: string
		work: string
		technologies: string
		leisure: string
		events: string
		hobbies: string
		media: string
	}
	projects: {
		title: string
		current: string
		others: string
	}
	routes: {
		projects: string
	}
}

export interface Locales {
	es: Lang
	en: Lang
}

export type LangParams = {
	lang: keyof Locales
}
