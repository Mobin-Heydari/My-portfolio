"use client";

import React from 'react'
import { FloatingNav } from './ui/FloatindNav'
import { FaBook, FaHome, FaPhoneAlt, FaProjectDiagram } from 'react-icons/fa';


function Navbar() {
  return (
    <>
        <FloatingNav navItems={[
            {name: 'Home', link: '/', icon: <FaHome />},
            {name: 'about', link: '#about', icon: <FaHome />},
            {name: 'projects', link: '#projects', icon: <FaProjectDiagram />},
            {name: 'blogs', link: '#blogs', icon: <FaBook />},
        ]}/>
    </>
  )
}

export default Navbar
