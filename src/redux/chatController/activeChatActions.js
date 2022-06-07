import { ACTIVE_CHAT } from './activeChatTypes';

export function activeChat(id) {
  return {
    type: ACTIVE_CHAT,
    payload : id,
  };
}
