const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectDB = require('./config/database');
const mainRoutes = require('./routes/home');

require('dotenv').config({path: './config/.env'})

connectDB()


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())




app.use('/', mainRoutes)

    // app.get('/',(request, response)=>{
    //     db.collection('rescues').find().sort({likes: -1}).toArray()
    //     .then(data => {
    //         response.render('index.ejs', { info: data })
    //     })
    //     .catch(error => console.error(error))
    // })

    // app.post('/addRescue', (request, response) => {
    //     db.collection('rescues').insertOne({primaryBreed: request.body.primaryBreed,
    //     primaryName: request.body.primaryName, likes: 0})
    //     .then(result => {
    //         console.log('Rescue Added')
    //         response.redirect('/')
    //     })
    //     .catch(error => console.error(error))
    // })

    // app.put('/addOneLike', (request, response) => {
    //     db.collection('rescues').updateOne({primaryBreed: request.body.primaryBreedS, primaryName: request.body.primaryNameS,likes: request.body.likesS},{
    //         $set: {
    //             likes:request.body.likesS + 1
    //           }
    //     },{
    //         sort: {_id: -1},
    //         upsert: true
    //     })
    //     .then(result => {
    //         console.log('Added One Like')
    //         response.json('Like Added')
    //     })
    //     .catch(error => console.error(error))
    
    // })

    // app.delete('/deleteRescue', (request, response) => {
    //     db.collection('rescues').deleteOne({primaryBreed: request.body.primaryBreedS})
    //     .then(result => {
    //         console.log('Rescue Deleted')
    //         response.json('Rescue Deleted')
    //     })
    //     .catch(error => console.error(error))
    
    // })
    
    app.listen(process.env.PORT, ()=>{
        console.log('Server is running, you better catch it!')
    }) 