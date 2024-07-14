import mongoose from "mongoose";

const loginDeta = new mongoose.Schema(
    {
        userName:{
            type: String,
            require: true,    
        },
        lastName: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        passworld: {
            type: String,
            require: true,
            unique: true
        },
        gender: {
            type: String,
            enum : ["m", "f", "o"],
            require: true
        }


    },
    {timestamps: true}
);

export const login = mongoose.model("login", loginDeta);