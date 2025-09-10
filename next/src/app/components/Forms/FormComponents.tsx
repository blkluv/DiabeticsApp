import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";


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
type SelectProps = {
  children: React.ReactNode,
  placeholder: string,
  className?: string
}
export function FormSelect({children, placeholder, className}:SelectProps){
  return (
     <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder}/>
      </SelectTrigger>
      <SelectContent>
          {children}
      </SelectContent>
    </Select>
  )
}

export const Form = {
  Group: FormGroup,
  Label: FormLabel,
  Input: FormInput,
  Select: FormSelect
}