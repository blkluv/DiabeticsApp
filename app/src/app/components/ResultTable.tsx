import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {Table as TableType, UserData}  from "../classes/interfaces";


interface TableProps {
  table: TableType;
  userData: UserData;
}
export default function ResultTable({table, userData} : TableProps)  {

  return (
    <div>
    <Table className='table-auto'>
        <TableHeader>
          <TableRow>
          <TableHead>Item Name</TableHead>
          <TableHead>Insulin Units ({userData.insulinRatio} g per unit)</TableHead>
          <TableHead>Carbs</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Brand Name</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {table.rows.map((row, rowIndex) => {
            return (
              <TableRow key={rowIndex}>
                {row.columns.map((col, colIndex) => {
                  return (
                    <TableCell key={colIndex}>{col.value}</TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
    </Table>
    </div>
  );
}
