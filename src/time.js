const time = new Date().toLocaleTimeString()

const timeNode = document.createElement('div')
timeNode.textContent = time

document.getElementById('container-3').appendChild(timeNode)

export default time

// … a module with side effects
// The module needs a dispose handler, then any parent can accept it.
if (module.hot) {
  module.hot.dispose(() => {
    console.info('time.js will be reloaded')
    timeNode.parentNode.removeChild(timeNode)
  })
}
