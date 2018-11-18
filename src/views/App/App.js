
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
// import Grid from 'react-css-grid'
import { Router } from '@reach/router'

import store from '../../store'
import { Nav, NotFound } from '../../components'
import { Analytics, Login, Settings, Stream, StyleGuide, Scratchpad, Notifications } from '../../views'
import '../../ui/global' // Global Styles
import theme from '../../ui/theme'

export default class App extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.string
    }).isRequired,
  }

  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App.Styled className='application-root'>
            <Nav />
            <Router primary>
              <Stream path='/' />
              <Analytics path='/analytics' />
              <Login path='/login' />
              <Settings path='/user-settings' />
              <Scratchpad path='/scratchpad' />
              <StyleGuide path='/style-guide' />
              <Notifications path='/notifications' />
              <NotFound default />
            </Router>
          </App.Styled>
        </ThemeProvider>
      </Provider>
    )
  }
}

App.Styled = styled.div`
  height: 100%;
`
