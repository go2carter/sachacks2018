import React, { PureComponent } from 'react'
import styled from 'styled-components'
// import {} from '../../components'

export default class Login extends PureComponent {
  render() {
    return (
      <Login.Styled>
        <h1>Login View</h1>
      </Login.Styled>
    )
  }
}

Login.Styled = styled.div`
  padding: 100px;

  > section {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  }
`
