import { useDispatch } from 'react-redux'

import CountryItemStateless from './CountryItemStateless'
import { showCountryDetailsAction } from '../../../../redux/actions/countryDetailsActions'

const CountryItem = () => {
  const dispatch = useDispatch()
  const handlerShowCountryDetails = () => dispatch(showCountryDetailsAction(true))

  return (
    <CountryItemStateless
      handlerShowCountryDetails={ handlerShowCountryDetails }
    />
  )
}

export default CountryItem