import { User } from '../models/user.js';
import bcrypt from "bcrypt";

const getUsers = async ( req,res ) => {
    try {
        const users = await User.find({}).populate("hobbies",{name:1});
        if(!users)return res.status(404).json({ error: "Error user not found" });
        res.json(users);
    } catch (error){
        res.status()
    }
}
const addUser = async ( req, res ) => {
    try {
        const{ username, email, password}= req.body;
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password,saltRounds);

        if(req.body.username === undefined || req.body.password === undefined ){
            return res.status(400).json({ error: "Error content missing"})
        }
        const user = new User({
            username,
            email,
            passwordHash,
        });

        const savedUser = await user.save()
        res.status(201).json(savedUser);
    } catch ( error ){
        return res.status(400).json({ error:"Error creating user"});
    }

}
export {getUsers,addUser};


