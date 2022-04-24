import { SET_DATA_COUNTRY_SELECTED, SET_FAVORITE_COUNTRY_SELECTED_ACTION, SHOW_COUNTRY_DETAILS } from '../types/countryDetailsTypes';

export const showCountryDetailsAction = (payload) => ({
  type: SHOW_COUNTRY_DETAILS,
  payload
})

export const setDataCountrySelectedAction = (payload) => ({
  type: SET_DATA_COUNTRY_SELECTED,
  payload
})

export const setFavoriteCountrySelectedAction = (payload) => ({
  type: SET_FAVORITE_COUNTRY_SELECTED_ACTION,
  payload
})