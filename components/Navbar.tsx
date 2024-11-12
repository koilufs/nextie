"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, ChartColumn, Trophy, Menu, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const navitems = [
  { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { title: 'Analytics', href: '/analytics', icon: ChartColumn },
  { title: 'Leaderboard', href: '/leaderboard', icon: Trophy },
];


const Navbar = () => {
  const width = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if(width >= 700){
      setIsMenuOpen(false)
    }

  }, [width])

  return (
    <div className="bg-slate-900 text-white p-4 flex justify-around items-center h-[100px]">
      {/* Home Link */}
      <Link href="/">
        <span className=" lg:text-4xl md:text-3xl sm:text-xl">Home</span>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex items-center text-white"
      >
        <Menu size={24} />
      </button>

      {/* Nav Items */}
      <ul
        className={cn(`flex-col md:flex md:flex-row gap-4 md:gap-10 mt-4 md:mt-0`, isMenuOpen ? "flex absolute top-[60px] right-[60px] bg-slate-900 p-2 rounded" : "hidden")}
      >
        {navitems.map((item, index) => (
          <li
            className="hover:bg-slate-700 cursor-pointer p-2 rounded"
            key={index}
          >
            <Link href={item.href}>
              <span className="flex flex-row gap-2 items-center">
                {item.icon && React.createElement(item.icon, { size: 20 })}
                {item.title}
              </span>
            </Link>
          </li>
        ))}
        {
          width < 768 && (
            <li className="hover:bg-slate-700 cursor-pointer p-2 rounded">
            <Link href="/profile">
              <span className="flex flex-row gap-2 items-center">
                <User size={20} />
                Profile
              </span>
            </Link>
          </li>
          )}
      </ul>

      <Link href="/profile" className="rounded-[999px] p-1 hover:bg-slate-700 hidden md:flex">
        <User />
      </Link>
    </div>
  );
};

export default Navbar;
