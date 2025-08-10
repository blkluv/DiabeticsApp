// columns.jsx
"use client";

import { Meal } from "../../models/meals";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export const getColumns = (handleAdd: (meal: Meal) => void): ColumnDef<Meal>[] => [
  {
    accessorKey: "add",
    header: "Add",
    cell: ({ row }) => (
      <Button onClick={() => handleAdd(row.original)}>+</Button>
    ),
  },
  {
    accessorKey: "insulin",
    header: "Insulin",
    accessorFn: row => `${row.insulin ?? (row.total_carbs/7).toFixed(2)}`
  },
  {
    accessorKey: "total",
    header: "Total",
    accessorFn: row => row.total_carbs
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
            {row.original.food_items.map((item) => (
                <li key={item.food_name}>{item.food_name}</li>
            ))}
        </ul>
    )
  },
];
