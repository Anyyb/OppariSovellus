import { Hobbies } from "../models/hobbies.js";
import { User } from "../models/user.js";

const getHobbies = async ( req,res ) => {
    try {
        const hobbies = await Hobbies.find({}).populate("user",{name:1});
        if(!hobbies)return res.status(404).json({ error: "Error hobby not found" });
        res.json(hobbies);
    } catch (error){
        res.status()
    }
}
const addHobby = async ( req, res ) => {
    try {
        
        const{ name, userId}= req.body;
        
        if(req.body.name === undefined){
            return res.status(400).json({ error: "Error content missing"})
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const hobby = new Hobbies({
           name,
           user: userId,
        });

        const savedHobby = await hobby.save()
        user.hobbies.push(savedHobby.id);
        await user.save();
        res.status(201).json(savedHobby);
        
    } catch ( error ){
        return res.status(400).json({ error:"Error adding hobby"});
    }

}
export {getHobbies,addHobby};