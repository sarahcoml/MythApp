import { useRef, useState } from "react";
import {FaShoppingCart, FaStar } from "react-icons/fa";
import "../style/NavBar.css";

function NavBar() {
    const navRef = useRef();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <header>
            <h3>urbanroots</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                {/* <div className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>Categories</button>
                    {dropdownVisible && (
                        <div className="dropdown-content">
                            <a href="/#">Sustainable</a>
                            <a href="/#">Eco-Friendly</a>
                            <a href="/#">Vegan</a>
                        </div>
                    )}
                </div> */}
                <div className="pages">
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/shop">Shop</a>

                </div>

                <div className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>Categories</button>
                    {dropdownVisible && (
                        <div className="dropdown-content">
                            <a href="/#">Sustainable</a>
                            <a href="/#">Eco-Friendly</a>
                            <a href="/#">Vegan</a>
                        </div>
                    )}
                </div>
                <div className="nav-icons">
                    <a href="/cart"><FaShoppingCart /></a>
                    <a href="/saved"><FaStar /></a>
                    <a href="/signup" className="signup-btn">Sign Up</a>
                </div>
                {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button> */}
            </nav>
            {/* <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button> */}
        </header>
    );
}

export default NavBar;