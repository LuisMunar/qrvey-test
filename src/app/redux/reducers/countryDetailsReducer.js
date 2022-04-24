import { SET_DATA_COUNTRY_SELECTED, SET_FAVORITE_COUNTRY_SELECTED_ACTION, SHOW_COUNTRY_DETAILS } from '../types/countryDetailsTypes'

const initialState = {
  show: false,
  dataCountrySelected: null
}

const countryDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_COUNTRY_DETAILS:
      return {
        ...state,
        show: payload
      }

    case SET_DATA_COUNTRY_SELECTED:
      return {
        ...state,
        dataCountrySelected: payload
      }

    case SET_FAVORITE_COUNTRY_SELECTED_ACTION:
      return {
        ...state,
        dataCountrySelected: {
          ...state.dataCountrySelected,
          favorite: payload
        }
      }
  
    default:
      return state
  }
}

export default countryDetailsReducer