import { useDispatch, useSelector } from 'react-redux'

import CountryDetailsStateless from './CountryDetailsStateless'
import { showCountryDetailsAction } from '../../../redux/actions/countryDetailsActions'

const CountryDetails = () => {
  const { show, dataCountrySelected } = useSelector(({ countryDetailsReducer }) => countryDetailsReducer)
  const { dataCountries } = useSelector(({ countriesReducer }) => countriesReducer)
  const dispatch = useDispatch()

  const hideCountryDetails = () => dispatch(showCountryDetailsAction(false))

  return show && <CountryDetailsStateless hideCountryDetails={ hideCountryDetails } dataCountrySelected={ dataCountrySelected } dataCountries={ dataCountries } />
}

export default CountryDetails;