
import PropTypes from 'prop-types'

import Close from '../../../assets/images/global-icons/close.svg'
import UnselectedStar from '../../../assets/images/countries/unselected-star.svg'
import SampleFlag from '../../../assets/images/countries/sample-flag.svg'
import './country-details.css'

const CountryDetailsStateless = ({ hideCountryDetails }) => {
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
          <h2 className="country-details__content-titlecontent-title">Colombia</h2>
          <img src={ UnselectedStar } alt="unselected star" className="country-details__content-titlecontent-star" />
        </div>

        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Region:</span>
          <span className="country-details__content-rowinfo-value">America</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Population:</span>
          <span className="country-details__content-rowinfo-value">50M</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Capital:</span>
          <span className="country-details__content-rowinfo-value">Bogota</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Currency:</span>
          <span className="country-details__content-rowinfo-value">Peso Colombiano</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Language:</span>
          <span className="country-details__content-rowinfo-value">Español</span>
        </div>
        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Border Countries:</span>
          <span className="country-details__content-rowinfo-value">Brasil, Ecuador, Panama, Peru, Venezuela</span>
        </div>

        <div className="country-details__content-rowinfo">
          <span className="country-details__content-rowinfo-key">Flag:</span>
          <img src={ SampleFlag } alt="flag" className="country-details__content-rowinfo-flag" />
        </div>
      </div>
    </div>
  )
}

CountryDetailsStateless.propTypes = {
  hideCountryDetails: PropTypes.func.isRequired
}

export default CountryDetailsStateless