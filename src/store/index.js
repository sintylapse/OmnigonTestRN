/* eslint-disable no-undef */
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Reactotron from 'reactotron-react-native'
import { persistStore } from 'redux-persist'

import rootReducer from '../reducers'

let middleware = [thunk]
let storeCreator

if (__DEV__) {
	middleware = [...middleware, logger]
	storeCreator = Reactotron.createStore
} else {
	middleware = [...middleware]
	storeCreator = createStore
}

const store = storeCreator(
	rootReducer,
	applyMiddleware(...middleware)
)

const persistor = persistStore(store)

export default store
