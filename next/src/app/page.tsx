
'use client'
import { useEffect, useState } from "react";
import PageTabs from "./components/PageTabs";
import axios from 'axios';
import dotenv from 'dotenv'
import { Meal } from "./models/meals";
import MealTable from "./components/Meals/MealTable";

export default function Home() {

  const [meals, setMeals] = useState<Meal[]>([{name:'',total_carbs:0,food_item_ids:[]}]);

  useEffect(() => {
    const host = "http://localhost:8080";
    axios.get(`${host}/meals`)
    .then(response => {
      setMeals(response.data);
      console.log(meals);
    })
    .catch(error => console.log(error))
  })

  return (
    <div className="font-sans container my-6 mx-30">
        <PageTabs id={1}/>
        <div className="m-32">
          <div className="mb-10">
          </div>
          <div>
            <MealTable data={meals}/>
          </div>
        </div>
        
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
