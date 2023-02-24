const {mongoClient} = require('mongodb');

let dbConnection 







module.exports = {
    // establish a connection with a local database
    connectToDb: (cb) => {
        mongoClient.connect('mongodb://localhost:27017/cinema')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    // return database connection
    getDb: () => dbConnection
}