import axios from 'axios'
const API_URL = 'http://localhost:8000'

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const plainAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

securedAxiosInstance.interceptors.request.use((config) => {
  const method = config.method.toUpperCase()
  if (method !== 'OPTIONS' && method !== 'GET') {
    config.headers = {
      ...config.headers,
      // TODO: переписать с localStorage на store
      'X-CSRF-TOKEN': window.localStorage.csrf
    }
  }
  return config
})

securedAxiosInstance.interceptors.response.use(null, (error) => {
  if (error.response && error.response.config && error.response.status === 401) {
    // If 401 by expired access cookie, we do a refresh request
    return plainAxiosInstance.post('/refresh', {}, { headers: { 'X-CSRF-TOKEN': window.localStorage.csrf } })
      .then((response) => {
        window.localStorage.csrf = response.data.csrf
        window.localStorage.signedIn = true
        // After another successfull refresh - repeat original request
        const retryConfig = error.response.config
        retryConfig.headers['X-CSRF-TOKEN'] = window.localStorage.csrf
        return plainAxiosInstance.request(retryConfig)
      }).catch((error) => {
        window.localStorage.removeItem('signedIn')
        window.localStorage.removeItem('csrf')
        // redirect to signin if refresh fails
        window.location.replace('/')
        return Promise.reject(error)
      })
  } else {
    return Promise.reject(error)
  }
})

const $axios = {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
}
export default $axios
