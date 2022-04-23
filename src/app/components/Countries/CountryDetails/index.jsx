import { useDispatch, useSelector } from 'react-redux'

import CountryDetailsStateless from './CountryDetailsStateless'
import { showCountryDetailsAction } from '../../../redux/actions/countryDetailsActions'

const CountryDetails = () => {
  const { show } = useSelector(({ countryDetailsReducer }) => countryDetailsReducer)
  const dispatch = useDispatch()

  const hideCountryDetails = () => dispatch(showCountryDetailsAction(false))

  return show && <CountryDetailsStateless hideCountryDetails={ hideCountryDetails }/>
}

export default CountryDetails;