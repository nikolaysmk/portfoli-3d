import { useState } from 'react';

import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets/';

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive('');
        window.scrollTo(0, 0);
      }}
    >
      <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
      <p className="text-white text-[18px] font-bold cursor-pointer flex">
        SmK &nbsp; <span className="sm:block hidden"> | JS | React | NodeJs</span>
      </p>
    </Link>
  );
};

const NavLinks = ({ active, setActive }) => {
  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`
            ${active === link.title ? 'text-white' : 'text-secondary'}
              hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <Link to={link.id} className="text-[18px]">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileNavLinks = ({ active, setActive }) => {
  return (
    <ul className="list-none flex flex-col p-6 gap-10 absolute rounded-xl top-10 right-0 z-10 bg-primary">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`
            ${active === link.title ? 'text-white' : 'text-secondary'}
              hover:text-white  text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive('')}
        >
          <Link to={link.id} className="text-[18px]">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <NavLinks active={active} setActive={setActive} />
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={active ? close : menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer object-contain"
            onClick={() => setActive(active ? '' : 'menu')}
          />
          {active && <MobileNavLinks active={active} setActive={setActive} />}
        </div>
      </div>
    </nav>
  );
};

// Q: пробел в unicode в jsx?
// A: &nbsp;
// A
// A: &#32;
