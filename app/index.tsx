import { SafeAreaView, Text, View } from 'react-native'

import { s } from '@/utils/s'

export default function Home() {
	return (
		<SafeAreaView style={s`flex-1 items-center justify-center`}>
			<Text style={s`text-2xl font-regular text-selected`}>Home</Text>
		</SafeAreaView>
	)
}
