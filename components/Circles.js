import Image from "next/image";



const Circles = () => {
 return(
  <div className="duration-75 z-10
  w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse">
    <Image 
    src={'/circles.png'}
    width={260}
    height={200}
    className="w-full h-full"

    
    />
  </div>
 )
  
};

export default Circles;
