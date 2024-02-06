import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 13);
    const newUser = new User({ role: 'user', username, email, password: hashedPassword, });


    try {
        const existingUser = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });
        if (existingUser) {
            return next(errorHandler(409, "Username is not available"))
        }
        if (username.length < 2) return next(errorHandler(422, 'Username must contain at least 2 characters'));

        if (existingEmail) {
            return next(errorHandler(409, "Email is not available"))
        }

        if (password.length < 8) return next(errorHandler(422, 'Password must contain at least 8 characters'));

        await newUser.save();
        res.status(201).json("User created successfully");


    } catch (err) {
        console.error("Error:", err);
        next(errorHandler(550, 'error from the function.'));

    }
};

export const signin = async (req, res, next) => {
    const { identifier, password } = req.body;

    try {
        let validUser;

        
        const validEmail = await User.findOne({email: identifier  });
        const validUsername = await User.findOne({username: identifier});

        if(validEmail){
            validUser = validEmail
        }else if(validUsername){
            validUser = validUsername;
        }else{
            validUser = null
        }

        if (!validUser) {
            return next(errorHandler(404, "Username or Email is invalid"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
            return next(errorHandler(401, "Password is invalid"));
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);

    } catch (error) {
        next(error);
        console.log(error);
    }
};


  // if (email) {
        //     const validEmail = await User.findOne({ email });
        //     if (validEmail) {
        //         validUser = validEmail;
        //     } else {
        //         return next(errorHandler(404, "Email is invalid"));
        //     }
        // } else if (username) {
        //     const validUsername = await User.findOne({ username });
        //     if (validUsername) {
        //         validUser = validUsername;
        //     } else {
        //         return next(errorHandler(404, "Username is invalid"));
        //     }
        // }
