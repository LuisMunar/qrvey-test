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