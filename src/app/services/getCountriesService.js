import { httpGetMethod } from './httpSerivce'
import { GET_COUNTRIES_ENDPOINT } from '../constants/endpointsContants'

export const getCountriesService = () => {
  return new Promise((resolve, reject) => {
    httpGetMethod(GET_COUNTRIES_ENDPOINT)
      .then((result) => {
        const { data } = result
        resolve(data)
      })
      .catch((error) => reject(error))
  })
}