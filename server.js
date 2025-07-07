const { createServer } = require ('node:http');
const app = require('./app');

const server = createServer(app);

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at 127.0.0.1:3000/');
});