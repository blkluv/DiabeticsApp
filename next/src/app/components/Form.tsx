import {
    Dialog,
    DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ReactNode } from "react";

export default function FormComponent({children}: {children:ReactNode}) {


  
  return (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
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
  );
}
