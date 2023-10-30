import { useEffect, useState } from "react";
import CaretDownIcon from "./Icons/CaretDownIcon";
import CartIcon from "./Icons/CartIcon";
import LoveIcon from "./Icons/LoveIcon";
import UserIcon from "./Icons/UserIcon";
import Search from "./Search";
import logo from "/src/assets/Icons/logo.png"; 
// import { useState } from "react"; 
const Navbar = () => { 
 
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      // Function to handle the scroll event
      const handleScroll = () => {
        if (window.scrollY > 15) {
          // If the user has scrolled, set the 'scrolled' state to true
          setScrolled(true);
        } else {
          // If the user is at the top, set the 'scrolled' state to false
          setScrolled(false);
        }
      };
  
      // Add the scroll event listener when the component mounts
      window.addEventListener("scroll", handleScroll);
  
      // Clean up by removing the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const navbarClass = scrolled ? "bg-[white] shadow-lg border-bottom" : "";
    return (
        <div className={`py-5 hidden md:block md:fixed w-full ${navbarClass}`}>
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