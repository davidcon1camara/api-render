const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Juan', email: 'juan@example.com' },
    { id: 2, name: 'Maria', email: 'maria@example.com' }
  ]);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
