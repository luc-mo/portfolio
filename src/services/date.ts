import dayjs from 'dayjs'

export module DateService {
	export const now = (format = 'YYYY-MM-DD') => {
		return dayjs().format(format)
	}
}
