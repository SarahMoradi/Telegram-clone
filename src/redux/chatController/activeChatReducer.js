import { ACTIVE_CHAT } from './activeChatTypes';

const initialState = {
  id: '',
};

const activeChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CHAT:
      return { id: action.payload};
    default:
      return state;
  }
};

export default activeChatReducer;
