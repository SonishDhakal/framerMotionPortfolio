import {} from 'react-icons/rx'

import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';


import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'
import ServiceSlider from '../../components/ServiceSlider';

const Work = () => {
  return <div className='h-full bg-primary/30 py-36 flex justify-center items-center'>
    <Circles />
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row gap-x-8'>

        {/* text */}

        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <h2 className='h2 xl:mt-8'>My Service <span>.</span>
          </h2>
          <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti id voluptates. Ipsa voluptatibus fugiat qui aut nemo ex ab.</p>
          </div>

        {/* slidder */}

       <div className='w-full xl:max-w-[65%]'>
       <ServiceSlider />
       </div>

      </div>

    </div>




      <Bulb />
  </div>;
};

export default Work;
