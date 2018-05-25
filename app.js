const express = require("express");


const app = express();


app.listen(3000,"192.168.1.11");

app.use(express.static("./dist/"))


