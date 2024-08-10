"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Project", path: "#project" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          WARDESSU
        </Link>
        <div className="mobile-menu block md:hidden">
          <button 
            onClick={toggleNavbar} 
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="text-white">
            {navbarOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className={`menu ${navbarOpen ? 'block' : 'hidden'} md:block md:w-auto`} id="navbar">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
