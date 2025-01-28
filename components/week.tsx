import { ScrollView, View } from 'react-native'

import { weekDays } from '@/constants/week-days'

import { Day } from './day'
import Animated, { LinearTransition } from 'react-native-reanimated'

export function Week() {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View>
				{weekDays.map((day) => (
					<Day day={day} key={`day-${day}`} />
				))}
			</View>
		</ScrollView>
	)
}
