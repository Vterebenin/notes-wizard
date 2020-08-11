const FETCH = 'FETCH'

const initialState = {
  user: 'im a user, maybe'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        user: 'im a fucking user, okay?'
      }
    default:
      return state
  }
}

export default {
  state: initialState,
  reducer
}
