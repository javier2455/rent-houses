// Validates entries that contain '(any)', this is useful to know when the user does not select an option to filter
export const isDefault = (str) => str.split(' ').includes('(any)')

export const getPriceByCoin = (priceArray, coinType) => {
  const result = priceArray.find((p) => p.coin === coinType)
  return result.value
}
