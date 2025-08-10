import express, { Request, Response } from "express";
import { collections, db } from '../database/database.service';
import { Food, Meal } from "../database/models/meals";
import { ObjectId } from "mongodb";
import { User } from "../database/models/users";

export const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/:userid", async (_req: Request, res: Response) => {
    try {
        if(!db){
            throw new Error("Database not connected.");
        }
        const userId = _req.params.userid;
        if (!ObjectId.isValid(userId)) {
      return res.status(400).send("Invalid user ID");
    }

        let userCollection = await db.collection("users");
        let query = {_id: new ObjectId(userId)};
        const user = await userCollection.findOne(query);
        if(!user){
            res.status(400).send("User not found")
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error instanceof Error ? error.message : 'An unknown error occurred');
    }
});