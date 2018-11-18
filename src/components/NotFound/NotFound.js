import React, { Component } from 'react'
import styled from 'styled-components'

export default class NotFound extends Component {
  render() {
    return (
      <NotFound.Styled>
        <header className='not-found'>
          You are lost, please see another link!
        </header>
      </NotFound.Styled>
    )
  }
}

NotFound.Styled = styled.div``
