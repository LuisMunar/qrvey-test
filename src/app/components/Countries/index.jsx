import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import './countries.css'

const Countries = () => {
  const renderCountries = () => (
    <div className="countries">
      <CountriesList />
      <CountriesList />
      <CountriesList />
      <CountriesList />
      <CountriesList />

      <CountryDetails />
    </div>
  )

  const renderWithoutCountries = () => <span className="countries__not-found">No results found</span>

  return true ? renderCountries() : renderWithoutCountries()
}

export default Countries