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
hobbySchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
});
const Hobbies = mongoose.model("Hobbies",hobbySchema);

export {Hobbies};