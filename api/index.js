import express from 'express';
import mongoose from  'mongoose';
const app = express();

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