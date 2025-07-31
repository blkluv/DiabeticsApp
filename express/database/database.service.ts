
import { Db, MongoClient, MongoDBNamespace, ObjectId, ServerApiVersion } from "mongodb"
import { Food, Meal } from "../../next/src/app/models/interfaces";
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

const connStr = encodeURIComponent(process.env.DB_CONN_STR ?? "");
const dbName = process.env.DB_NAME;

export const collections: { meals?: mongoDB.Collection } = {}

export async function connectToDatabase () {
   dotenv.config();

   const client: mongoDB.MongoClient = new mongoDB.MongoClient(connStr);
           
   await client.connect();
       
   const db: mongoDB.Db = client.db(dbName);
  
   const mealCollection: mongoDB.Collection = db.collection('meals');

 collections.meals = mealCollection;
      
  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${mealCollection.collectionName}`);
}

