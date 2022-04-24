import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCountriesMiddleware } from '../../redux/middlewares/countriesMiddleware'
import CountriesStateless from './CountriesStateless'

const Countries = () => {
  const { dataCountries, countriesByContinents } = useSelector(({ countriesReducer }) => countriesReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    getCountries()
  }, []) // eslint-disable-line

  const getCountries = () => {
    dispatch(getCountriesMiddleware())
  }

  return <CountriesStateless dataCountries={ dataCountries } countriesByContinents={ countriesByContinents } />
}

export default Countries