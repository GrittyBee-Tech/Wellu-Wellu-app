import Faq from "../components/About/Faq"
import Testimonials from "../components/Home/Testimonials"

const About = () => {
  return (
    <div className="mt-[5rem] md:mt-0">
      <div className="container m-auto">
        <div className=" border-b border-[#899FB5]">
          <div className="text-center md:w-6/6 m-auto py-[2rem] md:py-[7rem] px-5">
            <h1 className="text-[#447B02] md:font-bold md:text-[45px] text-[25px] mb-5">
              About Wellu Wellu
            </h1>
            <p
              className="text-[20px]">
              We provide an innovative platform for the collection of Tested and Trusted Non-synthetic  (Natural & Herbal)  as well as other effective Synthetic (simulated, artificial/chemical) drugs that are helping to address very critical issues as it relates to our health.
              We try as much as possible to limit the products to those that are without any known side-effects and have been proven to be very effective over the years.
              So, while we welcome various producers and distributors of authentic Natural products all around the World to use our platform for the expansion of their reach, we are very paranoid in the selection process of what we post because of the Integrity we intend to uphold. Hence the restriction of individual advertising of products on our website.
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
