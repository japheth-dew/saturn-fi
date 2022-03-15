import logo from "../img/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import Badge from "./Badge";
import { useRef } from "react";
import styled from "styled-components";

const Navigation = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <StyledNav>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <nav ref={navRef}>
          <a href="#">Saturn Earn</a>

          <a href="#">Saturn Ramp</a>

          <a className="badge" href="#">
            SDK/API Docs <Badge text="coming soon" />
          </a>

          <a className="badge" href="#">
            Saturn Escrow Docs <Badge text="coming soon" />
          </a>

          <a href="#">Contact Us</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </StyledNav>
  );
};

const StyledNav = styled.nav`

.logo{
  margin-right: 2rem;
}
header{
  display: flex;
  align-items: center;
  justify-content: space-between;

}

header .nav-btn{
  visibility: hidden;
  opacity: 0;
  font-size: 1.8rem;
}


nav a{
margin: 0 1rem;
font-size: 14px;

}
  nav a:hover,
  nav a:hover {
    background: #5465ff;
    transition: 0.5s;
  }

  nav .badge  {
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
  }



  button {
    background: transparent;
    border: none;
    color: white;
  }

  
  @media (max-width: 1200px) {
   
  }

  @media only screen and (max-width: 1024px){
  header .nav-btn{
  visibility: visible;
  opacity: 1;
}

header nav{
  position: fixed; 
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem; 
  background:linear-gradient(180deg, #5465FF 1.04%, rgba(153, 163, 255, 1) 100%);
  transition: 1s;
  transform: translateY(-100vh);
}

header .responsive_nav{
  transform: none;
}
nav .nav-close-btn{
  position: absolute;
  top: 2rem;
  right: 2rem;
}

nav a{
  font-size: 1.3rem;
}
  }

  @media (max-width: 952px) {
   
        a:hover,
    a:active {
      background: none;
      color: #5465ff;
    }
`;

export default Navigation;
