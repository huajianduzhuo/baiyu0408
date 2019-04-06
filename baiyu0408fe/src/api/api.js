import axios from './interceptor'

export const addWords = (words) => {
  return axios.post('/say', { words })
}
