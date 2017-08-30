import {LETTER_KEY_PRESSED} from './actions/actions'

const initialState = {
  letter: ''
}

const reducer = (state = initialState, action) => {
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
