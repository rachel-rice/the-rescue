const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'rescue'

    async function connectToDatabase() {
        try {
            const client = await MongoClient.connect(dbConnectionStr);
            console.log(`Connected to ${dbName} Database`);
            db = client.db(dbName);
        } catch (error) {
            console.error("Error connecting to database:", error);
        }
    }
    
    connectToDatabase();
    
// ***see below for promise

// MongoClient.connect(dbConnectionStr, { 
    
//     useUnifiedTopology: true,

//  })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })

    // async function connectToMongoDB() {
    //     try {
    //       await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    //       console.log('Connected to MongoDB');
    //     } catch (error) {
    //       console.error('MongoDB connection error:', error);
    //     }
    //   }

    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true })) 
    app.use(express.json())

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})