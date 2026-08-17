import userService from "../services/userService.js"

const getUserProfile = async (req,res)=>{
    try {
        const jwt = req.header.authorization?.split(" ")[1];

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        };

        const user = await userService.getUserProfileToken(jwt);
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
};


const getAllUsers = async(req,res)=>{
    try {
        const  users= await userService.getAllUser();
        return res.status(500).send({error:error.message})
    } catch (error) {
        
    }
};

export {getAllUsers,getUserProfile}