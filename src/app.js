const express = require('express');
const hostname = "0.0.0.0";
const port = 3000

const server = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/apinode");

server.use(express.json());
server.use(express.urlencoded());

const postRoute = require("./api/routes/postRoute");
const getRoutes = require("./api/routes/getRoutes");
const updateRoutes = require("./api/routes/updateRoutes");
const deleteRoutes = require("./api/routes/deleteRoutes");
const commentRoutes = require("./api/routes/commentRoutes"); 

postRoute(server);
getRoutes(server);
updateRoutes(server);
deleteRoutes(server);
commentRoutes(server);


server.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})