 import User from "../model/user.model.js";
 import bcrypt from "bcryptjs";   //  to secure the password

export const signup = async (req, res) => {
    try {
        console.log("Request Body:", req.body);  // Add this to debug the received data
        const { Fullname, Email, Password, ReenterPassword } = req.body;

        if (!Fullname || !Email || !Password || !ReenterPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (Password !== ReenterPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);

        const newUser = new User({
             Fullname:Fullname, 
             Email:Email, 
             Password:hashedPassword, 
             ReenterPassword:hashedPassword});
        await newUser.save();

        res.status(201).json({ message: "User created successfully",user:{
            _id:newUser._id,
            Fullname:newUser.Fullname,
            Email:newUser.Email,
            Password:newUser.Password,
            ReenterPassword:newUser.ReenterPassword

        } });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }

};

export const login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return res.status(400).json({ message: "All fields are required" });}

        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(Password, user.Password);
        if (!user|| !isPasswordValid) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({ message: "Login successful" ,user:
                {  _id:user._id,
                    Fullname:user.Fullname,
                    Email:user.Email
                }
            });
        }
    } catch (error) {
        console.log("Error:" +error.message);
        res.status(500).json({ message: "Something went wrong", error: error.message });
        
    }


}



