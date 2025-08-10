import express, { Request, Response } from "express";
import { collections } from '../database/database.service';
import { Food, Meal } from "../database/models/meals";
import { ObjectId } from "mongoose";

export const mealsRouter = express.Router();

mealsRouter.use(express.json());

mealsRouter.get("/", async (_req: Request, res: Response) => {
    try {
        
        if (!collections.meals) {
            throw new Error("Meal collection not found.");
        }
       const meals = (await collections.meals.find({}).toArray()) as unknown as Meal[];
       const foodItems = (await collections.food?.find({}).toArray()) as unknown as Food[];

        const foodMap = new Map(foodItems.map(food => [food._id.toString(), food]));
        const mealsWithFood = meals.map(meal => ({
    ...meal,
    food_items: meal.food_item_ids
      .map(id => foodMap.get(id.toString())),
  }));

        res.status(200).send(mealsWithFood);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});