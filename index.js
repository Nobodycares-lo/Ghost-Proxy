//get out of here you skiddddd
import wisp from "wisp-server-node"
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import express from 'express';

//default port is 8080 for some reason
const PORT = 8080
const app = express();
const __dirname = process.cwd();

//acting like google
app.use("/search/", express.static(uvPath));
//https://en.wikipedia.org/wiki/Epoxy
app.use("/epox/", express.static(epoxyPath));
//bearux
app.use("/bearux/", express.static(baremuxPath));

//wisp go brrrr
app.on("upgrade", (req, socket, head) => {
    wisp.routeRequest(req, socket, head);
});

app.use(express.static(__dirname + '/public'));

//404 Proxo not found
app.get((req, res) => {
    res.status(404);
    res.sendFile("/public/404.html", { root: __dirname });
  });

  //paths i think 
  app.get('/', (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname }); 
  })
  
  app.get('/s/', (req, res) => {
    res.sendFile("/public/school/", { root: __dirname });
  })

  app.get('/w/', (req, res) => {
    res.sendFile("/public/browser.html", { root: __dirname });
  })

  app.get('/b/', (req, res) => {
    res.sendFile("/public/blocked.html", { root: __dirname });
  })

  app.get('/c/', (req, res) => {
    res.sendFile("/public/settings.html", { root: __dirname });
  })

  app.get('/a/', (req, res) => {
    res.sendFile("/public/algebra.html", { root: __dirname });
  })

  app.get('/q/', (req, res) => {
    res.sendFile("/public/g.html", { root: __dirname });
  })


  app.listen(PORT);

// gracefulshutdownthigy
  process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      debug('HTTP server closed')
    })
  })