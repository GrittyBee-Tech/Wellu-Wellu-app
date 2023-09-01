import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Product from "./pages/Product"
import Footer from "./components/Footer"

function App() { 
  return (
    <>
    <Navbar />
      <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/*" element={<NotFound />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Product />} />
       </Routes>
      </div>
      <Footer />
    </>
  )
}

function WrapperApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default WrapperApp
