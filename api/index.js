import express from 'express';
import mongoose from  'mongoose';
import roleRoute from './routes/role.js'
import authRoute from './routes/auth.js'
const app = express();
app.use(express.json());
app.use("/api/role", roleRoute);
app.use('/api/auth', authRoute)
const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/AngularDefence")
    } catch (error) {
        throw error;
    }
}


app.listen(3000, () =>{
    connectMongoDB();
  console.log('Example app listening on port 3000!')}
);