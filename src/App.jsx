import { useState, useEffect } from "react";
import SearchToolBar from "./Search";
import ProductName from "./Product";



export default function App() {
  const [mobileSearch, setSearch] = useState("");



  return (
    <div className="flex flex-col items-center p-4 ">
     
      <h1 className="text-3xl p-4 border-2 border-gray-400 rounded-lg">Product Search</h1>
      <hr />
      <hr />
      <hr />
     
      <SearchToolBar setSearch={setSearch} />
      <hr />
      <hr />
      <hr />
      <ProductName  mobileSearch={mobileSearch} />
    </div>
  );
}