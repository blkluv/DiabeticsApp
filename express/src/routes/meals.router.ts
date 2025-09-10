import express, { Request, Response } from "express";
import { collections } from '../database/database.service';
import { Food, Meal } from "../database/models/meals";
import { Collection } from "mongodb";

export const mealsRouter = express.Router();

mealsRouter.use(express.json());
// Get meals all
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
// Create new meal item
mealsRouter.post("/", async (req, res) => {
   const collection = collections.meals;
   if(collection){
        dbInsert(collection, req, res)
   }
});
// Create new food item
mealsRouter.post("/food/", async (req, res) => {
   const collection = collections.food;
   if(collection){
        dbInsert(collection, req, res)
   }
  
});

// Add a new document to the collection
async function dbInsert(collection: Collection, req: Request, res: Response){
 if(!req.body){
            res.status(400).send()
    }
    try{
        
            let newDocument = req.body;
            // TODO: validation (sanitize input using validator library)
            
            let result = await collection.insertOne(newDocument);
            res.send(result).status(204);
    }
    catch(error){
       res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}