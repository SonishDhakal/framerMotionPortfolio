import { motion } from "framer-motion";
import Circles from "../../components/Circles";

import {BsArrowRight} from 'react-icons/bs'




const Contact = () => {
  return <div className="h-full bg-primary/30 ">
    <div className="container max-auto py-32 text-center xl:text-left flex items-center justify-center h-full">


      <div className=" flex flex-col w-full max-w-[700px]"
     >
        {/* text
        
        
        */}

        <h2 className="h2 text-center mb-12">Let's <span className="text-accent">Connct.</span></h2>
      {/* form */}

      <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
        {/* group */}

        <div className="flex gap-x-6 w-full">
          <input type="text" className="input" placeholder="name" />
          <input type="text" className="input" placeholder="email" />


        </div>
        <input type="text" placeholder="subkect" className="input" />
        <textarea placeholder="messag" className="textarea"></textarea>
        <button
         className=" 
         group btn rounded-full border
          border-white/50 mx-w-[170px] px-8
           transition-all duration-300 flex items-center 
           overflow-hidden hover:border-accent 
           justify-center">
            <span>Let's Talk</span>
            <BsArrowRight />
            </button>
      </form>
      </div>
    </div>

  </div>
};

export default Contact;
