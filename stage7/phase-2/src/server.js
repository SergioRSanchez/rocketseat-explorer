const express = require('express');

const app = express();

const PORT = 3333;

app.get('/messages/:id/:user', (req, res) => {
  const { id, user } = req.params;
  res.send(`
    Id: ${id}.
    User: ${user}.
  `);
})

app.get('/users', (req, res) => {
  const { page, limit } = req.query;
  res.send(`
    Page: ${page}.
    Limit: ${limit}.
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
})