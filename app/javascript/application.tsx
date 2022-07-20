// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  return (<div>Hello, Rails 7!</div>)
}

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('app')
  ReactDOM.render(<AppWithState />, rootEl)
})
