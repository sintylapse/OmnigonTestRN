import { Navigation } from 'react-native-navigation'

import MainContainer from '../components/screens/Main/MainContainer.js'

export function registerScreens(store, Provider) {
    Navigation.registerComponent('Main', () => MainContainer, store, Provider)
}
