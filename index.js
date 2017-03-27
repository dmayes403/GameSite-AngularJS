const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const port = 3333;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Connected on port: ${port}`)
})

const connectionString = "postgres://dmayes@localhost/GameSite";
const massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance);

module.exports = app;

const controller = require('./srvrControllers/srvrCtrl.js')
app.get('/getTrendingGames', controller.getTrendingGames);
