import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaCoffee, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3A2720] text-[#E6D3C3]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#E6D3C3] rounded-full flex items-center justify-center">
              <FaCoffee className="text-[#3A2720] text-sm" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">MYLK Co*</h3>
              <p className="text-xs text-[#C9AE9A]">
                Traditional milk beverages
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/items" className="hover:text-white">Menu</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/login" className="hover:text-white">Account</Link>
          </div>

          {/* Social */}
          <div className="flex justify-end gap-3">
            <a className="w-8 h-8 bg-[#5A3A2E] rounded-full flex items-center justify-center hover:bg-[#7B5244]">
              <FaFacebook size={14} />
            </a>
            <a className="w-8 h-8 bg-[#5A3A2E] rounded-full flex items-center justify-center hover:bg-[#7B5244]">
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#5A3A2E] mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-[#C9AE9A]">
            © 2024 MYLK Co*
          </p>

          <p className="flex items-center gap-1 text-[#C9AE9A] mt-2 md:mt-0">
            Made with <FaHeart className="text-[#E6D3C3]" size={10} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
