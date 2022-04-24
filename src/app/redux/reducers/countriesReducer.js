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
        dataCountries: payload.countries,
        countriesByContinents: payload.countriesByContinents
      }
  
    default:
      return state
  }
}

export default countriesReducer