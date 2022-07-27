const express = require('express');
const app = express();
const port = 3000;
const http = require('http');

app.use((req, res, next) => require("./src/app")(req, res, next));

const chokidar = require('chokidar');
const watcher = chokidar.watch('./src', {
  persistent: false,
  ignoreInitial: true
});

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Limpando o cache dos modulos da pasta src.");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

const server = http.createServer(app);
server.listen(port, 'localhost', function(error) {
  if (error) throw error;
  const addr = server.address();
  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
