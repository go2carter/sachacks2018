
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'

import store from '../../store'
import { NotFound } from '../../components'
import { Analytics, Login, Settings, Stream, StyleGuide, Scratchpad } from '../../views'
import '../../ui/global' // Global Styles
import theme from '../../ui/theme'

export default class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App.Styled className='application-root'>
            <Router primary>
              <Stream path='/' />
              <Analytics path='/analytics' />
              <Login path='/login' />
              <Settings path='/user-settings' />
              <Scratchpad path='/scratchpad' />
              <StyleGuide path='/style-guide' />
              <NotFound default />
            </Router>
          </App.Styled>
        </ThemeProvider>
      </Provider>
    )
  }
}

App.Styled = styled.div``
