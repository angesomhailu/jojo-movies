import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import { IoMdLogOut } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link href="/">
            <Logo style="h-auto w-[100px]" />
          </Link>

          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-pointer font-semibold text-gray-400 hover:text-white">
              Home
            </li>

            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <BiSearch className="sm hidden h-6 w-6 sm:inline cursor-pointer" />
          <div className="relative group">
            <IoMdLogOut className="h-6 w-6 cursor-pointer" onClick={() => signOut()} />
            <span className="absolute -left-4 -bottom-6 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
              Sign Out
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;