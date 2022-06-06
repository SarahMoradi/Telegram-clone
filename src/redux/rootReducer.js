import activeChatReducer from './chatController/activeChatReducer';
import { combineReducers } from 'redux';
import userReducer from './user/UserReducer';

const rootReducer = combineReducers({
  users: userReducer,
  activeChat: activeChatReducer
});
export default rootReducer;
