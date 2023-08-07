import Image from "next/image";
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode,Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
    modules={[FreeMode,Pagination]}
    
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

    
   
    className='h-[240px] sm:h-[340px]'>
      {workSlides.slides.map((item,index) =>(
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-4">
            {item.images.map((image,i) =>(
              <div className=" cursor-pointer" key={i}>
                <Image src={image.path} height={200} width={200} className="w-full h-full"/>

                </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

export default WorkSlider;
