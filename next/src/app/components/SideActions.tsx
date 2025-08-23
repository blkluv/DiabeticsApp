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

enum FormType {
    Food,
    Meal
}
export default function SideActions() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [formFields, setFormFields] = useState({})
    function setForm(type:FormType){
        console.log(type)
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
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
    </>
  );
}
