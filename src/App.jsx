import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

function App() { 
  return (
    <>
    <Navbar />
      <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/*" element={<NotFound />} />
         <Route path="/about" element={<About />} />
       </Routes>
      </div>
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
