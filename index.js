const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 3333;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Connected on port: ${port}`)
})
