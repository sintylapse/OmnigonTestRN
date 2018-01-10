import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import { registerScreens } from './navigation/screens.js'
import store from './store'

registerScreens(store, Provider)

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Main',
		title: 'OmnigonTestRN',
	},
})
