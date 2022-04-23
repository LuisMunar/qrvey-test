import { useSelector } from 'react-redux'

import CountryDetailsStateless from './CountryDetailsStateless'

const CountryDetails = () => {
  const { show } = useSelector(({ countryDetailsReducer }) => countryDetailsReducer)

  return show && <CountryDetailsStateless />
}

export default CountryDetails;