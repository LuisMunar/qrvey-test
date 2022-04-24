import { useDispatch, useSelector } from 'react-redux'

import CountryDetailsStateless from './CountryDetailsStateless'
import { showCountryDetailsAction } from '../../../redux/actions/countryDetailsActions'
import { setFavoriteCountryAction } from '../../../redux/actions/countriesActions'

const CountryDetails = () => {
  const { show, dataCountrySelected } = useSelector(({ countryDetailsReducer }) => countryDetailsReducer)
  const dispatch = useDispatch()

  const hideCountryDetails = () => dispatch(showCountryDetailsAction(false))

  const setFavoriteCountry = (params) => {
    dispatch(setFavoriteCountryAction(params))
  }

  return (
    <CountryDetailsStateless
      hideCountryDetails={ hideCountryDetails }
      dataCountrySelected={ dataCountrySelected }
      setFavoriteCountry={ setFavoriteCountry }
      show={ show }
    />
  )
}

export default CountryDetails;