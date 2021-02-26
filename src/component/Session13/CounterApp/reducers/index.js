import * as ActionTypes from '../actions/types';
const defaultState = {count: 5};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return Object.assign({}, state, {
        count: state.count + action.number1 - action.number2,
      });

    case ActionTypes.DECREASE_COUNT:
      return Object.assign({}, state, {
        count: state.count - action.number1,
      });

    default:
      return state;
  }
}
