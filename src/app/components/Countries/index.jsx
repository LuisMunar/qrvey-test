import CountriesList from './CountriesList'
// import CountryDetails from './CountriesList/CountryDetails'
import './countries.css'

const Countries = () => {
  return (
    <div className="countries">
      <CountriesList />
      <CountriesList />
      <CountriesList />
      <CountriesList />
      <CountriesList />

      {/* <CountryDetails /> */}
    </div>
  )
}

export default Countries