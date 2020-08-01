import axios from 'axios'

const API_URL = 'http://localhost:8000'

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default securedAxiosInstance

