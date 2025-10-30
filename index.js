const express = require('express');
const comicsController = require('./controllers/comics');
const comicsRouter = require('./routes/comics');
const abilityRouter = require('./routes/ability');
const typeRouter = require('./routes/type');
const speciesRouter = require('./routes/pokemon-species');
const app = express();
process.loadEnvFile()

const port = 3000;

app.use(express.json());

app.use('/comics', comicsRouter);
app.use('/ability', abilityRouter);
app.use('/type', typeRouter); 
app.use('/pokemon-species', speciesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});