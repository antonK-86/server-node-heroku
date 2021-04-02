const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors=require("cors"); //для разрешения соединения клиента с сервером

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://antonk:221077ank@cluster1.qk1ky.mongodb.net/films?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

const dbConnection = mongoose.connection;

dbConnection.on("error", (err) => console.log("ERROR connect " + err));
dbConnection.once("open", () => console.log("Connect to Data Base films"));

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`Server started on ${PORT} port\nhttp://localhost:5000/`)
);
