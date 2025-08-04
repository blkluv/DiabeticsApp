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
      <Button onClick={() => handleAdd(row.original)}>Add</Button>
    ),
  },
  {
    accessorKey: "insulin",
    header: "Insulin",
    accessorFn: row => `${row.total_carbs/7}`
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
            {row.original.food_item_ids.map((item) => (
                <li key={item.toString()}>{item.toString()}</li>
            ))}
        </ul>
    )
  },
];
