import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";


export function Newnav() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(false);

  const [colorChange, setColorchange] = useState(true);
  const changeNavbarColor = () => {
    console.log(window.scrollY)
    if(window.scrollY >= 5){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };
  
  React.useEffect(() => {
    // window is accessible here.
    changeNavbarColor()
    window.addEventListener('scroll', changeNavbarColor);
  }, []);
  return (
    // <header className="sticky z-30 top-0 bg-white ">
      <>
      <div
        className={`nav ${
          navActive ? "active" : ""
        } sticky z-30 top-0 
        `}
      >
        
        <div
          className={`menu__icon ${
            navActive ? "active" : "inactive"
          } ${
            colorChange ? "menu__item cloChange" : "menu__item"
          }`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      
      </div>
      <div className={`${ navActive ? "" : "hidden" } newnav`}>
      <div className="align-top top-6 left-11 absolute">
          <h1 className="portfolio-logo  text-white md:text-3xl text-xl">PORTFOLIO | Explore</h1>
        </div>
        <div className=" pages-nav  md:flex flex-col">
          <div className="pages-nav__item lg:mx-5 md:flex" onClick={() => setNavActive(!navActive)}>
            <a className="link link--page cursor-pointer" href="#home">Home</a>
          </div>
          <div className="pages-nav__item lg:mx-5 md:flex" onClick={() => setNavActive(!navActive)}>
            <a className="link link--page cursor-pointer"  href="#skills">Skills</a>
          </div>
          <div className="pages-nav__item lg:mx-5  md:flex" onClick={() => setNavActive(!navActive)}>
            <a className="link link--page cursor-pointer" href="#projects">Projects</a>
          </div>
          <div className="pages-nav__item lg:mx-5  md:flex" onClick={() => setNavActive(!navActive)}>
            <a className="link link--page cursor-pointer" href="#contact">Contact Me</a>
          </div>
          
        </div>
      </div> 
      </>
    
  );
};

// export default Newnav;