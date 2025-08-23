
'use client'
import { useEffect, useState } from "react";
import PageTabs from "./components/PageTabs";
import axios from 'axios';
import { Meal, Total } from "./models/meals";
import MealTable from "./components/Meals/MealTable";
import TotalComponent from "./components/Total";
import { User } from "./models/user";
import { FaBowlFood , FaBurger} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { UserProvider } from "./components/UserContext";

export default function Home() {

  const [meals, setMeals] = useState<Meal[]>([{name:'',total_carbs:0,food_items: []}]);
  const [total, setTotal] = useState<Total>({carbs: 0, insulin: 0})
  const [user, setUser] = useState<User>({carb_ratio: 0})

  

 // Get meals and user data, applying carbratio to meals
  useEffect(() => {
    const host = "http://localhost:8080";
    let fetchedUser: User;

    axios.get(`${host}/user/6888c212374bd9795685044d`)
    .then(userResponse => {
      fetchedUser = userResponse.data;
      setUser(fetchedUser);

      // Then fetch meals
      return axios.get(`${host}/meals`);
    })
    .then(mealsResponse => {
      const carbRatio = fetchedUser.carb_ratio;

      const mealsWithInsulin = mealsResponse.data.map((item: Meal) => ({
        ...item,
        insulin: item.total_carbs / carbRatio,
      }));

      setMeals(mealsWithInsulin);
    })
    .catch(error => console.log(error));
}, []);

  // total functions
  function addTotal(meal: Meal){
    setTotal(curr => ({
      carbs: curr.carbs + meal.total_carbs,
      insulin: curr.insulin + (meal.insulin ?? meal.total_carbs / (user.carb_ratio ?? 7))
    }))
  }
  function clearTotal(){
    setTotal({carbs: 0, insulin: 0});
  }
  //
  return (
    <div className="font-sans container my-6 mx-30 ">
      <UserProvider user={user}>
        <PageTabs id={1}/>
        <div className="m-32">
          <div className="mb-10">
          </div>
          <div>
            Insulin Carb Ratio: {user?.carb_ratio}
            <MealTable data={meals} addTotal={addTotal}/>
          </div>
          
        </div>
        <div id="actions-menu">
          <Button className="menu-button" id="createMealBtn"><FaBurger /></Button>
            <Button className="menu-button" id="createMealBtn"><FaBowlFood /></Button>
          </div>
        <TotalComponent total={total} clearTotal={clearTotal}/>
        </UserProvider>
    </div>
  );
}
