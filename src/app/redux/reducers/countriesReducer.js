import { SET_COUNTRIES, SET_COUNTRIES_BY_CONTINENTS, SET_COUNTRIES_BY_FAVORITE, SET_COUNTRIES_BY_NAME, SET_FAVORITE_COUNTRY } from '../types/countriesTypes'

const initialState = {
  continents: [],
  countriesByContinents: []
}

const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        continents: payload.continents,
        countriesByContinents: payload.countriesByContinents
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
    
    case SET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countriesByContinents: state.countriesByContinents.map(continentData => {
          return {
            ...continentData,
            countries: continentData.countries.filter(country => country.name.common.toLowerCase().includes(payload.searchValue.toLowerCase()))
          }
        }).filter(continentData => continentData.countries.length > 0)
      }
      
    case SET_COUNTRIES_BY_FAVORITE:
      return {
        ...state,
        countriesByContinents: state.countriesByContinents.map(continentData => {
          return {
            ...continentData,
            countries: continentData.countries.filter(country => {
              return country.favorite && country.name.common.toLowerCase().includes(payload.searchValue.toLowerCase())
            })
          }
        }).filter(continentData => continentData.countries.length > 0)
      }

    case SET_COUNTRIES_BY_CONTINENTS:
      return {
        ...state,
        countriesByContinents: state.countriesByContinents.map(continentData => {
          return {
            ...continentData,
            countries: continentData.countries.filter(country => country.name.common.toLowerCase().includes(payload.searchValue.toLowerCase()))
          }
        }).filter(continentData => continentData.continent === payload.filterValue)
      }
  
    default:
      return state
  }
}

export default countriesReducer