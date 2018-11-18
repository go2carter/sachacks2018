import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { AdminAnalytics, UserAnalytics} from '../../components'

export default class Analytics extends PureComponent {
  render() {
    // TODO: Hard coded determination of Admin or Standard User
    const user = 'ADMIN'

    if (user === 'ADMIN') {
      return (
        <Analytics.Styled>
          <AdminAnalytics children={<h1>AdminAnalytics View</h1>} />
        </Analytics.Styled>
      )
    } else {
      return (
        <Analytics.Styled>
          <UserAnalytics children={<h1>UserAnalytics View</h1>} />
        </Analytics.Styled>
      )
    }
  }
}

Analytics.Styled = styled.div``
