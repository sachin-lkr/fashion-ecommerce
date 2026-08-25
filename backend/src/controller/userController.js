import  {
    createUser,
    findUserById,
    getUserByEmail,
    getUserProfileToken,
    getAllUser,
} from "../services/userService.js"

const getUserProfileController = async (req,res)=>{
    try {
        const jwt = req.header.authorization?.split(" ")[1];

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        };

        const user = await getUserProfileToken(jwt);
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
};


const getAllUsersController = async(req,res)=>{
    try {
        const  users= await getAllUser();
        return res.status(500).send({error:error.message})
    } catch (error) {
        
    }
};

export {getAllUsersController,getUserProfileController}
