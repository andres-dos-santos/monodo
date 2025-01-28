import {
	localFormatter,
	weekDayFormatter,
	weekDays,
} from '@/constants/week-days'
import { s } from '@/utils/s'
import dayjs from 'dayjs'
import { Text, useWindowDimensions, View } from 'react-native'
import { Accordion } from '@animatereactnative/accordion'

import { Todos } from './todos'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
	day: string
}

export function Day({ day }: Props) {
	const { height } = useWindowDimensions()
	const { top, bottom } = useSafeAreaInsets()

	return (
		<Accordion.Accordion
			isOpen={dayjs(day).isSame(dayjs(), 'day')}
			style={[
				s`gap-2 pt-4 pr-4 pl-12 border-t-2 border-black/10`,
				{ minHeight: (height - top - bottom) / weekDays.length },
			]}
		>
			<Accordion.Header>
				<Text style={s`text-4xl uppercase font-barlow-black`}>
					{dayjs(day).format(weekDayFormatter)}
				</Text>
				<Text style={s`font-barlow-regular text-gray-600`}>
					{dayjs(day).format(localFormatter)} - 24°C
				</Text>
			</Accordion.Header>

			<Accordion.Expanded>
				<Todos day={day} />
			</Accordion.Expanded>
		</Accordion.Accordion>
	)
}
