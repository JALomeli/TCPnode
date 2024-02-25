const net = require('net');


const server = net.createServer(socket => {
  console.log('Cliente conectado');


  socket.on('data', data => {
    console.log(`Cliente dice: ${data}`);
  });

 
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
});
