import './App.css';
import { products } from "./products";
import { AddProduct } from "./AddProduct";
import { login } from './login';
import React, { useState, useEffect } from 'react';
import { productItem } from './productItem';

function App() {
  let initproducts;
  if (localStorage.getItem("products") === null) {
    initproducts = [];
  }
  else{
    initproducts = JSON.parse(localStorage.getItem("products"));
  }

  const onDelete = (products) => {
    setproducts(products.filter((e) => {
      return e !== products;
    }));
    console.log("deleted", products)
    localStorage.setItem("products", JSON.stringify(products));
  }

  const addProduct = (title, desc) => {
    console.log("I am adding this products", title, desc)
    let sno;
    if (products.length === 0) {
      sno = 0;
    }
    else {
      sno = products [products.length - 1].sno + 1;
    }
    const myproducts = {
      sno: sno,
      title: title,
      desc: desc,
    }
    
     setproducts([...products, myproducts]);
    console.log(myproducts);
  }

  const [products, setproducts] = useState( initproducts);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products])


}

export default App;