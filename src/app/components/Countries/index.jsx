import { useEffect } from 'react'

import CountriesList from './CountriesList'
import CountryDetails from './CountryDetails'
import { getCountriesService } from '../../services/getCountriesService'
import './countries.css'

const Countries = () => {
  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    const result = await getCountriesService()
    console.log(result)
  }

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