import './default.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'

export default class Default extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render () {
    const {children} = this.props
    return (
      <div className='default'>
        <header className='default-header'>
          {children}
          <img src={logo} className='default-logo' alt='logo' />
        </header>
      </div>
    )
  }
}
