import React from 'react'
import ReactDOM from 'react-dom'
import AdminAnalytics from './AdminAnalytics'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AdminAnalytics />, div)
  ReactDOM.unmountComponentAtNode(div)
})
