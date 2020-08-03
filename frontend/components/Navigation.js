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
const SignUp = styled(Button)`
  span {
    color: ${({ theme }) => theme.colors.second};
  }
`

const SignIn = styled(Button)`
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

function Navigation () {
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
        <SignIn href="/signin">
          Sign In
        </SignIn>
        <SignUp href="/signup">
          Sign Up
        </SignUp>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
