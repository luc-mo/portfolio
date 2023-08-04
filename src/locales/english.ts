import type { Translation } from 'types/locales'

export const english: Translation = {
	langs: [
		{ name: 'English', lang: 'en' },
		{ name: 'Spanish', lang: 'es' },
	],
	navbar: {
		home: 'Home',
		projects: 'Projects',
	},
	home: {
		description: "Hi, I'm Luciano Morales, software developer.",
		work: 'I am currently working for a Costa Rican company called',
		technologies: 'developing web applications with',
		leisure:
			'During my free time I actively participate in a community of developers and designers, making',
		events:
			'projects and participating in a variety of workshops, talks and events.',
		hobbies:
			'Outside the programming world, I love music and practice a variety of instruments, mainly guitar and piano.',
		media: 'My social media',
	},
	projects: {
		title: 'Projects',
		current: 'Current focus',
		others: 'Other projects',
	},
	utils: {
		and: 'and',
	},
	routes: {
		projects: 'projects',
	},
}
