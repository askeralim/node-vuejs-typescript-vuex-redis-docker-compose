import io from 'socket.io-client';

const socketConnection = io('http://localhost:3001/');

export default socketConnection;
