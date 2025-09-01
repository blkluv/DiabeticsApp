
import axios from "axios";
import { Form} from "./FormComponents";
import { Button } from "@/components/ui/button";

class FormData{
    constructor(
        name: string,
        brand: string,
        weight: number,
        carbs: number,
        sugar: number
    ){}
    
}
export default function CreateFoodForm() {
  
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
            <Form.Label htmlFor="brand">Brand</Form.Label>
            <Form.Input type="text" name="brand" id="brand"/>
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="weight">Weight (g)<i className="text-primary">(required)</i></Form.Label>
            <Form.Input type="number" name="weight" id="weight"/>
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="carbs">Carbs (g)<i className="text-primary">(required)</i></Form.Label>
            <Form.Input type="number" name="carbs" id="carbs"/>
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="sugar">Sugar (g)</Form.Label>
            <Form.Input type="number" name="sugar" id="sugar"/>
        </Form.Group>
        <Form.Group>
            <Button type="submit" className="text-2xl md:text-base h-12 md:h-10">
                Create
            </Button>
        </Form.Group>
    </form>
  );
}

