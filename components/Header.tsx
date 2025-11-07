import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
            {children}
        </a>
    </li>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#112240] border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-white cursor-pointer">
            G-LogicLens
          </a>
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-8 text-lg">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#simulations">Simulations</NavLink>
              <NavLink href="#features">Why choose us</NavLink>
              <NavLink href="#about-contact">About us</NavLink>
              <NavLink href="#about-contact">Contact</NavLink>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-gradient-to-br from-cyan-400 to-blue-600 text-white py-2 px-6 text-md font-semibold rounded-lg cursor-pointer transition-all duration-300 transform shadow-md shadow-blue-500/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40">
              Sign Up
            </button>
            <button className="md:hidden text-white" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;