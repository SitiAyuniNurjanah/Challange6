import { combineReducers } from "redux";
import authLoginGoogle from "./auth/authLoginGoogle";

const rootReducer = combineReducers({
  authGoogle: authLoginGoogle,
});

export default rootReducer;
