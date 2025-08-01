
import { Db, MongoClient, MongoDBNamespace, ObjectId, ServerApiVersion } from "mongodb"
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { meals?: mongoDB.Collection } = {}

export async function connectToDatabase () {
   const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STR ?? "");
   await client.connect();
       
   const db: mongoDB.Db = client.db(process.env.DB_NAME);
  
   const mealCollection: mongoDB.Collection = db.collection("meals");
 collections.meals = mealCollection;
 //console.log(collections.meals);
      
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${mealCollection.collectionName}`);
}

