import { combineReducers } from "redux"

import globalReducer from './globalReducer.js'

const rootReducer = combineReducers({
  globalReducer,
})

export default rootReducer
