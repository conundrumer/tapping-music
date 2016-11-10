export default (parentId, name, onclick) => {
  const button = document.createElement('button')
  button.textContent = name
  button.onclick = onclick
  document.getElementById(parentId).appendChild(button)

  return () => {
    button.parentNode.removeChild(button)
  }
}

// … a module without side effects (the standard case)
// Nothing to do in the module. Any parent can accept it.
