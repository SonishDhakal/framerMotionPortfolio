//  data

import CountUp from 'react-countup';
import {FaHtml5,FaCss3,FaJs,FaReact,FaWordpress, FaFigma} from 'react-icons/fa'
import {SiFramer,SiNextdotjs,SiAdobexd,SiAdobephotoshop} from 'react-icons/si'
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles'
import index from '..';
import { useState } from 'react';
import { fadeIn } from '../../variants';
import { motion } from 'framer-motion';
import Image from 'next/image';



const About = () => {

  const [findex,setfindex] = useState(0)
  return (
    <div className='h-full bg-primary/30 py-32 xl:text-left text-center'>
    <Circles />
    <motion.div 
     variants={fadeIn('right', 0.5)}
  initial='hidden'
  animate='show'
  exit='hidden'
  transition={{duration:1,ease:'easeInOut'}}
    className="hidden xl:flex absolute bottom-0 -left-[17%]"
    >
      <Image height={500} width={500} src='/avatar.png' />
    </motion.div>
    <div 
    className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6"
    >
      <div className=' flex flex-1 flex-col justify-center'>
        <h2 className='h2'>Captivating <span className='text-accent'>Stories</span> birth magnificant desings</h2>
        <p className='xl:max-w-[500px] max-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur libero deserunt, voluptatibus quisquam illum voluptate debitis perspiciatis sit quis.</p>
      <div className=' my-8 xl:my-0 hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0'>
    
          <div className='relative flex-1 after:w-[1px] after:h-full
          after:bg-white/10 after:absolute after:top-0 after:right-0'>
           <div className='text-2xl xl:text-4xl font-extrabold text-accent'>

            <CountUp start={0} end={10} duration={5} />+
           </div>
           <div className="text-xs uppercase tracking-[1px] leading-[1.4]">Years of Experience</div>
           
        </div>
      
   
          <div className=' relative flex-1 after:w-[1px] after:h-full 
          after:bg-white/10 after:absolute after:top-0 after:right-0'>
           <div className='text-2xl xl:text-4xl font-extrabold text-accent'>

            <CountUp start={0} end={200} duration={5} />+
           </div>
           <div className="text-xs uppercase tracking-[1px] leading-[1.4]">Satisfiend Customers </div>
           
      
      </div>
      <div>
          <div className='relative flex-1 '>
           <div className='text-2xl xl:text-4xl font-extrabold text-accent '>

            <CountUp start={0} end={1000} duration={5} />+
           </div>
           <div className="text-xs uppercase tracking-[1px] leading-[1.4]">Finished Projects</div>
           
        </div>
      </div>
      </div>
      </div>
      <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item,index) =>{
            return (
              <div 
            className={`${index===findex && 'text-accent after:w[-100%] after:bg-accent after:transition-all'} 
            cursor-pointer capitalize xl:text-lg relative
             after:w-8 after:h-[2px] after:bg-white 
             after:absolute after:-bottom-1 after:left-0`}
              key={item.index}
              onClick={() => setfindex(index)}
              >{item.title} </div>
            )
          })}
        </div>

        <div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[findex].info.map((item,itemIndex) =>{
            return <div keys={itemIndex} 
            className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
             <div className='gap-x-4 flex'>
             {item.icons?.map((icon,iconIndex) => (
                <div>{icon}</div>
              )) }
             </div>
              </div>
          })}
        </div>
      
      
      
      
      
      </div>

    </div>
    </div>
    
  )
}

export default About;
