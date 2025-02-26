import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <nav className={`fixed top-0 left-0 w-full z-50 bg-[#1F242D] transition-all duration-300 ${
      scrolling ? "shadow-lg" : "shadow-none"
    }`}>
      <div className="container">
        <div className="flex items-center justify-between w-full h-20 p-4">
          <h1 className="text-white text-xl font-medium z-50">
            <Link to="/">
              Lucas <span className="text-[#00EEFF]">Reed</span>
            </Link>
          </h1>

          {/* List */}
          <ul className="hidden lg:flex gap-10">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="lg:hidden z-50">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Tablet and Mobile */}
          <div className={`absolute lg:hidden top-20 left-0 w-full z-50 bg-[#1F242D] flex flex-col items-center gap-2 py-10 font-semibold text-lg transform transition-transform ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <li className="nav-item list-none my-3">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item list-none my-3">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item list-none my-3">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="nav-item list-none my-3">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item list-none my-3">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item list-none my-3">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
