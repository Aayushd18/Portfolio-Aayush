import Image from "next/image"



export function Navbar() {
  return (
    <nav>
      <div className="flex flex-row justify-between rounded-b-3xl" style={{backgroundImage: "url('/navbg.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className="flex justify-center align-top">
          <h1 className="portfolio-logo p-6 mx-10 text-white">PORTFOLIO | Explore</h1>
        </div>
        <div className=" pages-nav mx-10">
          <div className="pages-nav__item mx-5">
            <a className="link link--page">Home</a>
          </div>
          <div className="pages-nav__item mx-5">
            <a className="link link--page">Projects</a>
          </div>
          <div className="pages-nav__item mx-5">
            <a className="link link--page">Skills</a>
          </div>
          <div className="pages-nav__item mx-5">
            <a className="link link--page">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  )
}