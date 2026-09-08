import {generateToken,getUserIdFromToken} from "../config/jwtProvider.js";
import {findUserById} from "../services/userService.js"

const authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if(!token){
            return req.status(404).send({error:"token not found...."})
        }

        const userId = getUserIdFromToken(token);
        const user=await findUserById(userId);

        req.user=user;
    } catch (error) {
        return res.status(500).send({error:error.message});
    };

    next();
};

export default authenticate;