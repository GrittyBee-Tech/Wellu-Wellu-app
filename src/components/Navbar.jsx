import CaretDownIcon from "./Icons/CaretDownIcon";
import CartIcon from "./Icons/CartIcon";
import LoveIcon from "./Icons/LoveIcon";
import UserIcon from "./Icons/UserIcon";
import Search from "./Search";
import logo from "/src/assets/Icons/logo.png";
const Navbar = () => {
    return (
        <div className="shadow-md py-5">
            <nav className="flex gap-[3rem] items-center justify-between container-auto m-auto ">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="flex gap-[2rem]">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Product</a></li>
                    <li><a href="/services">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div className="w-5/12">
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
                    <CartIcon />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;