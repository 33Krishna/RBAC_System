import express from "express";
import 'dotenv/config';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
})