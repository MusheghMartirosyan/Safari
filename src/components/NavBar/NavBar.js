// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary navbar">
//       <Container>
//         <Navbar.Brand href="#home">SAFARI</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#destinations">Top destinations</Nav.Link>
//             <Nav.Link href="#information">Travel information</Nav.Link>
//             <Nav.Link href="#contact">Contact Us</Nav.Link>
//             <button>Book a tour</button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;



import { useRef } from "react";
import { FaTimes } from "react-icons/fa";


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
                <a href="#info">Travel information</a>
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
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 12H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 17H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
			</button>
		</div>
	);
}

export default Navbar;