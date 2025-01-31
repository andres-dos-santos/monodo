import { s } from '@/utils/s'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface Props {
	content: string
	done: boolean
	id: number
}

export function Todo({ content, done }: Props) {
	return (
		<View style={s`flex-row items-center gap-1`}>
			<View
				style={s`w-4 h-4 rounded-sm items-center justify-center border ${done ? 'bg-selected border-selected' : 'bg-transparent border-gray-700'}`}
			>
				{done && <Ionicons name="checkmark" size={12} color="#FFF" />}
			</View>
			<Text
				style={s`font-barlow-regular ${done ? 'line-through decoration-selected' : ''}`}
			>
				{content}
			</Text>
		</View>
	)
}
