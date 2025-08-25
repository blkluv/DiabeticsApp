import { Button } from "@/components/ui/button";
import { FaBowlFood, FaBurger } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import FoodForm from "./Forms/FoodForm";

enum FormType {
    Food,
    Meal
}
export default function SideActions() {
    const [dialogOpen, setDialogOpen] = useState(true)
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
        </DialogContent>
    </Dialog>
    </>
  );
}
