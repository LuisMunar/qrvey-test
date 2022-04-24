import { SET_DATA_COUNTRY_SELECTED, SHOW_COUNTRY_DETAILS } from '../types/countryDetailsTypes';

export const showCountryDetailsAction = (payload) => ({
  type: SHOW_COUNTRY_DETAILS,
  payload
})

export const setDataCountrySelectedAction = (payload) => ({
  type: SET_DATA_COUNTRY_SELECTED,
  payload
})