import PropTypes from 'prop-types'

import CountryItem from './CountryItem'
import './countries-list.css'

const CountriesList = ({ continent, countries }) => {
  return (
    <div>
      <h3 className="countries-list__title">{ continent }</h3>

      <ul className="countries-list__list">
        { countries.map((country, i) => <CountryItem key={ i } country={ country } />) }
      </ul>
    </div>
  )
}

CountriesList.propTypes = {
  continent: PropTypes.string.isRequired,
  countries: PropTypes.array.isRequired
}

export default CountriesList