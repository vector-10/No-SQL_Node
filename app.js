const express                = require('express');
const app                    = express();
const { connectToDb, getDb } = require('./db')


connectToDb((err) => {
    if (!err) {
        app.listen(PORT, (req, res) => {
            console.log(`server is listening on port ${PORT}`)
        })        
        db = getDb()
    }

})





// get requests routes
app.get('/movies', (req, res) => {

    db.collection('movies')
    .find()
    .sort({ author: 1 })
    .forEach(book => books.push(book))
    .then(() => {
        res.status(200).json({movies})

    })
    .catch(() =>{
        res.status(500).json({error: `could not fetch the documents`})
    })

    res.json({mesage:"Welcome godBlaize"})
})


app.get('/movies/:id', (req, res) => {
    // req.params.id
    if (ObejectId.isValid(req.params.id)) {
        db.collection('movies')
          .findOne({_id: ObjectId(req.params.id) })
          .then(doc => {
            res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error: 'could not fetch the document'})
    })

    } else {
        res.status(500).json({error: 'Not a valid document id'})
    }
})



// Port declaration
const PORT = 5000 || process.env.PORT



