import { Fade, Slide, JackInTheBox, Reveal, Bounce, Rotate, Hinge, AttentionSeeker } from "react-awesome-reveal";
export default function Projects() {

  const projectsData = [
    {
      img: '/activitytracker.png',
      title: 'Activity Tracker',
      details: "It will collect data on Mobile as well as Desktop devices and show them in a Progressive Web App(PWA).",
      tags: ['Reactjs', "Nodejs", "MongoDB"]
    },
    {
      img: '/portfolio.png',
      title: 'Portfolio Website',
      details: 'Personal portfolio website of about the skills and projects',
      tags: ['NextJS', 'Tailwind CSS']
    },
    
    {
      img: '/moviebrowser.png',
      title: 'Movie Browser',
      details: 'A Movie Catalouge webstie to view details about movies around the world. Sourced by TMDB.',
      tags: ['React', 'CSS']
    },
    {
      img: '/ubereatsclone.jpg',
      title: 'Uber Eats Clone',
      details: 'A clone app for the original app to test my understanding of React Native',
      tags: ['React Native', 'Firebase']
    },
    {
      img: '/securelogin.png',
      title: 'Avalon Coin',
      details: 'A secure login tool which encrypts user login data using PRINT Cipher',
      tags: ['React', 'Python']
    },
    
  ]

  return (
    <div className="flex flex-col items-center ml-11" id="projects">
      <div className='flex flex-col items-center mb-11'>
        <h1 className='project-heading text-3xl ml-2 mb-5'>PROJECTS</h1>
        <div className=" h-0.5 w-64 bg-purple-400 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Slide direction="right" cascade delay={200}>

          {projectsData.map((item, index) => (
            <div className="project max-w-sm rounded flex flex-col justify-between overflow-hidden shadow-lg bg-white mx-4 pb-5" key={index}>
              <div className="p-6">
                <img width={400} height={400} src={item.img} alt="Sunset in the mountains" />
              </div>
              <div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2" style={{color: '#cecece'}}>{item.title}</div>
                  <p className="text-white font-semibold text-base">
                    {item.details}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}