const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('templates'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


