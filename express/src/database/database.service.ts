
import { Db, MongoClient, MongoDBNamespace, ObjectId, ServerApiVersion } from "mongodb"
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { meals?: mongoDB.Collection, food?: mongoDB.Collection } = {}
export let db: mongoDB.Db;
export async function connectToDatabase () {
   const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STR ?? "");
   await client.connect();
   db = client.db(process.env.DB_NAME);
  
   const mealCollection: mongoDB.Collection = db.collection("meals");
   const foodCollection: mongoDB.Collection = db.collection("food-items");

 collections.meals = mealCollection;
  collections.food = foodCollection;
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${mealCollection.collectionName}`);
}

