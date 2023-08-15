import Image from "/src/Assets/images/plants.png";
import icon from "/src/assets/Icons/phone-icon.png";
import icon1 from "/src/assets/Icons/Lock-icon.png";
import icon2 from "/src/assets/Icons/check-icon.png";
const Hero = () => {

    return (
        <section>
            <div className="container-auto mt-[7rem] flex" >
                <div className="w-1/2 pt-11">
                    <h1 className="text-3xl font-bold text-[#447B02] text-[96px] leading-[120px]">Title Text</h1>
                    <p className="text-[24px] font-Mulish leading-8 text-[#2F2F2F]">Lorem ipsum dolor sit amet consectetur.
                        Id nam pellentesque ullamcorper et condimentum est enim.
                        Pharetra placerat lorem aliquam at dolor ut ut. Proin non ac </p>
                    <button className="btn-tab">Explore</button>
                </div>
                <div>
                    <img src={Image} />
                </div>
            </div>

            <div className="md:container px-20 flex mt-11 gap-11 mb-[2rem]">
                <div className="flex gap-3 w-[236] h-[49]">
                    <div>
                        <img src={icon} alt="" />
                    </div>
                    <div>
                        <h4 className="text-[16px] leading-5 font-medium font-Mulish" >Customer service 24/7</h4>
                        <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                    </div>
                </div>

                <div className="flex gap-3 w-[236] h-[49]">
                    <div>
                        <img src={icon1} alt="" />
                    </div>
                    <div>
                        <h4 className="text-[16px] leading-5 font-medium font-Mulish" >Secured payment</h4>
                        <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                    </div>
                </div>

                <div className="flex gap-3 w-[236] h-[49]">
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