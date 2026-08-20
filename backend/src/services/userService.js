import bcrypt from "bcrypt"
import User from "../models/userModel.js";
import jwtProvider from "../config/jwtProvider.js";
const createUser= async(userData)=>{
    try {
        let {firstName,lastName,email,password}=userData;

        const isUserExist=await User.findOne({email});

        if(isUserExist){
            throw new Error("user already exist with email",email)
        };
        password=await bcrypt.hash(password,8)

        const user= await User.create({firstName,lastName,email,password});
        console.log("created user",user);
        return user
    } catch (error) {
        throw new Error(error.message);
    }
};


const findUserById=async(userId)=>{
    try {
        const user =await User.findById(userId).populate("address");
        if(!user){
            throw new Error("user not fount with Id :", userId)
        }
        return user
        
    } catch (error) {
       throw new Error(error.message); 
    }

};


const getUserByEmail=async(userEmail)=>{
    try {
        const user =await User.findOne(userEmail);
        if(!user){
            throw new Error("user not fount with Email :", userEmail)
        }
        return user
        
    } catch (error) {
       throw new Error(error.message); 
    }

};

const getUserProfileToken= async(token)=>{
    try {
        const userId= getUserIdFromToken(token);
        const user =await findUserById(userId)
         if(!user){
            throw new Error("user not fount with Id :", userId)
        }
        return user;
        
    } catch (error) {
        throw new Error(error.message); 
    }

};

const getAllUser =async ()=>{
    try {
        const users = await User.find();
        return users
        
    } catch (error) {
         throw new Error(error.message);  
    }
}

const userService= {
    createUser,
    findUserById,
    getUserByEmail,
    getUserProfileToken,
    getAllUser,
};
export default userService;