import SampleFlag from '../../../../assets/images/countries/sample-flag.svg'
import SelectedStart from '../../../../assets/images/countries/selected-star.svg'
import './country-item.css'

const CountryItem = () => {
  return (
    <li className="country-item">
      <img src={ SampleFlag } alt="flag" className="country-item__flag" />
      <span>Congo</span>
      <img src={ SelectedStart } alt="star" className="country-item__star" />
    </li>
  )
}

export default CountryItem