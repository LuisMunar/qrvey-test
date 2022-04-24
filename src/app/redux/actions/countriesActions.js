import { SET_COUNTRIES, SET_FAVORITE_COUNTRY } from '../types/countriesTypes';

export const setCountriesActions = (payload) => ({
  type: SET_COUNTRIES,
  payload
})

export const setFavoriteCountryAction = (payload) => ({
  type: SET_FAVORITE_COUNTRY,
  payload
})