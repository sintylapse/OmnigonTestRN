import { AsyncStorage } from 'react-native'
import { persistCombineReducers, createTransform } from 'redux-persist'
import createFilter from 'redux-persist-transform-filter'

import globalReducer from './globalReducer.js'

// AsyncStorage.clear()

const saveSubsetGlobal = createFilter('globalReducer', [
    'feedUrl', 'numberOfPostsToDisplay', 'updateInterval'
])

const config = {
    key: 'OmnigonTestRN',
    whitelist: ['globalReducer'],
    storage: AsyncStorage,
    transforms: [
        saveSubsetGlobal,
    ],
}

const rootReducer = persistCombineReducers(config, {
    globalReducer,
})

export default rootReducer
