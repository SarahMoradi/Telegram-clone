import { combineReducers } from 'redux';
import userReducer from './user/UserReducer';

const rootReducer = combineReducers({
  users: userReducer,
});
export default rootReducer;
