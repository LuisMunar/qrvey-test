
import PropTypes from 'prop-types'

import Close from '../../../assets/images/global-icons/close.svg'
import SelectedStar from '../../../assets/images/countries/selected-star.svg'
import UnselectedStar from '../../../assets/images/countries/unselected-star.svg'
import { getCountryCapital, getCountryCurrency, getCountryLanguage, numberFormat } from '../../../utils'
import './country-details.css'

const CountryDetailsStateless = ({ hideCountryDetails, dataCountrySelected, setFavoriteCountry }) => {
  const { name, region, population, capital, currencies, languages, flags, borderCountriesFullName, favorite } = dataCountrySelected

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
          <img
            src={ favorite ? SelectedStar : UnselectedStar }
            alt="unselected star"
            className="country-details__content-titlecontent-star"
            onClick={ () => setFavoriteCountry({ name: name.common, favorite: !favorite }) }
          />
          <h2 className="country-details__content-titlecontent-title">{ name.official }</h2>
        </div>

        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Region:</span>
          <span className="country-details__content-rowinfo-value">{ region }</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Population:</span>
          <span className="country-details__content-rowinfo-value">{ numberFormat(population) }</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Capital:</span>
          <span className="country-details__content-rowinfo-value">{ getCountryCapital(capital) }</span>
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
          <span className="country-details__content-rowinfo-value">{ borderCountriesFullName }</span>
        </div>

        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Flag:</span>
          <img
            src={ flags[0] }
            alt="flag"
            className="country-details__content-rowinfo-flag"
          />
        </div>
      </div>
    </div>
  )
}

CountryDetailsStateless.propTypes = {
  hideCountryDetails: PropTypes.func.isRequired,
  dataCountrySelected: PropTypes.object.isRequired,
  setFavoriteCountry: PropTypes.func.isRequired
}

export default CountryDetailsStateless