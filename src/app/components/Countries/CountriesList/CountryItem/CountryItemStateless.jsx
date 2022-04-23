import PropTypes from 'prop-types'

import SampleFlag from '../../../../assets/images/countries/sample-flag.svg'
import SelectedStart from '../../../../assets/images/countries/selected-star.svg'
import './country-item.css'

const CountryItemStateless = ({ handlerShowCountryDetails }) => {
  return (
    <li
      className="country-item"
      onClick={ () => handlerShowCountryDetails() }
    >
      <img src={ SampleFlag } alt="flag" className="country-item__flag" />
      <span>Congo</span>
      <img src={ SelectedStart } alt="star" className="country-item__star" />
    </li>
  )
}

CountryItemStateless.propTypes = {
  handlerShowCountryDetails: PropTypes.func.isRequired
}

export default CountryItemStateless