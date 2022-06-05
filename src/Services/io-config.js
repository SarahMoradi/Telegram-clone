import { io } from 'socket.io-client';

const mainSocket = io('ws://localhost:4000', {
  auth: { token: localStorage.getItem('token') },
});

mainSocket.on('connect', () => {
  console.log(mainSocket.id);
});

mainSocket.on('disconnect', () => {
  console.log(mainSocket.id);
});

mainSocket.on('message', (...data) => {
  console.log(data);
});

export default mainSocket;
