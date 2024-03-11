import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },

},{timestamps:true})

 const UserModel=mongoose.model("User",UserSchema);
 export default UserModel;