export const getCountryCapital = (data) => {
  if(data) {
    return data[0]
  }
  return 'Without capital'
}

export const getCountryCurrency = (data) => {
  if (data) {
    const keys = Object.keys(data)
    const currencyKey = keys[0]
    return data[currencyKey].name
  }
  
  return 'Without currencies'
}

export const getCountryLanguage = (data) => {
  if(data) {
    const keys = Object.keys(data)
    const currencyKey = keys[0]
    return data[currencyKey]
  }

  return 'Without languages'
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

export const formatDataCountries = (countries, favoriteCountries) => {
  const localCountries = countries.map(country => {
    return {
      ...country,
      favorite: favoriteCountries.find(favoriteCountry => country.name.common === favoriteCountry.name) ? true : false,
      borderCountriesFullName: getCountriesBorderFullname(countries, country.borders)
    }
  })

  const continentsArray = [...new Set(localCountries.map(country => country.region))]

  const countriesByContinents = continentsArray.map((continent) => {
    const filterCountriesContinent = localCountries.filter((country) => country.region === continent)
    return {
      continent,
      countries: filterCountriesContinent.sort((itemA, itemB) => itemA.name.common > itemB.name.common ? 1 : -1)
    }
  })

  return {
    continents: continentsArray,
    countriesByContinents: countriesByContinents.sort((itemA, itemB) => itemA.continent > itemB.continent ? 1 : -1)
  }
}

export const numberFormat = (number) => {
  return new Intl.NumberFormat().format(number)
}