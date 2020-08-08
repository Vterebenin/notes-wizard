import { capitalize } from 'helpers/useful'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
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
const Signup = styled(Button)`
  span {
    color: ${({ theme }) => theme.colors.second};
  }
`

const Signin = styled(Button)`
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

function Navigation () {
  const links = [
    {
      href: '/auth/signin',
      text: 'Sign In',
      tag: 'SignIn'
    },
    {
      href: '/auth/signup',
      text: 'Sign Up',
      tag: 'SignUp'
    }
  ]

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <MenuButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </MenuButton>
        <Title variant="h6" color="inherit">
          <Link href="/">
            <a>
              NotesWizard
            </a>
          </Link>
        </Title>
        {links.map((item, i) => <Signin key={i} href={item.href}>{item.text}</Signin>)}
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
