const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = "express-graphql";
const port = process.env.PORT || 8000;
const app = express();

app.listen(port, console.log(`Listening on port ${port}`));
