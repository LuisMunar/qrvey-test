import PropTypes from 'prop-types'

import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import './countries.css'

const CountriesStateless = ({ dataCountries }) => {
  const renderCountries = () => (
    <div className="countries">
      <CountriesList continent={ 'America' } countries={ dataCountries } />
      <CountriesList continent={ 'Europa' } countries={ dataCountries } />
      <CountriesList continent={ 'Asia' } countries={ dataCountries } />
      <CountriesList continent={ 'Africa' } countries={ dataCountries } />
      <CountriesList continent={ 'Africa' } countries={ dataCountries } />

      <CountryDetails />
    </div>
  )

  const renderWithoutCountries = () => <span className="countries__not-found">No results found</span>

  return dataCountries.length > 0 ? renderCountries() : renderWithoutCountries()
}

CountriesStateless.propTypes = {
  dataCountries: PropTypes.array.isRequired
}

export default CountriesStateless