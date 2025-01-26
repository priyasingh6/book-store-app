import Books from "../model/book.model.js";

export const getBook = async (req,res)=>{
    try {
        const book = await Books.find()
        res.status(200).json(book)
    } catch (error) {
        
    console.log("Error :" ,error);
    res.status(500).json({message:"something went wrong"})
    }
    
}

export default getBook