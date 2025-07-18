import SearchBar from "./components/SearchBar";
import TableComponent from "./components/Table";
import {Table} from "./classes/interfaces";


export default function Home() {

  const table : Table = {
    rows: [
      {
        columns: [
          {value: "Data 1"},
          {value: "Data 2"}
        ]
      }
    ]
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SearchBar/>
        <TableComponent table={table}/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
