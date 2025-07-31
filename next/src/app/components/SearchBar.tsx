'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table } from "../models/interfaces";
interface SearchBarComponentProps {
  setSearch: (search: string) => void;
  setResults: (table: Table) => void;
}

export default function SearchBarComponent({setSearch, setResults} : SearchBarComponentProps) {


  function searchAPI(formData: FormData){
    const searchVal = formData.get('search')?.toString();
    setSearch(searchVal ?? '');
    setResults({
      rows: [
        {
          columns: [
            {value: searchVal ?? ''},
            {value: '5.7'},
            {value: '35g'},
            {value: 'Generic'},
            {value: ''}

          ]
        },
        {
          columns: [
            {value: searchVal ?? ''},
            {value: '3.5'},
            {value: '80g'},
            {value: 'Generic'},
            {value: ''}

          ]
        }
      ]
    })
  }
  return (
      <form action={searchAPI}>
        <div className="flex w-full max-w-lg items-center gap-2 m-auto">
        <Input type="search" id="search" name="search" placeholder="Search"/>
        <Button type="submit">Submit</Button>
        </div>
        
      </form>
  );
}
