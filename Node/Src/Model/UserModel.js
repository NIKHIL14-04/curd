import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    age:{
        type:Number,
        require:true,
    },
})
const UserModel = mongoose.model("user",UserSchema)
export default UserModel
