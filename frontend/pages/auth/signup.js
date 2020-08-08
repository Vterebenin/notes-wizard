import React from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  margin: 40px;
`

const StyledButton = styled(Button)`
 margin: 40px;
  ${({ theme }) => theme.makeMagic()}
`

function SignUp () {
  return (
    <StyledWrapper>
      <h1>Sign up</h1>
      <form noValidate autoComplete='off'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label='Email' variant='outlined' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Password' variant='outlined' />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label='Password confirmation' variant='outlined' />
          </Grid>
          <Grid item xs={12}>
            <StyledButton variant='outlined'>Sign Up</StyledButton>
          </Grid>
        </Grid>
      </form>
    </StyledWrapper>
  )
}

export default SignUp
