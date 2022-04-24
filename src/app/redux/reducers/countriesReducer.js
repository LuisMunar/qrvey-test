import { SET_COUNTRIES } from '../types/countriesTypes'

const initialState = {
  dataCountries: [],
  countriesByContinents: []
}

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        dataCountries: payload
      }
  
    default:
      return state
  }
}

export default countriesReducer