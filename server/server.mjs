import fs from 'fs';
import https from 'https';
import express from 'express';
import next from 'next';
import morgan from 'morgan';
import helmet from 'helmet';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", ...(dev ? ["'unsafe-eval'"] : [])],
        },
      },
    }),
  );

  server.use(morgan('combined'));
  server.use(express.json());

  // All API route

  // Use Next.js to handle all other routes
  server.all('*', (req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000;

  if (dev) {
    https
      .createServer(
        {
          key: fs.readFileSync('key.pem'),
          cert: fs.readFileSync('cert.pem'),
        },
        server,
      )
      .listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
      });
  } else {
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  }
});
