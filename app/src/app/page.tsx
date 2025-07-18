'use client';
import SearchBar from "./components/SearchBar";
import ResultTable from "./components/ResultTable";
import {Table, UserData} from "./classes/interfaces";
import { useState } from "react";


export default function Home() {

  // Fake data
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
  const [userData, setUserData] = useState<UserData>({insulinRatio: 7});
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Table>(table);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <SearchBar setSearch={setSearch} setResults={setResults}/>
        <ResultTable table={results} userData={userData}/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
