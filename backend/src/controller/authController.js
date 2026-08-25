import {
    createUser,
    getUserByEmail,
   
} from "../services/userService.js";
import {generateToken,getUserIdFromToken} from "../config/jwtProvider.js";
import bcrypt from "bcrypt";
import {
    createCart,
} from "../services/cartService.js";

const registerController = async (req, res) => {
    try {
        const user = await createUser(req.body);
        const jwt = generateToken(user._id);

        await createCart(user);
        return res.status(200).send({ jwt, message: "register success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }

    const login = async (req, res) => {
        const { password, email } = req.body;
    };
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);
        if (!user) {
            return res
                .status(404)
                .send({ message: "user not found with email", email });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "invalid password...." });
        }

        const jwt = generateToken(user._id);
        return res.status(200).send({ message: "login success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

export { loginController, registerController };

