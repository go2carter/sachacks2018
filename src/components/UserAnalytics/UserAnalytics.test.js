import React from 'react'
import ReactDOM from 'react-dom'
import UserAnalytics from './UserAnalytics'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserAnalytics />, div)
  ReactDOM.unmountComponentAtNode(div)
})
