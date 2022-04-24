import { getCountriesService } from '../../services/getCountriesService'
import { setCountriesActions } from '../actions/countriesActions'
import { filterCountriesByContinents } from '../../utils'

export const getCountriesMiddleware = () => {
  return async (dispatch) => {
    const countries = await getCountriesService()
    const countriesByContinents = filterCountriesByContinents(countries)
    dispatch(setCountriesActions({ countries, countriesByContinents }))
  }
}