var net = require('net');
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())


const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
    broadcast("express testing\n");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// var server = net.createServer(function(socket) {
// 	socket.write('Echo server\r\n');
// 	socket.pipe(socket);
// });

var server = net.createServer(function (socket) {

});

var clients = [];

function broadcast(message) {
    clients.forEach(function (client) {
      client.write(message);
    });
  }

//dont forget \n at end of send@@@@@@@@@

server.on('connection', function (sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    clients.push(sock);
    broadcast("SWAGGG\n");
});

server.on('close', function (sock) {
    clients.splice(clients.indexOf(socket), 1);
});

// server.on('reset', function (sock) {
//     console.log('got the resetr broooo');
// });

server.listen(3000, '127.0.0.1');
