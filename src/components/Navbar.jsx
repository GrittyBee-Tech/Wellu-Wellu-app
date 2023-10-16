import CaretDownIcon from "./Icons/CaretDownIcon";
import CartIcon from "./Icons/CartIcon";
import LoveIcon from "./Icons/LoveIcon";
import UserIcon from "./Icons/UserIcon";
import Search from "./Search";
import logo from "/src/assets/Icons/logo.png"; 
// import { useState } from "react"; 
const Navbar = () => { 
 

    return (
        <div className="shadow-md py-5 hidden md:block">
            <nav className="flex gap-[3rem] items-center justify-between container-auto m-auto ">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="flex gap-[2rem]">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Product</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div className="w-4/12">
                <Search />
                </div>
                <div className="flex items-center border gap-2 p-2">
                    <UserIcon />
                    <p>Account</p>
                    <CaretDownIcon />
                </div>
                <div>
                    <LoveIcon />
                </div>
                <div>
                   <a href="/cart"> <CartIcon /></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;