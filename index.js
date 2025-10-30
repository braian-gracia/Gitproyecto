const express = require('express');
const comicsController = require('./controllers/comics');
const comicsRouter = require('./routes/comics');
const abilityRouter = require('./routes/ability');
const app = express();
process.loadEnvFile()

const port = 3000;

app.use(express.json());

app.use('/comics', comicsRouter);
app.use('/ability', abilityRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});