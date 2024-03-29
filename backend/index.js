import 'dotenv/config';
import express from "express"
import mongoose from 'mongoose'
import cors from 'cors'
import signupRoute from './server/routes/signupRoute.js'
import loginRoute from './server/routes/loginRoute.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use('/', signupRoute)
app.use('/SignIn', loginRoute)


mongoose.connect(process.env.mongoDBUserURL)
.then(() => {
    console.log('App connected to User Database')
    app.listen(process.env.PORT, () => {
        console.log(`App is listening to port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})

