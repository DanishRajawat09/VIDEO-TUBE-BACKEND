// require('dotenv').config({path : "./env"})
import dotenv  from "dotenv";
import connectDB from "./db/connectDB.js";
 
dotenv.config({
    path : "./env"
})

connectDB()


















/*

import express from "express"
const app = express()
;(async()=>{
try {
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
 app.on("error" , (error) => {
   console.log("my app is not able to talk to database"  , error);
   throw error
 }
 )
 app.listen(process.env.PORT,() => {
   console.log(`the app is listening on ${process.env.PORT}`)
 }
 )
} catch (error) {
    console.error("ERROR IN : ", error);
    
}
})()

*/