import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import alarmRouter from './routes/alarm.route.js'
import userRouter from './routes/user.route.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.MONGO_URL


mongoose.connect(url)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => console.log("Error Connecting to MongoDB"));

    
app.use("/alarms", alarmRouter);
app.use("/users", userRouter)


app.listen(process.env.PORT, () => {
	console.log("Server is running on port " + process.env.PORT);
});
