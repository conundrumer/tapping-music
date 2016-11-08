// console.info('index.js!')
// when hot reloaded, alt+r in devtools to refresh source maps
import hello from './hello'
import bye from './bye'
import renderButton from './button'
import time from './time'
import './random'

let removeHello
let removeBye

const renderHello = () => {
  removeHello = renderButton('container-1', `hello, the time is ${time}`, hello)
}
const renderBye = () => {
  removeBye = renderButton('container-2', 'bye', bye)
}
const render = () => {
  renderHello()
  renderBye()
}
render()

// … the application entry module
// As it doesn’t export it can accept itself. A dispose handler can pass the application state on replacement.
if (module.hot) {
  // this module is hot reloadable
  module.hot.accept()

  module.hot.dispose(() => {
    console.info('index.js will be reloaded')
    removeHello()
    removeBye()
  })

  // these modules have no side effects, so the current module can accept them
  module.hot.accept('./button', () => {
    console.info('button has been reloaded')
    removeHello()
    removeBye()
    render()
  })
  module.hot.accept('./hello', () => {
    console.info('hello has been reloaded')
    removeHello()
    renderHello()
  })
  module.hot.accept('./bye', () => {
    console.info('bye has been reloaded')
    removeBye()
    renderBye()
  })
}
