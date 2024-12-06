import mongoose from "mongoose";
import { DataBase_name } from "../Constant.js";
const connectionwithdb =async()=>{
try {
    const connetionresult = await mongoose.connect(`${process.env.MONGODB_URL}/${DataBase_name}`)
    console.log("connection successfully ..",connetionresult.connection.host)
} catch (error) {
    console.log(error.message)
    throw error
}
}

export default  connectionwithdb;