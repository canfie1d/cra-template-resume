import { combineReducers } from 'redux';

function resumeData(state = { data: {} }, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'UPDATE_DATA':
      newState.data = action.data;
      break;
    default:
      return state;
  }

  return newState;
}

export default combineReducers({
  resumeData,
});
