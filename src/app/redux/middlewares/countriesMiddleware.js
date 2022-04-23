import { getCountriesService } from '../../services/getCountriesService'
import { setCountriesActions } from '../actions/countriesActions'

export const getCountriesMiddleware = () => {
  return async (dispatch) => {
    const countries = await getCountriesService()
    dispatch(setCountriesActions(countries))
  }
}