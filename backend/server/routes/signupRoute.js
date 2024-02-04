import express from "express"
import { signupUser } from "../models/SignUpModel.js";

const router = express.Router();


//Route to Post The Data to DataBase
router.post('/create_user', async(req, res) => {
    try{
        console.log(req.body)
        if(!req.body.FirstName || !req.body.LastName || !req.body.Email || !req.body.Password || !req.body.TypeOfUser)
        {
            return res.status(400).send({
                message:
                "Send all required fields: First Name, LastName, Email, Password, and UserType",
            })
        }
        const newUser = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName, 
            Email: req.body.Email, 
            Password: req.body.Password,
            TypeOfUser: req.body.TypeOfUser
        }
        
        const SignUpTheUser = await signupUser.create(newUser);
        res.status(201).json({ success: true, message: 'User Created Successfully!', user: SignUpTheUser});
    } catch(error){
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
})

export default router;