import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const SignIn = styled(Button)`
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

function Navigation () {
  return (
    <h1>there will be a sign in form</h1>
  )
}

export default Navigation
