
import logo from "/src/assets/Icons/logo.png";
const Navbar = () => {
    return (
        <nav className="flex container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="flex">
                <li><a href="/">Home</a></li>
                <li><a href="/about">Product</a></li>
                <li><a href="/services">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;