import React, { useState } from 'react'
import { Button, TextField, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const dispatch = useDispatch()

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
      const { data: { csrf, user } } = await $axios.plain.post('api/v1/signin', {
        email, password
      })
      window.localStorage.csrf = csrf
      dispatch({ type: 'FETCH', payload: user })
      router.push('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <StyledWrapper>
      <h1>Sign in</h1>
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
      {/* Todo: сделать выводы на дополнительные ссылки, авторизация через google acc */}
      <pre>
        {formData.email}
        {formData.password}
      </pre>
    </StyledWrapper>
  )
}

export default SignIn
