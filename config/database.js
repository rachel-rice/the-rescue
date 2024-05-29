const mongoose = require('mongoose')

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DB_STRING, 
      )
  
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }

// let db,
//     dbConnectionStr = process.env.DB_STRING,
//     dbName = 'rescue'

//     async function connectToDatabase() {
//         try {
//             const client = await MongoClient.connect(dbConnectionStr);
//             console.log(`Connected to ${dbName} Database`);
//             db = client.db(dbName);
//         } catch (error) {
//             console.error("Error connecting to database:", error);
//         }
//     }
    
//     connectToDatabase();

module.exports = connectDB