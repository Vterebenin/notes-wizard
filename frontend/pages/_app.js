import React from 'react'
import '../styles/globals.css'
import DefaultLayout from '../layouts/default.js'
import PropTypes from 'prop-types'

function App ({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default App
