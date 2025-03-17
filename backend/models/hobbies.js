import mongoose from "mongoose";

const hobbySchema = mongoose.Schema ({
    name:{
        type:String,
        required: true,
    },
    user:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]

});
const Hobbies = mongoose.model("Hobbies",hobbySchema);

export {Hobbies};