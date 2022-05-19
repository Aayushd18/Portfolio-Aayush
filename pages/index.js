import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Contact from '../components/Contact';
import { Home } from '../components/Home';
import { Navbar } from '../components/Navbar';

import Projects from '../components/Projects';
import Skills from '../components/Skills';
// import useDarkMode from "../components/DarkMode";



export default function Main() {

  
  return (
    <div className="main">
      <Head>
        <title>Portfolio | Aayush</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/logo-removebg-preview.png" />
      </Head>
      
      <Home />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}
