import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navigation from 'components/Navigation'
import PropTypes from 'prop-types'

const theme = {
  colors: {
    primary: '#91d8c9',
    second: '#c991d8',
    third: '#d8c991',
    error: 'red'
  },
  makeMagic ({ selector }) {
    return `
      ${selector} {
          background: linear-gradient(270deg, #c991d8, #91d8c9);
          background-size: 400% 400%;

          -webkit-animation: Wizardy 30s ease infinite;
          -moz-animation: Wizardy 30s ease infinite;
          animation: Wizardy 30s ease infinite;
      }

      @-webkit-keyframes Wizardy {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      @-moz-keyframes Wizardy {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      @keyframes Wizardy {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
    `
  }
}

function DefaultLayout ({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      {children}
    </ThemeProvider>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element
}

export default DefaultLayout
