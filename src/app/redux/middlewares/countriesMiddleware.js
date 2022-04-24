import { getCountriesService } from '../../services/getCountriesService'
import { setCountriesActions } from '../actions/countriesActions'
import { formatDataCountries } from '../../utils'

export const getCountriesMiddleware = () => {
  return async (dispatch) => {
    const countries = await getCountriesService()
    const dataCountriesFormat = formatDataCountries(countries)
    dispatch(setCountriesActions(dataCountriesFormat))
  }
}