import Hero from "../components/Home/Hero"
import TopCategories from "../components/Home/TopCategories"
import Services from "../components/Home/Services"
import Health from "../components/Home/Health"
import Testimonials from "../components/Home/Testimonials"
import Products from "../components/Home/Products"
import Faqs from "../components/Home/Faq"


const Home = () => {
  return (
    <div>
        <Hero />
        <Products />
        <TopCategories />
        <Health />
       <Services />
        <Testimonials />  
        <Faqs />
    </div>
  )
}

export default Home