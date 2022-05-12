import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'



export function Home() {
  return (
    <div className=" flex">
      <div className='pl-4 fixed'>
        <div className='flex'>
          <h1 className='followme mb-5'>Get In Touch</h1>
          <div className=" h-60 w-0.5 bg-purple-400 mt-11 ml-1"></div>
        </div>
        <div className=' ml-3 mt-4 flex flex-col'>
          <Link href='https://twitter.com/aayushdeshmukh'>
            <a>
              <FontAwesomeIcon icon={faTwitter} color='#55acee' size='xl' beatFade className='mt-7' />
            </a>
          </Link>
          <Link href='https://github.com/Aayushd18' target='_blank'>
            <a>
              <FontAwesomeIcon icon={faGithub} color='white' size='xl' beatFade className='mt-7' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/aayushd18/' target='_blank'>
            <a>
              <FontAwesomeIcon icon={faLinkedin} color='#0976b4' size='xl' beatFade className='mt-7' />
            </a>
          </Link>
          <FontAwesomeIcon icon={faInstagram} id='insta' size='xl' beatFade className='mt-7' color='white' />
        </div>
      </div>
      <div className="p-6 ml-11 mt-11 pl-11 flex flex-col justify-between home-info">
        <div>
          <h1 className="text-5xl greeting pl-6">Good To See You Here! 👋 </h1>
          <h1 className=" text-7xl text-purple-400 pl-6">I am Aayush Deshmukh</h1>
          <h1 className='profession'>CODER | WEB3 DEVELOPER | FULL STACK DEVELOPER</h1>
        </div>
        <div className='more'>
          <h1 className='text-white'>Explore More</h1>
          <div>
            <FontAwesomeIcon icon={faArrowDown} color='#cecece' size='2x' beat className='ml-8'/>
          </div>
        </div>
      </div>
      <div className='bio'>
        <div className='my-image'>
          <img src='/myImage.jpeg' alt='Image'/>
        </div>
        <p className=' bio-text text-lg'>
          Work ethics plays a major role <br /> in career building
        </p>
      </div>
    </div>
  )
}