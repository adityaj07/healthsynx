import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    username:{
        type: String,
        required:[true, "Please provide an username"],
        unique:true,
        select: false,
    },
    email:{
        type: String,
        required:[true, "Please provide an email"],
        unique:true,
        select: true,
        select: false,
    },
    password:{
        type: String,
        required:[true, "Please provide a password"],
        select: true ,
        select: false,  
    },
    isVerified:{
        type: Boolean,
        default: false,
        select: false,
    },
    
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    veirfyToken: String,
    veirfyTokenExpiry: Date,

}, {timestamps: true})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;