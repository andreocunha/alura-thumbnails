import socketIOClient from 'socket.io-client';

// const socket = socketIOClient("http://localhost:4000");
// const socket = socketIOClient("192.168.15.25:4000");
const socket = socketIOClient("https://shotadvisor.com.br");

export { socket };