import 'dotenv/config';
import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(express.json())

app.use(cors())

app.get('/', () => {
    console.log(request)
    return response.status(200).send("Welcome to MERN Stack Tutorial")
});

mongoose.connect(process.env.mongoDBURL)
.then(() => {
    console.log('App connected to database')
    app.listen(process.env.PORT, () => {
        console.log(`App is listening to port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})

