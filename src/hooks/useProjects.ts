import { useEffect, useMemo } from 'react'
import { ProjectService } from 'services/project'
import { useProjectStore } from 'store/projectStore'
import { ProjectEntity } from 'types/project'

export interface UseProjects {
	current: ProjectEntity[]
	others: ProjectEntity[]
}

export const useProjects = () => {
	const { projects, loading, setProjects } = useProjectStore()

	const current = useMemo(
		() => projects.filter((project) => project.current),
		[projects]
	)
	const others = useMemo(
		() => projects.filter((project) => !project.current),
		[projects]
	)

	useEffect(() => {
		if (!loading) return
		ProjectService.getProjects().then(setProjects).catch(console.error)
	}, [loading])

	return { current, others }
}
