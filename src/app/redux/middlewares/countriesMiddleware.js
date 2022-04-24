import { getCountriesService } from '../../services/getCountriesService'
import { searchCountriesActions, setCountriesActions } from '../actions/countriesActions'
import { formatDataCountries } from '../../utils'

const getDataCountries = () => {
  return new Promise(async (resolve) => {
    const countries = await getCountriesService()
    const dataCountriesFormat = formatDataCountries(countries)
    resolve(dataCountriesFormat)
  })
}

export const getCountriesMiddleware = () => {
  return async (dispatch) => {
    dispatch(setCountriesActions(await getDataCountries()))
  }
}

export const getCountriesToSearchMiddleware = (payload) => {
  return async (dispatch) => {
    dispatch(setCountriesActions(await getDataCountries()))
    dispatch(searchCountriesActions(payload))
  }
}