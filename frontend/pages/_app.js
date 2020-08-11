import React from 'react'
import 'styles/globals.css'
import DefaultLayout from '../layouts/default.js'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { useStore } from 'store/index.js'

function App ({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default App
