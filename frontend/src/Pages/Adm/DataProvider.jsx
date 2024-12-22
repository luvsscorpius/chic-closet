import jsonServerProvider from 'ra-data-json-server'

const apiUrl = ''
export const dataProvider = jsonServerProvider(apiUrl)