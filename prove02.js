const express = require('express');

const mainRoutes = require('./routes/prove02-routes.js');

const app = express();

app.use(mainRoutes);

app.listen(3000)