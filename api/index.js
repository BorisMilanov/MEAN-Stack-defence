import express from 'express';
import mongoose from  'mongoose';
import roleRoute from './routes/role.js'
const app = express();
app.use(express.json());

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/AngularDefence")
    } catch (error) {
        throw error;
    }
}

app.use("/api/role", roleRoute)
app.listen(3000, () =>{
    connectMongoDB();
  console.log('Example app listening on port 3000!')}
);