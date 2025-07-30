import MealTableClient from "./MealTableClient";
import * as dbConnection from "../../api/database"
import {Food, Meal} from "../../classes/types";

async function getData() {
  return [
    {
      _id: 1,
      name: "McDonald's Quarter Pounder Meal",
      total: 43,
      food: [
        {
        _id: 1,
        food_name: "McDonald's Quarter Pounder",
        brand_name: "McDonald's",
        serving_qty: 1,
        serving_unit: "burger",
        serving_weight_grams: 120,
        nf_total_carbohydrate: 42,
        nf_sugars: 10,
      },
    {
        _id: 2,
        food_name: "McDonald's Medium Fry",
        brand_name: "McDonald's",
        serving_qty: 1,
        serving_unit: "fry",
        serving_weight_grams: 0,
        nf_total_carbohydrate: 43,
        nf_sugars: 0
        }]
    }
  ];
}

export default async function MealTable() {
  const meals = await dbConnection.fetchMeals();
    
  return (
    <MealTableClient data={meals} />
  );
}
