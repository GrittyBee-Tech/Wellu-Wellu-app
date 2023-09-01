import Faq from "../components/About/Faq"
import Testimonials from "../components/Home/Testimonials"

const About = () => {
  return (
    <div className="mt-[5rem] md:mt-0">
        <div className="container m-auto">
          <div className=" border-b border-[#899FB5]"> 
            <div className="text-center md:w-7/12 m-auto py-[2rem] md:py-[7rem] px-5">
              <h1 className="text-[#447B02] md:font-bold md:text-[45px] text-[25px] mb-5">
                About Wellu Wellu
              </h1>
              <p
                className="text-[20px]">
                Wellu Wellu is a leading provider of all herbal medicine. Our
                mission is to revolutionize patient care by delivering herbal healthcare
                product.
                Wellu Wellu creates a simple, fun and affordable way to start a business. Sell in person or online, at home or on the go, our sales people, work when and how it is convenient for them. 
              </p>
            </div>
          </div>
          </div>
          <Testimonials />
          <Faq />
      </div>
  )
}

export default About
