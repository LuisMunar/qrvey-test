import { SET_COUNTRIES, SET_FAVORITE_COUNTRY } from '../types/countriesTypes';
import { setFavoriteCountrySelectedAction } from './countryDetailsActions';

export const setCountriesActions = (payload) => ({
  type: SET_COUNTRIES,
  payload
})

export const setFavoriteCountryAction = (payload) => {
  return (dispathc) => {
    dispathc(setFavoriteCountrySelectedAction(payload.favorite))
    dispathc(setFavoriteCountry(payload))
  }
}

const setFavoriteCountry = (payload) => ({
  type: SET_FAVORITE_COUNTRY,
  payload
})