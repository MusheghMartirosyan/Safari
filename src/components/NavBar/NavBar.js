import "./NavBar.css"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<div className="navbar">
			<h3>SAFARI</h3>
			<nav ref={navRef}>
                <a href="#home">Home</a>
                <a href="#destinations">Top destinations</a>
                <a href="#information">Travel information</a>
                <a href="#contact">Contact Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                <button>Book a tour</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar;