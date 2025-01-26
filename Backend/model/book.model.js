import mongoose, { Schema, SchemaType } from "mongoose";

const bookSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    imageUrl:String,
    title:String
})
const Books=mongoose.model("books",bookSchema)

export default Books
