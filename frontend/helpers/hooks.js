/**
 * File with custom hooks for application
 */

import { useSelector } from 'react-redux'

export const useAuth = () => useSelector((state) => {
  return state.auth.user
})
