import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-[#1F242D] transition-all duration-300 ${scrolling ? "shadow-lg" : "shadow-none"}`}>
      <div className="container">
        <div className="flex items-center justify-between w-full h-20 p-4">
          <h1 className="text-white text-xl font-medium z-50">
            <RouterLink to="/">
              Lucas <span className="text-[#00EEFF]">Reed</span>
            </RouterLink>
          </h1>

          {/* List */}
          <ul className="hidden lg:flex gap-10">
            <li className="nav-item cursor-pointer">
              <ScrollLink to="home" smooth={true} duration={500} offset={-80}>Home</ScrollLink>
            </li>
            <li className="nav-item cursor-pointer">
              <ScrollLink to="about" smooth={true} duration={500} offset={-150}>About</ScrollLink>
            </li>
            <li className="nav-item cursor-pointer">
              <ScrollLink to="skills" smooth={true} duration={500} offset={-80}>Skills</ScrollLink>
            </li>
            <li className="nav-item cursor-pointer">
              <ScrollLink to="services" smooth={true} duration={500} offset={-150}>Services</ScrollLink>
            </li>
            <li className="nav-item cursor-pointer">
              <ScrollLink to="portfolio" smooth={true} duration={500} offset={-200}>Portfolio</ScrollLink>
            </li>
            <li className="nav-item cursor-pointer">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>Contact</ScrollLink>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="lg:hidden z-50">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`absolute lg:hidden top-20 left-0 w-full z-50 bg-[#1F242D] flex flex-col items-center gap-2 py-10 font-semibold text-lg transform transition-transform ${
            menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${scrolling ? "shadow-lg" : "shadow-none"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <li className="nav-item list-none my-3">
              <ScrollLink to="home" smooth={true} duration={500} offset={-80} onClick={toggleMenu}>Home</ScrollLink>
            </li>
            <li className="nav-item list-none my-3">
              <ScrollLink to="about" smooth={true} duration={500} offset={-80} onClick={toggleMenu}>About</ScrollLink>
            </li>
            <li className="nav-item list-none my-3">
              <ScrollLink to="skills" smooth={true} duration={500} offset={-80} onClick={toggleMenu}>Skills</ScrollLink>
            </li>
            <li className="nav-item list-none my-3">
              <ScrollLink to="services" smooth={true} duration={500} offset={-80} onClick={toggleMenu}>Services</ScrollLink>
            </li>
            <li className="nav-item list-none my-3">
              <ScrollLink to="portfolio" smooth={true} duration={500} offset={-80} onClick={toggleMenu}>Portfolio</ScrollLink>
            </li>
            <li className="nav-item list-none my-3">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-80} onClick={toggleMenu}>Contact</ScrollLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
