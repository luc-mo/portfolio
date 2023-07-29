import { create } from 'zustand'
import { ProjectEntity } from 'types/project'

export interface ProjectStore {
	// States
	loading: boolean
	projects: ProjectEntity[]

	// Actions
	setProjects: (projects: ProjectEntity[]) => void
}

export const useProjectStore = create<ProjectStore>((set) => ({
	// States
	loading: true,
	projects: [],

	// Actions
	setProjects: (projects) => set({ projects, loading: false }),
}))
