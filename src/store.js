import { createStore } from 'redux'

let initialState = {
  currentValue: 0
}

function reducer (state = initialState, action) {
  return state
}

export default createStore(reducer)