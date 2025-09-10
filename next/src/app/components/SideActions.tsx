import { Button } from "@/components/ui/button";
import { FaBowlFood, FaBurger } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import FoodForm from "./Forms/FoodForm";
import MealForm from "./Forms/MealForm";

enum FormType {
    Food,
    Meal
}
export default function SideActions() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [formType, setFormType] = useState<FormType>(FormType.Food)
    function setForm(type:FormType){
        setFormType(type);
        setDialogOpen(prevOpen => !prevOpen)
    }
  
  return (
    <>
     <div id="side-action-btns">
            <Button className="side-button" id="createFoodBtn" onClick={() => setForm(FormType.Meal)}><FaBurger /></Button>
            <Button className="side-button" id="createMealBtn" onClick={() => setForm(FormType.Food)}><FaBowlFood /></Button>
    </div>
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>{formType === FormType.Food ? "Create Food Item" : "Create Meal"}</DialogTitle>
            </DialogHeader>
            {formType === FormType.Food && <FoodForm/>}
            {formType === FormType.Meal && <MealForm/>}

        </DialogContent>
    </Dialog>
    </>
  );
}
