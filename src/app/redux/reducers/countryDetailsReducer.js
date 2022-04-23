import { SHOW_COUNTRY_DETAILS } from '../types/countryDetailsTypes';

const initialState = {
  show: false
}

const countryDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_COUNTRY_DETAILS:
      return {
        ...state,
        show: payload
      }
  
    default:
      return state
  }
}

export default countryDetailsReducer