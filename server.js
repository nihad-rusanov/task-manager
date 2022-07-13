const express = require("express");
const app = express();
const port = 3000;
const index = require("./route/tasks")


app.listen(port, () => console.log(` is running on ${port}`));

app.use(express.json())

app.use("/api/v1/tasks",index)



const connectDatabse = require("./db/db");

connectDatabse();
