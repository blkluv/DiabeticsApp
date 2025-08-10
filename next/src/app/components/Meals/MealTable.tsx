"use client";

import { useMemo } from 'react';
import { getColumns } from './columns'; // Adjust the import path as needed
import { DataTable } from '../Datatable';
import { Meal } from '../../models/meals';


interface DataTableProps {
  data: Meal[];
  addTotal: (meal: Meal) => void;
}


export default function MealTable({ data, addTotal }: DataTableProps) {
  const columns = useMemo(() => getColumns((meal: Meal) => {
    addTotal(meal)
    console.log("Add button clicked for meal:", meal);
  }), [addTotal]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
