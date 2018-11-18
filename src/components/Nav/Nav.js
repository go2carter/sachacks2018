import React, { PureComponent } from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

export default class Nav extends PureComponent {

  render() {
    return (
      <Nav.Styled>
        <nav>
          <Link to='/'>Stream</Link>
          <Link to='/user-settings'>{'¯\_(ツ)_/¯'}</Link>
          <Link to='/notifications'>Notifications</Link>
          <Link to='/analytics'>Analytics</Link>
        </nav>
      </Nav.Styled>
    )
  }
}

Nav.Styled = styled.div`
 height: 75px;
`
