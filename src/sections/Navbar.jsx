import { useState } from 'react';
import { navLinks } from '../constants/index.js';
import { Link } from 'react-router-dom';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex flex-col sm:flex-row gap-4">
    {navLinks.map((item) => (
      <li key={item.id}>
        <Link
          to={item.href}
          className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
          onClick={onClick}>
          {item.name}
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <a href="/" className="text-gray-400 font-bold text-xl hover:text-white transition-transform duration-300 hover:scale-105">
            Adrian
          </a>

          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="hidden sm:block">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`transition-all duration-300 sm:hidden overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
