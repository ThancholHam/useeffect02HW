import React from "react";
import { useState, useEffect } from "react";



export default function ProductName(props) {
  const [product, setProduct] = useState([]);
  const { mobileSearch } = props;



  const fetchData = async () => {
    const resp = await fetch("https://dummyjson.com/products/search?q=phone");
    const result = await resp.json();
    const name = result.products.filter(

      (el) =>
        String(el.title).toLowerCase().includes(mobileSearch.toLowerCase()) ||
        String(el.category).toLowerCase().includes(mobileSearch.toLowerCase())
    );
    setProduct(name);
  };



  useEffect(() => {
    let timing = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => {
      clearTimeout(timing);
    };
  }, [mobileSearch]);

  return (
    <div>
      <ul>
        {product.map((el, index) => (
          <li key={index}>
            {el.title} | {el.category} | ${el.price}
          </li>
        ))}
      </ul>
    </div>
  );
}