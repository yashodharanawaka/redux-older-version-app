import { combineReducers } from "redux";

import dramasReducer from "./dramasReducer";

const rootReducer = combineReducers({
  dramas: dramasReducer,
});

export default rootReducer;
