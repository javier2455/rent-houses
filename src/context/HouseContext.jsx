import { useState, useEffect, createContext } from 'react'

import { housesData } from '../data'
import { validateSearch } from '../utils/validateSearch'

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price (any)')
  const [loading, setLoading] = useState(false)
  const [coinType, setCoinType] = useState('USD')

  useEffect(() => {
    const allCountries = houses.map((house) => house.country)
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    setCountries(uniqueCountries)
  }, [])

  useEffect(() => {
    const allProperties = houses.map((house) => house.type)
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]
    setProperties(uniqueProperties)
  }, [])

  const handleSearch = () => {
    setLoading(true)

    const filterHouses = housesData.filter((house) => {
      return validateSearch(house, price, country, property, coinType)
    })
    setTimeout(() => {
      return filterHouses.length < 1 ? setHouses([]) : setHouses(filterHouses),
      setLoading(false)
    }, 1000)
  }

  const data = {
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleSearch,
    setCoinType,
    coinType
  }

  return <HouseContext.Provider value={data}>{children}</HouseContext.Provider>
}

export default HouseContextProvider
