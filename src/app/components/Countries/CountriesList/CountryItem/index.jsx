import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import CountryItemStateless from './CountryItemStateless'
import { showCountryDetailsAction } from '../../../../redux/actions/countryDetailsActions'

const CountryItem = ({ country }) => {
  const dispatch = useDispatch()
  const handlerShowCountryDetails = () => dispatch(showCountryDetailsAction(true))

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