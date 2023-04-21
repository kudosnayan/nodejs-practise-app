const express = require('express')
const http = require('http')
const bodyParser = require("body-parser");
const routes = require('./routes/api')
const database = require('./database/db')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes);
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})