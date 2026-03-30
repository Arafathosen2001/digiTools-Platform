
import { useState } from 'react'
import './App.css'

import Hero from './Component/Hero/Hero'
import NavBar from './Component/Nav/NavBar'
import AllProducts from './Component/Products/AllProducts/AllProducts'
import Rating from './Component/Rating/Rating'
import Tab from './Component/Tab/Tab'
import CatrProduct from './Component/Products/Cart/CatrProduct';
import Steps from './Component/Steps/Steps'
import Heading1 from './Component/Hadding/Heading1'
import Headding3 from './Component/Hadding/Headding3'
import SimplePricing from './Component/SimplePricing/SimplePricing'

const DataPromis = async () => {
  const res = await fetch("/CardData.json");
  const data = await res.json();
  return data;
}
const PromisData = DataPromis();

function App() {
  const [selectTab, setSelectTab] = useState("Products");
  const [selectProductData, setSelectProductData] = useState([]);
  
  return (
    <>
      <NavBar selectProductData={selectProductData}></NavBar>
      <Hero></Hero>
      <Rating></Rating>
      <Heading1></Heading1>
      <Tab selectProductData={selectProductData} selectTab={selectTab} setSelectTab={setSelectTab}></Tab>
      {selectTab === "Products" ? <AllProducts PromisData={PromisData} selectProductData={selectProductData} setSelectProductData={setSelectProductData}></AllProducts> : <CatrProduct selectProductData={selectProductData} setSelectProductData={setSelectProductData}></CatrProduct>}
      <Steps></Steps>
      <Headding3></Headding3>
      <SimplePricing></SimplePricing>
    </>
  )
}

export default App
