const FETCH = 'FETCH'
const CLEAR = 'CLEAR'

const initialState = {
  user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        user: null
      }
    case FETCH:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default {
  state: initialState,
  reducer
}
