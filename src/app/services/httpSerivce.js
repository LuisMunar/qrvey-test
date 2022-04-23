import axios from 'axios'

import { API_URL_BASE } from '../constants/endpointsContants'

const httpService = axios.create({
  baseURL: API_URL_BASE
})

export const httpGetMethod = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    httpService.get(endpoint, { params })
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
}

export const httpPostMethod = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    httpService.post(endpoint, params)
      .then((result) => resolve(result))
      .catch((error) => reject(error))
  })
}