import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(weekday)
dayjs.extend(isoWeek)

export type WeekDay = (typeof weekDays)[number]

export const globalFormatter = 'YYYY-MM-DD'
export const localFormatter = 'MMMM, DD YYYY - h:mma'
export const weekDayFormatter = 'dddd'

export const weekDays = [...Array(5).keys()].map((key) => {
	return dayjs().startOf('isoWeek').add(key, 'day').format(globalFormatter)
})
