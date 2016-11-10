const random = Math.random()

const randomNode = document.createElement('div')
randomNode.textContent = random

document.getElementById('container-4').appendChild(randomNode)

// … a module with only side effects and no exports
// The module needs a dispose handler and can accept itself. No action is required in the parent.
// If the module’s code is not in your hand, the parent can accept the module with some custom dispose logic.
if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => {
    console.info('random.js will be reloaded')
    randomNode.parentNode.removeChild(randomNode)
  })
}
