const path = require('path');

const express = require('express');

const mainRoutes = require('./routes/prove02-routes.js');
const { dirname } = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public', 'scripts', 'main.js')))

app.use(mainRoutes);

app.listen(3000)