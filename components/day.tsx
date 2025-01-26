import {
	localFormatter,
	weekDayFormatter,
	weekDays,
} from '@/constants/week-days'
import { s } from '@/utils/s'
import dayjs from 'dayjs'
import { Text, View } from 'react-native'
import { Todos } from './todos'

interface Props {
	day: string
}

export function Day({ day }: Props) {
	return (
		<View
			style={[
				s`h-1/5 gap-2 p-4 pl-12 border-t-2 border-black/10`,
				{ minHeight: `${100 / weekDays.length}%` },
			]}
		>
			<View>
				<Text style={s`text-4xl uppercase font-barlow-black`}>
					{dayjs(day).format(weekDayFormatter)}
				</Text>
				<Text style={s`font-barlow-regular text-gray-600`}>
					{dayjs(day).format(localFormatter)} - 24°C
				</Text>
			</View>

			<Todos day={day} />
		</View>
	)
}
