// columns.jsx
"use client";

import { Meal } from "@/app/models/types";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export const getColumns = (handleAdd: (meal: Meal) => void): ColumnDef<Meal>[] => [
  {
    accessorKey: "add",
    header: "Add",
    cell: ({ row }) => (
      <Button onClick={() => handleAdd(row.original)}>Add</Button>
    ),
  },
  {
    accessorKey: "insulin",
    header: "Insulin",
    accessorFn: row => `${row.total/7}`
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "food",
    header: "Food Items",
    cell: ({row}) => (
        <ul>
            {row.original.food.map((item) => (
                <li key={item._id.toString()}>{item.food_name}</li>
            ))}
        </ul>
    )
  },
];
