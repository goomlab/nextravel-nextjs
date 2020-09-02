const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});

const handler = app.getRequestHandler();

app.prepare()
.then( () => {
  const server = express();

  // server.get('/posts/:id', (req, res) => {
  //   console.log('server params', req.params)
  //   app.render(req, res, '/post', {id: req.params.id});
  // });

  server.get('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(3000, err => {
    if(err) throw err;
    console.log('Ready on server');
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});