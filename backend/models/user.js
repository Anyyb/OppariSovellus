import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    username:{
        type:String,
        required: true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    passwordHash:{
        type: String,
        required: true,
    },
    hobbies:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Hobbies'
        }
    ]

});
const User = mongoose.model("User",userSchema);

export {User};