import React from "react";
import { useState } from "react";



export default function SearchToolBar(props) {
  const { setSearch } = props;
  const hdlChange = (e) => {
    setSearch(e.target.value);
  };



  return (
    <div>
      <input className="input input-bordered bg-pink-200 w-full max-w-xs"type="text"onChange={hdlChange}/>
    </div>
  );
}