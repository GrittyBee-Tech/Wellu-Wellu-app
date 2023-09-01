 
// import { faqs } from './Data'
import { useState } from 'react'
export  const faqs = [
    {
      id: 1,
      question: 'Question text goes here',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 2,
      question: 'Question text goes here',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 3,
      question: 'Question text goes here',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 4,
      question: 'Question text goes here',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    }
  ]
const Faq = () => {
  const [faqNum, setFaqNum] = useState(1)
  const handleClickFaq = (num) => {
    setFaqNum(num)
  }
  return (
    <div>
         <div className="bg-[#447B02] md:px-11 h-[64px] mb-[40px]">
          <div className="md:container pt-2">
            <h3 className="text-[32px] text-[#ffff] px-11">FAQs</h3>
          </div>
        </div>
      <div className="container  md:w-7/12 m-auto py-[2rem] md:pb-[7rem]">
        {faqs.map((item) => (
          <div 
            className={faqNum !== item.id ? "faq flex flex-col items-center mt-2 border-2 py-5  pl-2  pb-3 border-[#E3E9ED] rounded mb-5" : "border-[#447B02] faq flex flex-col items-center mt-2 border py-5  pl-2  pb-3 rounded mb-5"}
            key={item.id}
          > 
            <button className="flex justify-between accordian w-[92%]" onClick={() => handleClickFaq(item.id)}>
              <span className="text-[#447B02] text-[18px]">
                <b>{item.question}</b>
              </span> 
              <img alt="icons" className={faqNum !== item.id ? "py-2" : "hidden"} src="assets/images/plus.png" />
              <img 
                alt="icons" 
                className={faqNum == item.id ? "h-1 w-3" : "hidden"}
                src="assets/images/stroke.png"
              />
            </button>
            {faqNum == item.id && (<div className="mt-2 text-[#000000] text-[18px] pl-0 pt-3 py-3 pb-4 w-11/12 font-normal leading-6">
              <p className="">
                {item.answer}
              </p>
            </div>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
