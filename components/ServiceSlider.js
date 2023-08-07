import {RxCrop,RxPencil2,RxDesktop,RxReader,RxRocket, RxArrowTopRight} from 'react-icons/rx'
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];




// swiper compoentrs

import { FreeMode,Pagination } from 'swiper/modules';

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const ServiceSlider = () => {
  return <Swiper
  modules={[FreeMode,Pagination]}
   breakpoints={{
    320:{
      slidesPerView:1,
      spaceBetween:15,

    },
    640:{
      slidesPerView:3,
      spaceBetween:15,

    }
  }}
  
  freeMode={true}
  pagination={{ clickable: true }}
  
  
  className=''>
    {
      serviceData.map((item,index) =>{
        return <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max duration-300 rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 cursor-pointer group hover:bg-[rgba(89,65,169,0.15)] transition-all'>
            {/* icon */}

            <div className='text-4xl text-accent'>{item.icon}</div>
            {/* title */}
            <div className='flex flex-col gap-4 my-5'>
              <div>{item.title}</div>
              <p>{item.description}</p>
            </div>

            {/* arrows */}
            <div className='text-3xl group-hover:rotate-[45deg] group-hover:text-accent transition-all duration-300 w-max'>
              <RxArrowTopRight />
            </div>
          </div>
        </SwiperSlide>
      })
    }

  </Swiper>
}
export default ServiceSlider;
