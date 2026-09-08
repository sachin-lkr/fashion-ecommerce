import  {
    createUser,
    findUserById,
    getUserByEmail,
    getUserProfileToken,
    getAllUser,
} from "../services/userService.js"

const getUserProfileController = async (req,res)=>{
    try {
          
        const token = req.headers.authorization?.split(" ")[1];
          

        if(!token){
            return res.status(404).send({error:"token not found"})
        };

        const user = await getUserProfileToken(token);
        
        return res.status(200).send(user)
    } catch (error) {
          console.log("PROFILE ERROR:", error);
        return res.status(500).send({error:error.message})
    }
};


const getAllUsersController = async(req,res)=>{
    try {
        const  users= await getAllUser();
         return res.status(200).send(users);
        
    } catch (error) {
       return res.status(500).send({error:error.message}) 
    }
};

export {getAllUsersController,getUserProfileController}
