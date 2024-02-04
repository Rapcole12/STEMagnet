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
            TypeOfUser: req.body.TypeOfUser,
            Gender: req.body.Gender,
            Age: req.body.Age, 
            Major: req.body.Major, 
            Experience: req.body.Experience,
            Quote: req.body.Quote,
            AboutMe: req.body.AboutMe,
            MentorPreference: req.body.MentorPreference
        }
        
        const SignUpTheUser = await signupUser.create(newUser);
        res.status(201).json({ success: true, message: 'User Created Successfully!', user: SignUpTheUser});
    } catch(error){
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
})

router.put('/create_user/:id', async(req, res) => {
    const { id } = req.params

    const result = await signupUser.findByIdAndUpdate(id, req.body)

    if(!result){
        return res.status(404).json({message: "User not Found"})
    }

    return res.status(200).send({message: "User Updated Successfully"})
})


export default router;