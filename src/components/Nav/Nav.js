import React, { PureComponent } from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'
// import kingsPurp from '../../ui/colors'
import Icon from '../../ui/assets/asset-01.svg'
import Home from '@material-ui/icons/Home'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Favorite from '@material-ui/icons/Favorite'
import Assessment from '@material-ui/icons/Assessment'


const linkStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  textDecoration: 'none',
  width: '25%', height: '100%'
}

export default class Nav extends PureComponent {

  render() {
    return (
      <Nav.Styled>
        <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%'}}>
          {/* <Link to='/' style={linkStyle}><img src={Icon} /></Link> */}
          <Link to='/' style={linkStyle}><Home /></Link>
          <Link to='/user-settings' style={linkStyle}><AccountCircle /></Link>
          <Link to='/notifications' style={linkStyle}><Favorite /></Link>
          <Link to='/analytics' style={linkStyle}><Assessment /></Link>
        </nav>
      </Nav.Styled>
    )
  }
}

Nav.Styled = styled.div`
  height: 75px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #5A2D81;
  color: white;
  text-align: center;
`
