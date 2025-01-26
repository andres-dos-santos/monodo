import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native'

import { s } from '@/utils/s'

export function NoiseBackground() {
	return (
		<LinearGradient
			style={s`flex-1 absolute inset-0 opacity-30`}
			colors={['#d7d7d7', '#acacac']}
			start={[0, 0]}
			end={[0, 1]}
		>
			<Image
				source={require('../assets/images/todo_bg.png')}
				resizeMode="repeat"
				style={s`w-full h-full absolute bottom-0 right-0 left-0 top-0`}
			/>
		</LinearGradient>
	)
}
