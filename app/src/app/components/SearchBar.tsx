'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";


export default function SearchBarComponent() {

  const [search, setSearch] = useState<string>('')

  function searchAPI(formData: FormData){
    const searchVal = formData.get('search')?.toString();
    setSearch(searchVal ?? '');
  }
  return (
    <div className="d-inline">
      <form action={searchAPI}>
        <Label htmlFor="search">Search</Label>
        <Input type="search" id="search" name="search"/>
        <Button type="submit">Submit</Button>
      </form>
        <div>{search}</div>
    </div>
  );
}
