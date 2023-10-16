// import DirectorImg from "../../assets/images/director.jpg";
// import directorImg from '../../assets/images/director.jpg'

import { useState } from "react";
import director from "../../assets/images/comment.png";

const Director = () => {
   const [showComment, setShowComment] = useState(false)

   const hamdleShowComment = () => {
    setShowComment(!showComment)
   }
    return (
        <section className="px-5">
            <div>
                <h2 className="text-[#447B02] font-Mulish font-semibold text-[20px] md:text-[36px] text-center md:ml-[100px]">
                    The Director
                </h2>
                <div className="md:container md:mx-auto md:px-20 mt-[60px] mb-[72px] md:flex md:space-x-16">
                    <img className="md:w-[450px] md:h-[449px]" src={director} alt="director" />
                    <div className="md:items-center m-0 pt-[6px]">
                        <div className="md:flex justify-center text-center">
                            <h3 className="text-[#FDFDFD] md:px-5 px-2 rounded-full bg-[#447B02] font-semibold  text-[20px] md:text-[32px] text-center py-1">
                                Director’s Comment
                            </h3>
                        </div>
                        <div className="mt-5">
                            <p className="md:text-[18px] text-[14px] font-Mulish font-normal leading-[160%] text-[#2F2F2F]">
                                The advent of COVID-19 (Coronavirus) and other calamitous diseases has drawn serious attention to our health as the most important factor we have for our well-being and maximum productivity.
                                While we appreciate the scientific breakthroughs in Medical Science that is helping to address these various health challenges, there is a need to also draw attention to natural or Non-synthetic remedies that have assisted in various ways over many centuries. <span className="text-[#447b02] cursor-pointer" onClick={hamdleShowComment}>Read More</span>
                               </p> 
                              {showComment && <p className="mt-4">These natural recipes received a boost in attention during the last global pandemic (COVID-19) as there were several reported cases of communities and people who were preserved by the use of these herbal solutions.
                                WELLU WELLU is an attempt to provide a holistic approach to health challenges by assembling a collection of trusted Natural health remedies with enough testimonials as well as helping people easily access scarce synthetic drugs especially newly produced drugs with high efficacy.
                                It is important to state here that we have attempted to draw a strong distinction between diabolic/fetish herbal mixtures and Natural solutions made simply from basic Natural ingredients all around us. And these Non-synthetic drugs have been certified as harmless for use by the relevant authorities in each Country of Origin.

                            </p>}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Director