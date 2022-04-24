export const getCountryCurrency = (data) => {
  const keys = Object.keys(data)
  const currencyKey = keys[0]
  return data[currencyKey].name
}

export const getCountryLanguage = (data) => {
  const keys = Object.keys(data)
  const currencyKey = keys[0]
  return data[currencyKey]
}

export const getCountriesBorderFullname = (countries, borderCountries) => {
  if (!borderCountries) {
    return 'Without border countries'
  }

  const borderCountriesFullName = borderCountries.map((borderCountryInitials) => {
    const { name } = countries.find((country) => borderCountryInitials === country.fifa || borderCountryInitials === country.cca3)
    return name.official
  })

  return borderCountriesFullName.join(', ')
}

export const filterCountriesByContinents = (countries) => {
  const continentsArray = [...new Set(countries.map(country => country.region))]

  const countriesByContinents = continentsArray.map((continent) => {
    const myCountries = countries.filter((country) => country.region === continent)
    return {
      continent,
      countries: myCountries.sort((itemA, itemB) => itemA.name.common > itemB.name.common ? 1 : -1)
    }
  })

  return countriesByContinents.sort((itemA, itemB) => itemA.continent > itemB.continent ? 1 : -1)
}

export const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number)
}