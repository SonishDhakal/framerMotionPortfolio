import Image from "next/image";




const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 opacity-50  w-[200px] xl:w-[300px]">
    <Image src='/top-left-img.png' width={400} height={400} alt="topbarImg"  />
  </div>;
};

export default TopLeftImg;
