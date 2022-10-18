const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const { getAllHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')

app.get('/api/houses', getAllHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(4004, () => {
    console.log('up on 4004!')
})