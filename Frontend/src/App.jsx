import './App.css';
import React,{useEffect, useState} from 'react'
import Productslist from './Productslist';

function App() {
const [products,setproducts]=useState([]);

   useEffect(() => {
    
    async function APICALL() {
      console.log("Data is coming");
      const datas= await fetch(`https://ecommerce-z6v3.onrender.com/data`)
      let data=await datas.json()
      console.log(data);
      setproducts(data[0].products);

      
    }
    APICALL();
  }, [])


  return (
    <div>
      <Productslist products={products}></Productslist>

    </div>
  )
}

export default App