"use client";

import { useMemo } from 'react';
import { getColumns } from './columns'; // Adjust the import path as needed
import { DataTable } from '../Datatable';


interface DataTableClientProps {
  data: Meal[];
}


export default function MealTableClient({ data }: DataTableClientProps) {
  const handleAdd = (meal: Meal) => {
    console.log("Add button clicked for meal:", meal);
  };

  const columns = useMemo(() => getColumns(handleAdd), [handleAdd]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
