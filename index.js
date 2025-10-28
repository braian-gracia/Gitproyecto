const express = require('express');
const comicsController = require('./controllers/comics');
const comicsRouter = require('./routes/comics');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/comics', comicsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});