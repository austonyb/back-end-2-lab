const housesDB = require('./db.json') // database


module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(housesDB)
    },
    deleteHouse: (req, res) => {
        const deleteId = req.params.id
        let index = housesDB.findIndex(element => element.id === +deleteId)
        housesDB.splice(index, 1)
        res.status(200).send(housesDB)
    },
    createHouse: (req, res) => {
        const {id, address, price, imageURL} = req.body
        
        //this code commented below is what the lab had us make, however I updated it so that Id's are created using Date(). Now the code doesn't break after 4 houses in the database.

        // let greatestId = -1
        // for (let i = 0; i < housesDB.length; i++) {
        //     if (housesDB[i].id > greatestId) {
        //         greatestId = housesDB[i].id
        //     }
        // }

        // let nextId = upcomingId +1

        //Gives all future entries in the houses 'database' have an ID that is equal to the date epoch number generated on the next line.

        let idMaker = new Date()
        idMaker = +idMaker

        let newHouse = {
            id: idMaker,
            address,
            price,
            imageURL
        }
        // console.log(newHouse.id)
        housesDB.push(newHouse)
        res.status(200).send(housesDB)
    },
    updateHouse: (req, res) => {
        let type = req.body.type
        let id = req.params.id
      
        let index = housesDB.findIndex(element => element.id === +id)

        if (type === 'plus'){
            housesDB[index].price = +housesDB[index].price + 10000
            res.status(200).send(housesDB)
            // console.log(`should have added $10k to ${id}`)
        } else if (type === 'minus') {
            housesDB[index].price = +housesDB[index].price - 10000
            res.status(200).send(housesDB)
            // console.log(`should have subracted $10k to ${id}`)
        }else {
            res.sendStatus(400)
        }
    }
}