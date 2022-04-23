import { combineReducers } from 'redux'

import countryDetailsReducer from './countryDetailsReducer'
import countriesReducer from './countriesReducer'

export default combineReducers({
  countryDetailsReducer,
  countriesReducer
})