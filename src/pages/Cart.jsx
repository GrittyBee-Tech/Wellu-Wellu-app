import Faq from "../components/About/Faq"
import Testimonials from "../components/Home/Testimonials"

const Cart = () => {
    return (
        <div className="mt-[5rem] md:mt-0">
            <div className="container m-auto">
                <div className=" border-b border-[#899FB5]">
                    <div className="text-center md:w-7/12 m-auto py-[2rem] md:py-[3rem] px-5">
                        <h1 className="text-[#447B02] md:font-bold md:text-[45px] text-[25px] mb-5">
                            Cart
                        </h1>
                    </div>
                    <div className="bg-[white] p-5 flex flex-col justify-center items-center gap-5 mb-[5rem] shadow-lg md:pb-[6rem]">
                        <h4>Your cart is empty!</h4>
                        <p>Browse our categories and discover our best deals!</p>
                        <div className="mt-4"><a href="/services" className="bg-[#447b02] px-5 py-2 rounded text-white hover:text-[#447b02] hover:outline-bg-[#447b02] hover:bg-[white]">Start shopping</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
