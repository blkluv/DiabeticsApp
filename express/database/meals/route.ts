import express, { Request, Response } from "express";
import { collections } from "../../../next/src/app/api/database.service";
import { Meal } from "../../../next/src/app/models/interfaces";

export const mealsRouter = express.Router();

mealsRouter.use(express.json());

mealsRouter.get("/", async (_req: Request, res: Response) => {
    try {
        if (!collections.meals) {
            throw new Error("Meal collection not found.");
        }
       const meals = (await collections.meals.find({}).toArray()) as unknown as Meal[];

        res.status(200).send(meals);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});