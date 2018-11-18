import React, { PureComponent } from 'react'
import styled from 'styled-components'
// import {} from '../../components'

export default class StyleGuide extends PureComponent {
  render() {
    return (
      <StyleGuide.Styled>
        <h1>StyleGuide View</h1>
      </StyleGuide.Styled>
    )
  }
}

StyleGuide.Styled = styled.div`
  padding: 100px;

  > section {
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  }
`
