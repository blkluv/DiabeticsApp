import {Table} from "../classes/interfaces";

interface TableProps {
  table: Table;
}
export default function TableComponent({table} : TableProps)  {
  return (
    <div>
    <table className='table-auto'>
        <thead>
          <tr>
          <th>Data 1</th>
          <th>Data 2</th>

          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => {
            return (
              <tr>
                {row.columns.map((col) => {
                  return (
                    <td>{col.value}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
    </table>
    </div>
  );
}
