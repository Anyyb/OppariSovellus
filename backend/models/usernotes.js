import mongoose from "mongoose";
const userSchema = mongoose.Schema ({
    username:{
        type: String,
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
            ref:'Hobbies',
            required: false
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            required: false
        }
    ],
    friendsRequest: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        }
    ],
    completedTasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
            required: false
        }
    ],
});
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
    }
});
const User = mongoose.model("User",userSchema);
export {User};