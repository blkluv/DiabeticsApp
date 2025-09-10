
import axios from "axios";
import { Form} from "./FormComponents";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { MealContext } from "../DbContext";
import { useContext, useMemo } from "react";
import { Meal } from "@/app/models/meals";

class FormData{
    constructor(
        name: string,
        brand: string,
        weight: number,
        carbs: number,
        sugar: number
    ){}
    
}
function GetUniqueFoodItems(meals: Meal[]){
    const uniqueItems = new Set();
    return meals.flatMap((meal) => meal.food_items)
    .filter((item) => {
        if(!uniqueItems.has(item._id)) return item;
    })
}
export default function MealForm() {
    const context = useContext(MealContext)
    const foodItems = useMemo(() => GetUniqueFoodItems(context), [context])
    console.log(foodItems[0]._id);
    async function submit(formData: FormData){
        const host = "http://localhost:8080";

        try{
        const response = await axios.post(`${host}/meals/food`, formData, {
            headers: {
                'Content-Type':'application/json'
            },
        })
            console.log(response.data);
        }
        catch(error){
            console.error("Error submitting form: ", error)
        }

    }

  return (
    <form className="flex flex-col items-center" action={submit}>
        <Form.Group>
            <Form.Label htmlFor="name">Name<i className="text-primary">(required)</i></Form.Label>
            <Form.Input type="text" name="name" id="name" required/>
        </Form.Group>
        <Form.Group>
            <Form.Select placeholder="Select">
                {foodItems.map((item, index) => (
                    <SelectItem value={item._id?.toString() ?? "null"} key={item._id?.toString() ?? index}>{item.food_name}</SelectItem>
                ))}
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Button type="submit" className="text-2xl md:text-base h-12 md:h-10">
                Create
            </Button>
        </Form.Group>
    </form>
  );
}

