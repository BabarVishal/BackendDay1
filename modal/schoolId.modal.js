import mongoose from "mongoose";

const schoolId = new mongoose.Schema(
    {
        fistName:{
            type: String,
            require: true
        },
        lastName:{
            type: String,
            require: true
        },
        Dob:{
            type: Date,
            require: true
        },
        villageName:{
            type: String,
            require: true
        }

    },{
        timestamps: true
    }
);

export const Id = mongoose.model("Id", schoolId);
