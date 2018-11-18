import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Default } from '../../components'

export default class Stream extends PureComponent {
  render() {
    return (
      <Stream.Styled>
        <Default children={<h1>Stream View</h1>}></Default>
      </Stream.Styled>
    )
  }
}

Stream.Styled = styled.div`
height: 110px;
`
