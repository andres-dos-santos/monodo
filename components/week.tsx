import { View } from 'react-native'

import { weekDays } from '@/constants/week-days'

import { Day } from './day'

export function Week() {
	return (
		<View>
			{weekDays.map((day) => (
				<Day day={day} key={`day-${day}`} />
			))}
		</View>
	)
}
