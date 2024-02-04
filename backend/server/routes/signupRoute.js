import express from "express"
import { signupUser } from "../models/SignUpModel.js";
import {MongoClient} from 'mongodb'
import 'dotenv/config';

const router = express.Router();

const client = new MongoClient(process.env.mongoDBUserURL, { useNewUrlParser: true, useUnifiedTopology: true })
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

router.post('/SignIn/authenticate', async (req, res) => {
    const {Email, Password} = req.body
    try{
        await client.connect()

        const database = client.db('UserData')
        const collection = database.collection('users')

        const user = await collection.findOne({
            Email: Email,
            Password: Password
        })

        if (user) {
            res.status(200).json({ success: true, message: 'Authentication successful', userId: user._id});
        } else {
            res.status(401).json({ success: false, message: 'Authentication failed' });
        }

    }
    catch (error) {
        console.error('Error authenticating user:', error)
        res.status(500).json({success: false, message: 'Internal Server Error'})
    }
    finally{
        await client.close
    }
})

export default router;