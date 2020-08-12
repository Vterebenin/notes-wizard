import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth } from 'helpers/hooks'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled(Typography)`
  flex-grow: 1;
  a {
    color: black;
    height: 100%;
    display: inline-block;
    padding: 8px 5px;
  }
  ${({ theme }) => theme.makeMagic({
    selector: 'a'
  })}
`
const MenuButton = styled(IconButton)`
  margin-right: 5px;
`
// TODO: research for problems in dynamic names in styled components
// const Signup = styled(Button)`
//   span {
//     color: ${({ theme }) => theme.colors.second};
//   }
// `

const Signin = styled(Button)`
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

function Navigation () {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  useAuth(user, dispatch)

  const links = [
    {
      href: '/auth/logout',
      text: 'Log Out',
      shouldRender: user
    },
    {
      href: '/auth/signin',
      text: 'Sign In',
      shouldRender: !user
    },
    {
      href: '/auth/signup',
      text: 'Sign Up',
      shouldRender: !user
    }
  ]

  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <MenuButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </MenuButton>
        <Title variant='h6' color='inherit'>
          <Link href='/'>
            <a>
              NotesWizard
            </a>
          </Link>
        </Title>
        <div>{user && user.email}</div>
        {links.map((item, i) => item.shouldRender && <Signin key={i} href={item.href}>{item.text}</Signin>)}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
