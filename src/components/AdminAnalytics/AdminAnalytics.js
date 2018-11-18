import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class AdminAnalytics extends PureComponent {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const { children } = this.props

    return (
      <AdminAnalytics.Styled>
        {children}
      </AdminAnalytics.Styled>
    )
  }
}

AdminAnalytics.Styled = styled.div``
