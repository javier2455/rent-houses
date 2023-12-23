// Validates entries that contain '(any)', this is useful to know when the user does not select an option to filter
export const isDefault = (str) => str.split(' ').includes('(any)')
