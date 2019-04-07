import axios from './interceptor'

export const addWords = (words) => {
  return axios.post('/say', { words })
}
export const getUserWords = (name) => {
  return axios.get('/getUserWordsList', { name })
}
export const getAllWords = (name) => {
  return axios.get('/getAllWordsList', { name })
}
