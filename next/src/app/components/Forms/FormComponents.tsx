import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";


export function FormGroup({children} : {children : ReactNode}) {
  
  return (
        <div className="grid w-full max-w-sm items-center gap-2 mt-3 form-group">
           {children}
        </div>
  );
}
export function FormLabel({className, children, ...props}: React.ComponentProps<"label">){
  return (
    <Label className={cn(className, "text-2xl md:text-base form-label")}{...props}>
      {children}
    </Label>
  )
}
export function FormInput({className, ...props}: React.ComponentProps<"input">){
  return (
    <Input className={cn(className, "h-12 md:h-10 form-input")}{...props}/>
  )
}

export const Form = {
  Group: FormGroup,
  Label: FormLabel,
  Input: FormInput,
}