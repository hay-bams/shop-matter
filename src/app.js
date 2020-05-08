import express from 'express'
import dotenv from 'dotenv';
import connectDb from './models'

dotenv.config()

connectDb().then(() => {
    console.log('Database connected')
})

const app = express();

const PORT = 3000

app.get('/', function(req, res) {
    return res.send('Shop Matter API')
})

app.listen(PORT, function() {
    console.log(`server is listening on port ${PORT}`)
})