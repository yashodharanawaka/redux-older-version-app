// Import all actions
import * as actions from "../Actions/dramasActions";

export const initialState = {
  dramas: [],
  loading: false,
  hasErrors: false,
};

export default function dramasReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DRAMAS:
      return { ...state, loading: true };
    case actions.GET_DRAMAS_SUCCESS:
      return { dramas: action.payload, loading: false, hasErrors: false };
    case actions.GET_DRAMAS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
