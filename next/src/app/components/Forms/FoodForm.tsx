
import { FormGroup, FormInput, FormLabel} from "./FormComponents";
import { Button } from "@/components/ui/button";


export default function CreateFoodForm() {
  
  return (
    <form className="flex flex-col items-center">
        <FormGroup>
            <FormLabel htmlFor="name">Name<i className="text-primary">(required)</i></FormLabel>
            <FormInput type="text" name="name" id="name" required/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="brand">Brand</FormLabel>
            <FormInput type="text" name="brand" id="brand"/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="weight">Weight (g)<i className="text-primary">(required)</i></FormLabel>
            <FormInput type="number" name="weight" id="weight"/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="carbs">Carbs (g)<i className="text-primary">(required)</i></FormLabel>
            <FormInput type="number" name="carbs" id="carbs"/>
        </FormGroup>
        <FormGroup>
            <FormLabel htmlFor="sugar">Sugar (g)</FormLabel>
            <FormInput type="number" name="sugar" id="sugar"/>
        </FormGroup>
        <FormGroup>
            <Button type="submit" className="text-2xl md:text-base h-12 md:h-10">
                Create
            </Button>
        </FormGroup>
    </form>
  );
}

