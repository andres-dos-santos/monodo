import { SafeAreaView, Text } from 'react-native'
import { Accordion } from '@animatereactnative/accordion'

import { s } from '@/utils/s'

import { NoiseBackground } from '@/components/noise-background'
import { Week } from '@/components/week'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Home() {
	return (
		<SafeAreaView style={s`flex-1`}>
			<NoiseBackground />
			<Week />

			{/* <View style={s`absolute inset-0`}>
				<Image
					source={require('../assets/images/todo_bg.png')}
					resizeMode="repeat"
					style={s`flex-1 absolute inset-0 w-[200px]`}
				/>
			</View> */}
		</SafeAreaView>
	)
}
