import { getCountriesService } from '../../services/getCountriesService'
import { loadingCountriesAction, searchCountriesActions, setCountriesActions } from '../actions/countriesActions'
import { formatDataCountries } from '../../utils'
import { getDataLDB } from '../../services/frontDBService'
import { FAVORITE_COUNTRIES } from '../../constants/collectionsDBContants'

const getDataCountries = () => {
  return new Promise(async (resolve) => {
    const countries = await getCountriesService()
    const favoriteCountries = await getDataLDB(FAVORITE_COUNTRIES)
    const dataCountriesFormat = formatDataCountries(countries, favoriteCountries)
    resolve(dataCountriesFormat)
  })
}

export const getCountriesMiddleware = () => {
  return async (dispatch) => {
    dispatch(loadingCountriesAction(true))
    dispatch(setCountriesActions(await getDataCountries()))
    dispatch(loadingCountriesAction(false))
  }
}

export const getCountriesToSearchMiddleware = (payload) => {
  return async (dispatch) => {
    dispatch(loadingCountriesAction(true))
    dispatch(setCountriesActions(await getDataCountries()))
    dispatch(searchCountriesActions(payload))
    dispatch(loadingCountriesAction(false))
  }
}