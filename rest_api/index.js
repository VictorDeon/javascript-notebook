const express = require('express');
const app = express();
const port = 3000;
const http = require('http');

if (process.env.NODE_ENV !== 'production') {
  const chokidar = require('chokidar');
  const watcher = chokidar.watch('./src', {
    persistent: false,
    ignoreInitial: true,
    ignored: ['node_modules', 'build']
  });

  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log("Limpando o cache dos modulos da pasta src e atualizando o servidor!");
      Object.keys(require.cache).forEach(function(id) {
        const localId = id.substring(process.cwd().length);
        if (!localId.match(/^\/src\//)) return;
        delete require.cache[id];
      });
    });
  });
}

app.use((req, res, next) => require("./src/routes")(req, res, next));
const server = http.createServer(app);
server.listen(port, 'localhost', function(error) {
  if (error) throw error;
  const addr = server.address();
  console.log('Rodando em http://localhost:%d', addr.port);
});
