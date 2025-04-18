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
            {name: 'Home', link: <Link href={'/'} />, icon: <FaHome />},
            {name: 'About', link: <Link href={'/about'} />, icon: <FaMedal />},
            {name: 'Projects', link: <Link href={'/projects'} />, icon: <FaRegFileCode />},
            {name: 'Blogs', link: <Link href={'/blogs'} />, icon: <MdOutlineLibraryBooks />},
        ]}/>
    </>
  )
}

export default Navbar
