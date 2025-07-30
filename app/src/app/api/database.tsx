
import { MongoClient, MongoDBNamespace, ObjectId, ServerApiVersion } from "mongodb"
import { Food, Meal } from "../classes/types";
const username = process.env.DB_USERNAME;
const password = encodeURIComponent(process.env.DB_PASSWORD ?? "");
const uri = `mongodb+srv://${username}:${password}@diabetes.b3lupzr.mongodb.net/?retryWrites=true&w=majority&appName=Diabetes`;

async function connectToDatabase() {

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('carb-tracker');


  return { client, db };
}

export async function fetchMeals() {
  const { db } = await connectToDatabase();
  const mealsData = await db.collection('meals').find({}).toArray();

  const meals: Meal[] = mealsData.map((mealData) => ({
    _id: mealData._id, 
    name: mealData.name,
    total: mealData.total,
    food: mealData.food.map((foodItem: Food) => ({
      _id: foodItem._id?.toString(), 
      food_name: foodItem.food_name,
      brand_name: foodItem.brand_name,
      serving_qty: foodItem.serving_qty,
      serving_unit: foodItem.serving_unit,
      serving_weight_grams: foodItem.serving_weight_grams,
      nf_total_carbohydrate: foodItem.nf_total_carbohydrate,
      nf_sugars: foodItem.nf_sugars,
    })),
  }));
  return meals;
}