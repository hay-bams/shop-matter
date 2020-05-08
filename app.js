const express = require('express')

const app = express();

const PORT = 3000

app.get('/', function(req, res) {
    return res.send('Hello World, I am Ayobami')
})

app.listen(PORT, function() {
    console.log(`server is listening on port ${PORT}`)
})