import {LETTER_KEY_PRESSED} from './actions/actions'

const initialState = {
  letter: ''
}

// This is a reducer which listens to actions and modifies the state
const reducer = (state = initialState, action) => {
  // A switch is used since if more actions are added in the future, it will be easy
  // to be able to handle this in the reducer since we just add another 'case'.
  switch (action.type) {
    case LETTER_KEY_PRESSED:
      return {
        ...state,
        letter: 'A'
      }
    default:
      return state;
    }
  }
