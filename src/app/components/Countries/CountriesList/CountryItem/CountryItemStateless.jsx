import PropTypes from 'prop-types'

import SelectedStart from '../../../../assets/images/countries/selected-star.svg'
import './country-item.css'

const CountryItemStateless = ({ country, handlerShowCountryDetails }) => {
  const { flag, name, favorite  } = country
  return (
    <li
      className="country-item"
      onClick={ () => handlerShowCountryDetails() }
    >
      <span className="country-item__flag">{ flag }</span>
      <span className="country-item__name">{ name.common }</span>
      { favorite && <img src={ SelectedStart } alt="star" className="country-item__star" /> }
    </li>
  )
}

CountryItemStateless.propTypes = {
  country: PropTypes.object.isRequired,
  handlerShowCountryDetails: PropTypes.func.isRequired
}

export default CountryItemStateless