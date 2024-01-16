import express from 'express';
import mongoose from  'mongoose';
import roleRoute from './routes/role.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/api/role", roleRoute);
app.use('/api/auth', authRoute);
app.use("/api/user",userRoute);

app.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a === obj.status) ? true : false, 
        status: statusCode,
        message: message,
        data: obj.data
    });
});

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