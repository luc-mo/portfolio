import { createClient } from '@sanity/client'
import { DateService } from 'services/date'

export module SanityClient {
	export const client = createClient({
		projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
		dataset: import.meta.env.VITE_SANITY_DATASET,
		apiVersion: DateService.now(),
		useCdn: true,
	})

	export const fetch = <T = any>(query: string) => {
		return client.fetch<T>(query)
	}
}
