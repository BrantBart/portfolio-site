// import React from "react";
// import "./navbar.scss";
// import IconFull from "../../assets/svg/logofull";
// import Icon from "../../assets/svg/logoicon";
// import { NavLink } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

// const checkboxRef = useRef(null); // Step 1: Create a ref

// const handleClick = () => {
//   if (checkboxRef.current) {
//       checkboxRef.current.checked = true; // Step 3: Use the ref to set checked property
//   }
// };

// const NavbarComp = () => {
//   return (
//     <>
//       <div className="fixed-top">
//         <div class="topnav" id="myTopnav">
//           <Navbar.Brand href="/">
//             <IconFull className="logo" />
//           </Navbar.Brand>
//           <Navbar.Collapse>
//           <input id="dropdownmenu" type="checkbox" name="dropdownmenu" />
//           <label for="dropdownmenu">☰</label>
//             <Nav className="nav-items-top">
//               <NavLink to="/">Home</NavLink>
//               <NavLink to="/about">About</NavLink>
//               <NavLink to="/portfolio">Portfolio</NavLink>
//               <NavLink to="/learn">Learn</NavLink>
//               <NavLink to="/contact">Contact</NavLink>
//               <NavLink to="/blogs">Blogs</NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavbarComp;

import React, { useRef } from "react";
import "./navbar.scss";
import IconFull from "../../assets/svg/logofull";
import Icon from "../../assets/svg/logoicon";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavbarComp = () => {
  const checkboxRef = useRef(null);

  const handleNavLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false; // Set checked property to false
    }
  };

  return (
    <>
      <div className="fixed-top">
        <div className="topnav" id="myTopnav">
          <Navbar.Brand href="/">
            <IconFull className="logo" />
          </Navbar.Brand>
          <Navbar.Collapse>
            <input
              id="dropdownmenu"
              type="checkbox"
              name="dropdownmenu"
              ref={checkboxRef}
            />
            <label htmlFor="dropdownmenu">☰</label>
            <Nav className="nav-items-top">
              <NavLink to="/" onClick={handleNavLinkClick}>
                Home
              </NavLink>
              {/* <NavLink to="/about" onClick={handleNavLinkClick}>
                About
              </NavLink> */}
              <NavLink to="/portfolio" onClick={handleNavLinkClick}>
                Portfolio
              </NavLink>
              {/* <NavLink to="/learn" onClick={handleNavLinkClick}>
                Learn
              </NavLink> */}
              {/* <NavLink to="/contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink> */}
              <NavLink to="/blogs" onClick={handleNavLinkClick}>
                Blogs
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
