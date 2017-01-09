import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const rootElement = document.getElementById('root')

function render () {
  try {
    ReactDOM.render(
      <App />,
      rootElement
    )
  } catch (e) {
    ReactDOM.render(
      <div style={{ color: 'red' }}>Something went wrong: {e.message}</div>,
      rootElement
    )
  }
}
render()

// … the application entry module
// As it doesn’t export it can accept itself. A dispose handler can pass the application state on replacement.
if (module.hot) {
  // this module is hot reloadable
  module.hot.accept()

  module.hot.dispose(() => {
    console.info('index.js will be reloaded')
    try {
      ReactDOM.unmountComponentAtNode(rootElement)
    } catch (e) {
      rootElement.innerHTML = ''
    }
  })
}
