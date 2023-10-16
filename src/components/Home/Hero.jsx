import Image from "/src/assets/img/plants.png";
import icon from "/src/assets/Icons/phone-icon.png";
import icon1 from "/src/assets/Icons/Lock-icon.png";
import icon2 from "/src/assets/Icons/check-icon.png";
const Hero = () => {

    return (
        <section style={{background: 'linear-gradient(45deg, rgb(255, 255, 255), rgb(234 247 232), rgb(68, 123, 2))'}} >
            <div className="container-auto pt-[7rem] md:flex" >
                <div className="md:w-1/2 pt-11">
                    <h1 className="text-3xl font-bold text-[#447B02] text-[50px] md:text-[80px] leading-[120px]">WELLU WELLU Wellness Centre </h1>
                    <p className="text-[14px] md:text-[24px] font-Mulish leading-8 text-[#2F2F2F]" >
                    …Providing easy access to trusted Natural (Non-Synthetic, Herbal, Botanical or Phytomedicines) products and scarce Drugs for maximal Health Care.
                        </p>
                    <button className="btn-tab">Explore</button>
                </div>
                <div className="my-[5rem] md:mt-0">
                    <img src={Image} />
                </div>
            </div>

            <div className="md:container md:px-20 md:flex mt-11 gap-11 pb-[2rem]">
                <div className="flex gap-3 md:w-[236] mb-3">
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div>
                        <h4 className="text-[16px] leading-5 font-medium font-Mulish" >Customer service 24/7</h4>
                        <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                    </div>
                </div>

                <div className="flex gap-3 md:w-[236] mb-3">
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                    <div>
                        <h4 className="text-[16px] leading-5 font-medium font-Mulish" >Secured payment</h4>
                        <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                    </div>
                </div>

                <div className="flex gap-3 md:w-[236] mb-3">
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <div className="w-[202] h-[47]">
                        <h6 className="text-[16px] leading-5 font-medium font-Mulish" >Trusted Services</h6>
                        <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;