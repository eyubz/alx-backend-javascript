/*
nside the file named full_server/server.js, create a small Express server:

It should use the routes defined in full_server/routes/index.js
It should use the port 1245

*/

const express = require("express");

const route = require("./routes/index");

const app = express();

app.use(route);

app.listen(1245);
