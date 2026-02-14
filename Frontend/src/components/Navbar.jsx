import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingBag, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/items" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#3A2A1F] h-20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
         <Link to="/" className="flex items-center gap-3">
  <div className="w-10 h-10 bg-[#E8C48E] rounded-full flex items-center justify-center">
    <span className="text-[#3A2A1F] font-bold text-lg">C</span>
  </div>

  <div className="flex flex-col leading-tight">
    <span className="text-xl font-bold text-[#F7E9D6] tracking-wider">
      MYLK Co*
    </span>
    <span className="text-[11px] tracking-[0.25em] text-[#E8C48E]">
      The Daily Ritual
    </span>
  </div>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[#F7E9D6] hover:text-[#E8C48E] font-medium ${
                  isActive(link.path) ? "text-[#E8C48E]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-[#F7E9D6]">
              <FaShoppingBag size={18} />
            </button>

            <Link
              to="/login"
              className="flex items-center gap-2 bg-[#E8C48E] text-[#3A2A1F] px-4 py-2 rounded-full font-medium"
            >
              <FaUser size={14} />
              Sign In
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F7E9D6]"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#3A2A1F] border-t border-[#5A3A2E] py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-2 text-[#F7E9D6]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="block mx-2 mt-3 bg-[#E8C48E] text-[#3A2A1F] px-4 py-2 rounded-full text-center"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
