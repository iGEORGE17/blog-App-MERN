const express = require('express')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.get('/', (req, res) => {
    res.json('Hello world!')
})


app.listen(process.env.PORT || 4040, () => console.log('server running....'))