import mongoose from "mongoose";

const RoleSchema = mongoose.Schema(
    {
        role:{
            type:String,
            require:true
        }
    },
    {
        timestamps:true
    }
)