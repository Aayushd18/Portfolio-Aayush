import { useRef } from "react"
import emailjs from 'emailjs-com'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Fade, Slide } from "react-awesome-reveal";

export default function Contact() {


  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gfomn9p', 'template_fdtygpc', e.target , 'ZeS2yne8o2H1ustZ7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div id="contact" className="flex flex-col  ml-11 mb-5 px-6">
      <div className='flex flex-col justify-center items-center mb-11'>
        <h1 className='contact-heading text-3xl text-center  mb-5'>Start A Conversation</h1>
        <div className=" h-0.5 w-64 bg-purple-400 "></div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center">
        
        <div className="card flex flex-col p-6 md:px-11 md:mx-11 mx-2 w-12/12 lg:w-5/12">
            <form ref={form} onSubmit={handleSubmit}>
              <Fade direction="left" cascade>
                <div className=" text-white flex flex-col my-8">
                  <label htmlFor="name" className="mb-3 text-lg">Name</label>
                  <input type="text" id="name" name="name" onChange={(e)=>{setName(e.target.value)}} className="input-box shadow-lg  p-2 bg-transparent border-b-4 focus:border-2 focus:rounded-lg outline-none" required />
                </div>
                <div className=" text-white flex flex-col my-8">
                  <label htmlFor="phone" className="mb-3 text-lg"> Phone Number (Optional)</label>
                  <input type="text" id="phone" name="phone" onChange={(e)=>{setPhone(e.target.value)}} className="input-box shadow-lg  p-2 bg-transparent border-b-4 focus:border-2 focus:outline-none focus:rounded-lg outline-none" />
                </div>
                <div className=" text-white flex flex-col my-8">
                  <label htmlFor="email" className="mb-3 text-lg">Your Email Address</label>
                  <input type="email" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} className="input-box shadow-lg  p-2 bg-transparent border-b-4 focus:border-2 focus:rounded-lg outline-none" required />
                </div>
                <div className=" text-white flex flex-col my-8">
                  <label htmlFor="message" className=" text-lg mb-3">Message</label>
                  <textarea type="textbox" id="message" name="message" onChange={(e)=>{setMessage(e.target.value)}} className="input-box shadow-lg p-2 bg-transparent border-2 rounded-lg focus:outline-none outline-none" required ></textarea>
                </div>
                {/* <input type='submit' value='send' className="bg-transparent hover:bg-purple-500 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-500 transition-all delay-150 ease-in hover:border-transparent rounded"/> */}
                <button type='submit' id="button" name="button" className="bg-transparent hover:bg-purple-500 text-purple-500 font-semibold hover:text-white py-2 px-4 border border-purple-500 transition-all delay-150 ease-in hover:border-transparent rounded">
                  Send Message
                </button>
              </Fade>
            </form>
        </div>
        <div className="bio hidden md:block p-4 lg:p-11  mt-6 lg:pt-11 lg:ml-11 w-12/12 lg:w-6/12 lg:mr-11">
          <Slide direction="up">

            <h1 className=" font-bold text-3xl text-purple-900 border-b-2 pb-2 text-center">Contact Me @</h1>
            
            <div className="flex items-center justify-center">
              
                  <FontAwesomeIcon icon={faPhoneAlt} color='lightpink'  className='mt-7 mr-3 glyphicon' />
                  <span className="text-sm md:text-lg text-white mt-6 font-semibold text-center">Phone Number :- (+91) 782-827-9982</span>
            </div>
            <div className="flex items-center justify-center">
              <Link href='https://www.google.com/gmail/' target='_blank'>
                <a className="text-white font-semibold mt-3 text-center">
                  <FontAwesomeIcon icon={faGoogle} color='lightpink'  className='mt-7 mr-3 glyphicon' />
                  <span className=" text-sm md:text-lg" >Email :- deshmukhaayush81@gmail.com</span>
                </a>
              </Link>
            </div>
          </Slide>
        </div>

        <div className="bio md:hidden p-4 lg:p-11  mt-6 lg:pt-11 lg:ml-11 w-12/12 lg:w-6/12 lg:mr-11">
          <Slide direction="up">

            <h1 className=" font-bold text-3xl text-purple-900 border-b-2 pb-2 text-center">Contact Me @</h1>
            
            <div className="flex items-center justify-center">
                  <span className="text-xs md:text-lg text-white mt-6 font-semibold text-center">Phone Number :- (+91) 782-827-9982</span>
            </div>
            <div className="flex items-center justify-center">
              <Link href='https://www.google.com/gmail/' target='_blank'>
                <a className="text-white font-semibold mt-3 text-center">
                  <span className=" text-xs md:text-lg" >Email :- deshmukhaayush81@gmail.com</span>
                </a>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}