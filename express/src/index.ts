import express from "express";
import { connectToDatabase } from "./database/database.service"
import { mealsRouter } from "./routes/meals.router"
import { userRouter } from "./routes/users.router"

import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express()
const cors = require('cors');
const port = process.env.PORT || 8080;
app.use(cors());

connectToDatabase()
    .then(() => {
        app.use("/meals", mealsRouter);
        app.use("/user", userRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
    });