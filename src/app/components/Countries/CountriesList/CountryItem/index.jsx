import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import CountryItemStateless from './CountryItemStateless'
import { setDataCountrySelectedAction, showCountryDetailsAction } from '../../../../redux/actions/countryDetailsActions'

const CountryItem = ({ country }) => {
  const dispatch = useDispatch()
  
  const handlerShowCountryDetails = () => {
    dispatch(setDataCountrySelectedAction(country))
    dispatch(showCountryDetailsAction(true))
  }

  return (
    <CountryItemStateless
      country={ country }
      handlerShowCountryDetails={ handlerShowCountryDetails }
    />
  )
}

CountryItem.propTypes = {
  country: PropTypes.object.isRequired
}

export default CountryItem