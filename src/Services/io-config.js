import { io } from 'socket.io-client';

const mainSocket = io('ws://localhost:4000', {
  auth: { token: localStorage.getItem('token') },
});

mainSocket.on('connect', () => {
  console.log('connect', mainSocket.id);
});

mainSocket.on('disconnect', () => {
  console.log('disconnect', mainSocket.id);
});

export default mainSocket;
