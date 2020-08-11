import React, { useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import styled from 'styled-components'
import $axios from 'plugins/axios'

const StyledWrapper = styled.div`
  margin: 40px;
`

const StyledButton = styled(Button)`
 margin: 40px;
  ${({ theme }) => theme.makeMagic()}
`

function SignIn () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event, prop) => {
    setFormData({
      ...formData,
      [prop]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = formData
    try {
      const { data } = await $axios.plain.post('api/v1/signin', {
        email, password
      })
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <StyledWrapper>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit} noValidate autoComplete='off'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Email'
              onChange={(e) => handleChange(e, 'email')}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='password'
              label='Password'
              onChange={(e) => handleChange(e, 'password')}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton type='submit' variant='outlined'>Sign In</StyledButton>
          </Grid>
        </Grid>
      </form>
      <pre>
        {formData.email}
        {formData.password}
      </pre>
    </StyledWrapper>
  )
}

export default SignIn
