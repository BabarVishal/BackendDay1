import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName:{
            Type: String,
            require: true,
            unique: true,
            lowercase: true
        },
        email:{
            type: String,
            require: true,
            unique: true
        },
        passWorld:{
            type: String,
            require: [true, "passWorld must be require"]
        },

    }, {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema);