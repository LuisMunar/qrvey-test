import PropTypes from 'prop-types'

import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import './countries.css'

const CountriesStateless = ({ countriesByContinents, loading }) => {
  const renderCountries = () => (
    <div className={ `countries ${ countriesByContinents.length < 5 && 'countries__colums-start' }` }>
      { countriesByContinents.map(({ continent, countries }, i) => <CountriesList key={ i } continent={ continent } countries={ countries } />) }
      <CountryDetails />
    </div>
  )

  const renderMessageText = (message) => <span className="countries__not-found">{ message }</span>

  return loading ? renderMessageText('Loading...') : countriesByContinents.length > 0 ? renderCountries() : renderMessageText('No results found')
}

CountriesStateless.propTypes = {
  countriesByContinents: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default CountriesStateless