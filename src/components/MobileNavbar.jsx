

import CaretDownIcon from "./Icons/CaretDownIcon";
import { GrCart } from "react-icons/gr"
import { FiHeart } from "react-icons/fi"
import { AiOutlineCloseSquare } from "react-icons/ai"
import UserIcon from "./Icons/UserIcon";
import logo from "/src/assets/Icons/logo.png";
const MobileNavbar = ({ SetIsOpen }) => {

    return (
        <nav className=" bg-[#447B02] h-screen flex-col sm:flex   gap-[9rem] items-center justify-between z-[2000] m-auto  p-10">
            <div className="logo flex justify-between gap-4 ">
                <img src={logo} alt="Logo" />
                <button onClick={() => SetIsOpen(false)} className="text-[40px] text-[#FFFF]">
                    <AiOutlineCloseSquare />
                </button>

            </div>
            <ul className=" gap-[9rem] text-[28px] flex-col text-[#FFFF] mt-8">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Product</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>

            <div className="flex items-center border gap-3 p-2  w-[160px] mt-4">
                <UserIcon />
                <p className="text-[24px] text-[#FFFF]">Account</p>
                <CaretDownIcon />
            </div>
            <div className=" flex gap-4  text-[#FFFF] text-[40px] mt-6">
                <FiHeart />
                <GrCart />
            </div>



        </nav>
    )
}
export default MobileNavbar;