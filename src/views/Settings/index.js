import React, { PureComponent } from 'react'
import styled from 'styled-components'
// import {} from '../../components'

export default class Settings extends PureComponent {
  render() {
    return (
      <Settings.Styled>
        <h1>Settings View</h1>
      </Settings.Styled>
    )
  }
}

Settings.Styled = styled.div`
  padding: 100px;

  > section {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  }
`
