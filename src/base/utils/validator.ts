export const isNumber = (input: string) => {
  const regex = /^\d+$/
  return regex.test(input)
}

export const isAlpha = (input: string) => {
  const regex = /^[a-zA-Z]*$/
  return regex.test(input)
}

export const isAlphaNumeric = (input: string) => {
  const regex = /^[a-z0-9]+$/i
  return regex.test(input)
}

export const isEmail = (input: string) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(input)
}

export const isLowerCase = (input: string) => {
  const regex = /^[a-z]*$/
  return regex.test(input)
}

export const isURL = (input: string) => {
  const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  return regex.test(input)
}

export const minLength = (input: string, value: number) => {
  return input.length >= value ? true : false
}

export const maxLength = (input: string, value: number) => {
  return input.length <= value ? true : false
}

export const match = (
  input: string,
  regex: RegExp,
) => {
  return regex.test(input)
}
