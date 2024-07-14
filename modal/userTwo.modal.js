import mongoose from "mongoose";

const userSchemaSecond = new mongoose.Schema(
    {
      userName:{
        type: String,
        require: true,
      },
      lastName:{
        type: String,
        require: true,
      },
      email:{
        type: String,
        require: true,
        unique: true
      },
      passworld:{
        type: String,
        require: true,
        unique: true 
      },
      loginDeta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "login"
      }
    },
     {timestamps: true});

export const UserSecond = mongoose.model("UserSecond", userSchemaSecond )