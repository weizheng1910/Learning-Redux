import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp,window.STATE_FROM_SERVER)

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

console.log(window)
console.log(window.STATE_FROM_SERVER)
console.log(store.getState())

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
console.log(store.getState())
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(2))
console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))