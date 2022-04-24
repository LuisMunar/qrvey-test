
import PropTypes from 'prop-types'

import Close from '../../../assets/images/global-icons/close.svg'
import UnselectedStar from '../../../assets/images/countries/unselected-star.svg'
import { getCountryCurrency, getCountryLanguage, getCountriesBorderFullname } from '../../../utils'
import './country-details.css'

const CountryDetailsStateless = ({ hideCountryDetails, dataCountrySelected, dataCountries }) => {
  const { name, region, population, capital, currencies, languages, borders, flags } = dataCountrySelected

  return (
    <div className="country-details">
      <div className="country-details__content">
        <img
          src={ Close }
          alt="close"
          className="country-details__content-close"
          onClick={ hideCountryDetails }
        />

        <div className="country-details__content-titlecontent">
          <h2 className="country-details__content-titlecontent-title">{ name.official }</h2>
          <img src={ UnselectedStar } alt="unselected star" className="country-details__content-titlecontent-star" />
        </div>

        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Region:</span>
          <span className="country-details__content-rowinfo-value">{ region }</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Population:</span>
          <span className="country-details__content-rowinfo-value">{ population }</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Capital:</span>
          <span className="country-details__content-rowinfo-value">{ capital[0] }</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Currency:</span>
          <span className="country-details__content-rowinfo-value">{ getCountryCurrency(currencies) }</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Language:</span>
          <span className="country-details__content-rowinfo-value">{ getCountryLanguage(languages) }</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Border Countries:</span>
          <span className="country-details__content-rowinfo-value">{ getCountriesBorderFullname(dataCountries, borders) }</span>
        </div>

        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Flag:</span>
          <img src={ flags[0] } alt="flag" className="country-details__content-rowinfo-flag" />
        </div>
      </div>
    </div>
  )
}

CountryDetailsStateless.propTypes = {
  hideCountryDetails: PropTypes.func.isRequired,
  dataCountrySelected: PropTypes.object.isRequired,
  dataCountries: PropTypes.array.isRequired
}

export default CountryDetailsStateless