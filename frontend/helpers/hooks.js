/**
 * File with custom hooks for application
 */

import { useEffect } from 'react'
import $axios from 'plugins/axios'

export const useAuth = (user, dispatch) => {
  useEffect(() => {
    if (!user && window.localStorage.csrf) {
      const getUser = async () => {
        try {
          const { data: { user } } = await $axios.secured.post('/api/v1/get_user/')
          dispatch({ type: 'FETCH', payload: user })
        } catch (e) {
          console.log(e)
        }
      }
      getUser()
    }
  })
}
