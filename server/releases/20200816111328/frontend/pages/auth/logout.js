import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import $axios from 'plugins/axios'

function LogOut () {
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  useEffect(() => {
    if (user) {
      console.log(user, 'from logout')
      const logout = async () => {
        await $axios.secured.delete('/api/v1/signin')
        window.localStorage.removeItem('csrf')
        await dispatch({ type: 'LOGOUT' })
      }
      logout()
    }
    router.push('/')
  })
  return <div />
}

export default LogOut
