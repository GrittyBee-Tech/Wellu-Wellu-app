// import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from "/src/Components/Hero/Hero";
import Products from "/src/Components/Products/products";
import TopCategories from "./Components/TopCategories/TopCategories";
import Health from "/src/Components/Health/health";
import Services from "/src/Components/Our-services/services";
import Director from "/src/Components/Director/director";
import Testimonials from "/src/Components/Testimonials/testimonials";
import Faqs from "/src/Components/Faqs/faqs"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopCategories />

      <Health/>
      <Services/>
      <Director/>
      <Testimonials/>
      <Faqs/>
    </>
  )
}

export default App
