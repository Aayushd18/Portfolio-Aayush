import { Newnav } from '../components/Newnav';
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";



export function Navbar({ colorTheme, setTheme }) {

  const [colorChange, setColorchange] = useState(true);
  const changeNavbarColor = () => {
    // console.log(window.scrollY)
    if(window.scrollY >= 66){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };

 const toggleDarkmode = () => {
  // if(colorTheme === "light") {
    setTheme(!colorTheme);
    console.log(colorTheme)
 }

 
  
  React.useEffect(() => {
    // window is accessible here.
    changeNavbarColor()
    window.addEventListener('scroll', changeNavbarColor);
  }, []);
  
  return (
    <nav  className={colorChange ? 'navbar colorChange shadow-xl rounded-b-xl' : 'navbar rounded-b-xl'}>
      <div className="flex flex-row justify-between rounded-b-xl" >
        <div className="align-top">
          <h1 className="portfolio-logo p-6 mx-5 lg:mx-10 text-white md:text-3xl text-xl">PORTFOLIO | Explore</h1>
        </div>
        <div className=" pages-nav sm:hidden md:flex">
          <div className="pages-nav__item lg:mx-5 hidden md:flex">
            <a className="link link--page cursor-pointer" href="#home">Home</a>
          </div>
          <div className="pages-nav__item lg:mx-5 hidden md:flex">
            <a className="link link--page cursor-pointer"  href="#skills">Skills</a>
          </div>
          <div className="pages-nav__item lg:mx-5 hidden md:flex">
            <a className="link link--page cursor-pointer" href="#projects">Projects</a>
          </div>
          <div className="pages-nav__item lg:mx-5 hidden md:flex">
            <a className="link link--page cursor-pointer" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="visible md:invisible">
          <div>
            <Fade delay={0.4}>

            <Newnav />
            </Fade>
          </div>
        </div>
      </div>
    </nav>
  )
}