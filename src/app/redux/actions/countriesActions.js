import { LOADING_COUNTRIES, SET_COUNTRIES, SET_COUNTRIES_BY_CONTINENTS, SET_COUNTRIES_BY_FAVORITE, SET_COUNTRIES_BY_NAME, SET_FAVORITE_COUNTRY } from '../types/countriesTypes'
import { setFavoriteCountrySelectedAction } from './countryDetailsActions'
import { deleteDataLDB, setDataLDB } from '../../services/frontDBService'
import { FAVORITE_COUNTRIES } from '../../constants/collectionsDBContants'
import { FAVORITES, SHOW_ALL } from '../../constants/searcherConstants'

export const setCountriesActions = (payload) => ({
  type: SET_COUNTRIES,
  payload
})

export const setFavoriteCountryAction = (payload) => {
  const { name, favorite } = payload
  
  return (dispathc) => {
    favorite ? setDataLDB(FAVORITE_COUNTRIES, { name }) : deleteDataLDB(FAVORITE_COUNTRIES, { name })
    dispathc(setFavoriteCountrySelectedAction(payload.favorite))
    dispathc(setFavoriteCountry(payload))
  }
}

const setFavoriteCountry = (payload) => ({
  type: SET_FAVORITE_COUNTRY,
  payload
})

export const searchCountriesActions = (payload) => {
  const { filterValue } = payload

  return (dispatch, state) => {
    const { countriesReducer } = state()
    const { continents } = countriesReducer

    if(filterValue === SHOW_ALL) {
      dispatch(searchCountriesByName(payload))
    }

    if(filterValue === FAVORITES) {
      dispatch(searchCountriesByFavorites(payload))
    }

    if(continents.includes(filterValue)) {
      dispatch(searchCountriesByContinents(payload))
    }
  }
}

const searchCountriesByName = (payload) => ({
  type: SET_COUNTRIES_BY_NAME,
  payload
})

const searchCountriesByFavorites = (payload) => ({
  type: SET_COUNTRIES_BY_FAVORITE,
  payload
})

const searchCountriesByContinents = (payload) => ({
  type: SET_COUNTRIES_BY_CONTINENTS,
  payload
})

export const loadingCountriesAction = (payload) => ({
  type: LOADING_COUNTRIES,
  payload
})