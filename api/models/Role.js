import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
    {
        role:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model("roles", RoleSchema); //need to be roles
