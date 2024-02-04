import express from "express"
import {MongoClient} from 'mongodb'
import 'dotenv/config';
import { signupUser } from "../models/SignUpModel.js";

const router = express.Router();

const client = new MongoClient(process.env.mongoDBUserURL, { useNewUrlParser: true, useUnifiedTopology: true })

router.post('/authenticate', async (req, res) => {
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

router.get('/getUser/:id', async (request, response) => {
    try {
        const { id } = request.params

        const User = await signupUser.findById(id)

        return response.status(201).json({ success: true, message: 'User Created Successfully!', user: User});
    }
    catch(error) {
        console.error(error);
        return response.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
})

export default router;