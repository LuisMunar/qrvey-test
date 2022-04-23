import SampleFlag from '../../../assets/images/countries/sample-flag.svg'
import SelectedStart from '../../../assets/images/countries/selected-star.svg'
import './countries-list.css'

const CountriesList = () => {
  return (
    <div className="countries-listt">
      <h3 className="countries-list__title">Africa</h3>

      <ul className="countries-list__list">
        <li className="countries-list__list-item">
          <img src={ SampleFlag } alt="flag" className="countries-list__list-item-flag" />
          <span>Congo</span>
          <img src={ SelectedStart } alt="star" className="countries-list__list-item-star" />
        </li>

        <li className="countries-list__list-item">
          <img src={ SampleFlag } alt="flag" className="countries-list__list-item-flag" />
          <span>Holanda</span>
          <img src={ SelectedStart } alt="star" className="countries-list__list-item-star" />
        </li>

        <li className="countries-list__list-item">
          <img src={ SampleFlag } alt="flag" className="countries-list__list-item-flag" />
          <span>Colombia</span>
          <img src={ SelectedStart } alt="star" className="countries-list__list-item-star" />
        </li>
      </ul>
    </div>
  )
}

export default CountriesList