import { SET_COUNTRIES, SET_FAVORITE_COUNTRY } from '../types/countriesTypes'

const initialState = {
  countriesByContinents: []
}

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countriesByContinents: payload
      }

    case SET_FAVORITE_COUNTRY:
      return {
        ...state,
        countriesByContinents: state.countriesByContinents.map(dataContinent => {
          return {
            ...dataContinent,
            countries: dataContinent.countries.map(dataCountry => {
              return {
                ...dataCountry,
                favorite: dataCountry.name.common === payload.name ? payload.favorite : dataCountry.favorite
              }
            })
          }
        })
      }
  
    default:
      return state
  }
}

export default countriesReducer