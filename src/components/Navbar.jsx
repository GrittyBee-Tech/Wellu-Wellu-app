import CaretDownIcon from "./Icons/CaretDownIcon";
import CartIcon from "./Icons/CartIcon";
import LoveIcon from "./Icons/LoveIcon";
import UserIcon from "./Icons/UserIcon";
import Search from "./Search";
import logo from "/src/assets/Icons/logo.png";
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {

    const [isOpen, SetIsOpen] = useState(false)


    const toggleNavbar = () => {

        SetIsOpen(!isOpen)
    }



    return (
        <section>
            <div className="shadow-md py-5 ">
                <nav className="flex sm:gap-[3rem]  gap-[3rem] items-center justify-between container-auto m-auto ">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className=" gap-[2rem] hidden sm:flex">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Product</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    <div className="w-4/12 ">
                        <Search />
                    </div>
                    <div className="sm:flex hidden items-center border gap-3 p-1 sm:p-2">
                        <UserIcon />
                        <p>Account</p>
                        <CaretDownIcon />
                    </div>
                    <div className=" hidden">
                        <LoveIcon />
                    </div>

                    <div>
                        <CartIcon />
                    </div>
                    <button onClick={toggleNavbar} className="sm:hidden text-[23px]">
                        <GiHamburgerMenu />
                    </button>
                </nav>
            </div>
            {isOpen && (<div className=" fixed top-0 w-[100%]sm:hidden ">
                <MobileNavbar SetIsOpen={SetIsOpen} />
            </div>)}


        </section>

    );
};

export default Navbar;