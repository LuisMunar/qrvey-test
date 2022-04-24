import PropTypes from 'prop-types'

import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import './countries.css'

const CountriesStateless = ({ countriesByContinents }) => {
  const renderCountries = () => (
    <div className="countries">
      { countriesByContinents.map(({ continent, countries }, i) => <CountriesList key={ i } continent={ continent } countries={ countries } />) }
      <CountryDetails />
    </div>
  )

  const renderWithoutCountries = () => <span className="countries__not-found">No results found</span>

  return countriesByContinents.length > 0 ? renderCountries() : renderWithoutCountries()
}

CountriesStateless.propTypes = {
  countriesByContinents: PropTypes.array.isRequired
}

export default CountriesStateless