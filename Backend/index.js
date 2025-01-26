import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRoute from './route/book.route.js'
import UserRoute from './route/user.route.js'




const app = express()
dotenv.config();
app.use(cors());
app.use(express.json())



const PORT =process.env.PORT ||4000
const URL = process.env.MONGO_URL
app.get('/', (req, res) => {
  res.send('book store')
})

// connect to mongodb

 try{
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log("database connected")
 }catch(error){
 console.log("Error :" , error);
 
 }

//  defining routes   

// api is /book
app.use('/book',bookRoute)

// api is /users
app.use('/users',UserRoute)

app.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}`)

})