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

    app.get('/',(request, response)=>{
        db.collection('rescues').find().sort({likes: -1}).toArray()
        .then(data => {
            response.render('index.ejs', { info: data })
        })
        .catch(error => console.error(error))
    })

    app.post('/addRescue', (request, response) => {
        db.collection('rescues').insertOne({primaryBreed: request.body.primaryBreed,
        primaryName: request.body.primaryName, likes: 0})
        .then(result => {
            console.log('Rescue Added')
            response.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/addOneLike', (request, response) => {
        db.collection('rescues').updateOne({primaryBreed: request.body.primaryBreedS, primaryName: request.body.primaryNameS,likes: request.body.likesS},{
            $set: {
                likes:request.body.likesS + 1
              }
        },{
            sort: {_id: -1},
            upsert: true
        })
        .then(result => {
            console.log('Added One Like')
            response.json('Like Added')
        })
        .catch(error => console.error(error))
    
    })

    app.delete('/deleteRescue', (request, response) => {
        db.collection('rescues').deleteOne({primaryBreed: request.body.primaryBreedS})
        .then(result => {
            console.log('Rescue Deleted')
            response.json('Rescue Deleted')
        })
        .catch(error => console.error(error))
    
    })
    
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})