import now from 'lodash/now'

export default () => console.log(`bye world ${now()}`)

// … a module without side effects (the standard case)
// Nothing to do in the module. Any parent can accept it.
