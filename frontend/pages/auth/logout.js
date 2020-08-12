import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import $axios from 'plugins/axios'

function LogOut () {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    const logout = async () => {
      await $axios.secured.delete('/api/v1/signin')
      window.localStorage.removeItem('csrf')
      dispatch({ type: 'LOGOUT' })
      router.replace('/')
    }
    logout()
  })
  return <div />
}

export default LogOut
