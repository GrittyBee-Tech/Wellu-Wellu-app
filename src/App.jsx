// import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "/src/Components/Hero/Hero";
import Products from "/src/Components/Products/products";
import TopCategories from "./Components/TopCategories/TopCategories";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopCategories />

    </>
  )
}

export default App
