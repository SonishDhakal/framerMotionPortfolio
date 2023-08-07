import TestimonialSlider from "../../components/TestimonialSlider";
import {motion} from 'framer-motion'
import { fadeIn } from "../../variants";
const Testimonials = () => {
  return <div className="h-full bg-primary/30 py-36 flex justify-center items-center">
    <div className="container mx-auto">
    <div>
    <h2 className='h2 text-center'>What client <span className="text-accent">Say</span>
          </h2>
    </div>
    <motion.div
     variants={fadeIn('down', 0.5)}
     initial='hidden'
     animate='show'
     exit='hidden'
     transition={{duration:1,ease:'easeInOut'}}
      className="xl:px-20 h-max  ">
      <TestimonialSlider />
    </motion.div>
    </div>
  </div>
};

export default Testimonials;
