import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { Slide } from "react-awesome-reveal"
import Typewriter from 'typewriter-effect';




export function Home() {

  
  return (
    <div className="flex"  id='home'>
      
      <div className='follow-con pl-4 z-50 mt-11 pt-11 w-auto fixed'>
        <div className='flex mt-11'>
          <h1 className='followme mb-5'>Get In Touch</h1>
          <div className=" h-60 w-0.5 slant-line"></div>
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
          <Link href='https://www.instagram.com/aayush1807/'>
            <a>
              <FontAwesomeIcon icon={faInstagram} id='insta' size='xl' beatFade className='mt-7' color='white' />
            </a>
          </Link>
        </div>
      </div>
      <div className=' home flex flex-col md:flex-row items-center md:items-start  align-top justify-evenly px-6'>
        <div className="p-6 md:mt-11 md:pt-11 home-info">
          <div>
            <Slide>

              <h1 className="text-lg md:text-5xl greeting pl-6">Good To See You Here! 👋 </h1>
            </Slide>
            <Slide direction='right' duration={1500}>
            
            <h1 className=" text-3xl md:text-7xl text-purple-400 pl-6">I'm Aayush Deshmukh</h1>
            </Slide>
            <h1 className='profession text-xl md:text-4xl pl-6'>
            <Typewriter
              options={{
                strings: ["A full stack developer", "A web3 developer", "Follow my Twitter", "Wanna play chess?"],
                autoStart: true,
                loop: true,
                delay: "100",
              }}
            />
            </h1>
          </div>

          <div className='flex items-start ml-7 flex-col justify-center mt-10 text-white'>
            <button
             className="bg-transparent hover:bg-purple-500 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
             ><Link target='_blank' href='https://drive.google.com/file/d/1_npcK8mE4LPKnoBE4MHtlR2nEujj93Q-/view?usp=sharing' >View Resume</Link></button>
          </div>
        </div>
        <Slide direction="up" triggerOnce>

          <div className='bio pt-10 mt-6 flex ml-9 flex-col items-center'>
            <div className=' hidden lg:flex border-4 rounded-3xl overflow-hidden border-purple-400'>
              <Image src={'/aayush.jpeg'} width={250} height={250}/>
            </div>
            <div className=' hidden md:flex lg:hidden border-4 rounded-3xl overflow-hidden border-purple-400'>
              <Image src={'/aayush.jpeg'} width={200} height={200}/>
            </div>
            <div className=' md:hidden border-4 rounded-3xl overflow-hidden border-purple-400'>
              <Image src={'/aayush.jpeg'} width={150} height={150} />
            </div>
            <div className=' bio-text text-center text-white text-md md:text-lg px-5 md:px-2 mt-8 max-w-xs md:max-w-sm'>WORK ETHICS PLAYS A MAJOR ROLE IN CAREER BUILDING</div>
            <div className='text-white text-2xl pt-8 pb-11 font-semibold '>Be Consistent</div>
          </div>
        </Slide>
      </div>
    </div>
  )
}