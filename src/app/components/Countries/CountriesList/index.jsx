import CountryItem from './CountryItem'
import './countries-list.css'

const CountriesList = () => {
  return (
    <div>
      <h3 className="countries-list__title">Africa</h3>

      <ul className="countries-list__list">
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
        <CountryItem />
      </ul>
    </div>
  )
}

export default CountriesList