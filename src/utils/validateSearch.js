import { isDefault } from './functions'

export function validateSearch(house, price, country, property) {
  const minPrice = parseInt(price.split(' ')[0])
  const maxPrice = parseInt(price.split(' ')[2])

  const housePrice = parseInt(house.price)
  // if all values are selected
  if (
    house.country === country &&
    house.type === property &&
    housePrice >= minPrice &&
    housePrice <= maxPrice
  ) {
    return house
  }

  // if all values are default
  if (isDefault(country) && isDefault(property) && isDefault(price)) {
    return house
  }

  // if country is not default
  if (!isDefault(country) && isDefault(property) && isDefault(price)) {
    return house.country === country
  }

  // if property is not default
  if (isDefault(country) && !isDefault(property) && isDefault(price)) {
    return house.type === property
  }

  // if price is not default
  if (isDefault(country) && isDefault(property) && !isDefault(price)) {
    if (housePrice >= minPrice && housePrice <= maxPrice) {
      return house
    }
  }

  // if country and property is not default
  if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
    return house.country === country && house.type === property
  }

  // if country and price is not default
  if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
    if (housePrice >= minPrice && housePrice <= maxPrice) {
      return house.country === country
    }
  }

  // if property and price is not default
  if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
    if (housePrice >= minPrice && housePrice <= maxPrice) {
      return house.type === property
    }
  }
}
