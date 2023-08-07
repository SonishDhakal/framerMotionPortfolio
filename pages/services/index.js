import {} from 'react-icons/rx'

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';


import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'
import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
  return <div className='h-full bg-primary/30 py-36 flex justify-center items-center'>
    <Circles />
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row gap-x-8'>

        {/* text */}

        <motion.div
         variants={fadeIn('up', 0.5)}
         initial='hidden'
         animate='show'
         exit='hidden'
         transition={{duration:1,ease:'easeInOut'}}
          className=' text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0'>
          <h2 className='h2 xl:mt-8'>My Service <span>.</span>
          </h2>
          <p className="mb-4 max-w-[400px] mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti id voluptates. Ipsa voluptatibus fugiat qui aut nemo ex ab.</p>
          </motion.div>

        {/* slidder */}

       <motion.div
        variants={fadeIn('down', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration:1,ease:'easeInOut'}}
       className='w-full xl:max-w-[65%] '>
       <ServiceSlider />
       </motion.div>

      </div>

    </div>




      <Bulb />
  </div>;
};

export default Services;
