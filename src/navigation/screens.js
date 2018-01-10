import { Navigation } from 'react-native-navigation'

import MainContainer from '../components/screens/Main/MainContainer.js'
import RequestSettingsContainer from '../components/screens/RequestSettings/RequestSettingsContainer.js'

export function registerScreens(store, Provider) {
    Navigation.registerComponent('Main', () => MainContainer, store, Provider)
    Navigation.registerComponent('RequestSettings', () => RequestSettingsContainer, store, Provider)
}
