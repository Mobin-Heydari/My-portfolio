"use client";

import React from 'react'
import { FloatingNav } from './ui/FloatingNavbar';
import { FaBook, FaHome, FaMedal, FaRegFileCode } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from "react-icons/md";
import Link from 'next/link';


function Navbar() {
  return (
    <>
        <FloatingNav navItems={[
            {name: 'Home', href: '/', icon: <FaHome className="text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark"/>},
            {name: 'About', href: '/about', icon: <FaMedal className="text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark"/>},
            {name: 'Projects', href: '/projects', icon: <FaRegFileCode className="text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark"/>},
            {name: 'Blogs', href: '/blogs', icon: <MdOutlineLibraryBooks className="text-main-text-light hover:text-hover-light dark:text-main-text-dark dark:hover:text-hover-dark"/>},
        ]}/>
    </>
  )
}

export default Navbar
