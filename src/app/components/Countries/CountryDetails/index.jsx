import { useDispatch, useSelector } from 'react-redux'

import CountryDetailsStateless from './CountryDetailsStateless'
import { setFavoriteCountrySelectedAction, showCountryDetailsAction } from '../../../redux/actions/countryDetailsActions'
import { setFavoriteCountryAction } from '../../../redux/actions/countriesActions'

const CountryDetails = () => {
  const { show, dataCountrySelected } = useSelector(({ countryDetailsReducer }) => countryDetailsReducer)
  const dispatch = useDispatch()

  const hideCountryDetails = () => dispatch(showCountryDetailsAction(false))

  const setFavoriteCountry = (params) => {
    dispatch(setFavoriteCountryAction(params))
    dispatch(setFavoriteCountrySelectedAction(params.favorite))
  }

  return (
    show &&
    <CountryDetailsStateless
      hideCountryDetails={ hideCountryDetails }
      dataCountrySelected={ dataCountrySelected }
      setFavoriteCountry={ setFavoriteCountry }
    />
  )
}

export default CountryDetails;