import mongoose, {Schema} from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    roles:{
        type: [Schema.Types.ObjectId],
        require:true,
        ref:"Role"
    }
    
}, { timestamps: true }
);

export default mongoose.model("User", UserSchema);