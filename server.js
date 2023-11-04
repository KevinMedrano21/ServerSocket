const net = require('net');
const server = net.createServer();

let mensajes = [];

// Establece el puerto y host del servidor directamente
const PORT = process.env.PORT || 3000;
//const HOST = process.env.HOST || '100.20.92.101'; // Cambia 'localhost' al host correcto si es diferente

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        const mensaje = data.toString('utf-8');
        console.log('mensaje recibido del cliente: ' + mensaje);
        mensajes.push(mensaje);

       socket.write(mensajes.join('\n') + '\n');

    });

    socket.on('close', () => {
        console.log('cliente desconectado');
    });

    socket.on('error', (err) => {
        console.log(err.message);
    });
});

server.listen(PORT, HOST, () => {
    console.log('servidor escuchando en puerto', PORT);
});
