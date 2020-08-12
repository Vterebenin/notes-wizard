import React, { useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import $axios from 'plugins/axios'

const StyledWrapper = styled.div`
  margin: 40px;
`

const StyledButton = styled(Button)`
 margin: 40px;
  ${({ theme }) => theme.makeMagic()}
`

function SignUp () {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleChange = (event, prop) => {
    setFormData({
      ...formData,
      [prop]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password, passwordConfirmation } = formData
    try {
      const { data: { csrf, user } } = await $axios.plain.post('api/v1/signup', {
        email, password, password_confirmation: passwordConfirmation
      })
      console.log(csrf, user)
      window.localStorage.csrf = csrf
      dispatch({ type: 'FETCH', payload: user })
    } catch (e) {
      console.error(e)
    }
    console.log('will be submited', formData)
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
            <TextField
              fullWidth
              type='password'
              label='Password confirmation'
              onChange={(e) => handleChange(e, 'passwordConfirmation')}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton type='submit' variant='outlined'>Sign Up</StyledButton>
          </Grid>
        </Grid>
      </form>
      <pre>
        {formData.email}
        {formData.password}
        {formData.passwordConfirmation}
      </pre>
    </StyledWrapper>
  )
}

export default SignUp
