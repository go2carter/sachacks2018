import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class UserAnalytics extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    const { children } = this.props

    return (
      <UserAnalytics.Styled>
        {children}
      </UserAnalytics.Styled>
    )
  }
}

UserAnalytics.Styled = styled.div``
