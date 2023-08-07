// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];


import Image from "next/image";
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode,Navigation,Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {FaQuoteLeft} from 'react-icons/fa'
const TestimonialSlider = () => {
  return  <Swiper
  modules={[FreeMode,Pagination,Navigation]}
  
   breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15,

    },
    640:{
      slidesPerView:1,
      spaceBetween:15,

    }
  }}
  
  freeMode={true}
  pagination={{ clickable: true }}
  navigation={{clickable:true}}

 
 
  >
    {testimonialData.map((item,index) =>(
      <SwiperSlide key={index}>
        <div className="flex flex-col xl:flex-row items-center gap-x-[5rem] xl:mx-20 py-10 xl:py-0 ">
          <div className="flex flex-col gap-y-3 items-center">
            <div className="w-[80px] xl:w-[120px]">
            <Image src={item.image} className="w-full h-full " width={200} height={200} />
            </div>
          <div>
          <h3>{item.name}</h3>
           <span className="text-white/20">{item.position}</span>
          </div>
          </div>
          <div className="bg-white/20 w-[2px] h-[140px] hidden xl:block">

          </div>
          <div className="flex-1">
            <FaQuoteLeft className="text-center xl:text-left text-4xl my-4 block mx-auto xl:mx-0" />
            <p>{item.message}</p>

          </div>

        </div>
      </SwiperSlide>
    ))}


    </Swiper>
};

export default TestimonialSlider;
