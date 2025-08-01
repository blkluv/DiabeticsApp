import express from "express";
import { connectToDatabase } from "./database/database.service"
import { mealsRouter } from "./routes/meals.router"
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express()
const port = 3000

connectToDatabase()
    .then(() => {
        app.use("/meals", mealsRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
    });