import Link from 'next/link';
import { useRouter } from 'next/router';
import {HiHome,HiUser,HiRectangleGroup,HiViewColumns,HiChatBubbleBottomCenterText,HiEnvelope} from 'react-icons/hi2'
const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];



const Nav = () => {
  const router = useRouter()
  console.log(router)
  const pathname  = router.pathname
  return (
    <nav className='flex flex-col items-center gap-y-4 fixed h-max top-0 bottom-0  mt-auto xl:right-[2%] z-50  w-full xl:w-16 xl:max-w-md xl:h-screen '>
      <div
      className='flex w-full xl:flex-col items-center 
       justify-between gap-y-10

       px-4 md:px-40 xl:px-0 h-[80px] xl:h-max
       py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full xl:my-auto'>
        {links.map(item => <Link className={`${item.path===pathname && 'text-accent  '} hover:text-accent transition-all relative flex items-center group`}
        key={item.name} href={item.path} >

<div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
  <div className='bg-white relative flex text-primary items-center
  p-[6px]'>

<div className='text-[12px] capitalize font-semibold leading-none rounded-sm'>{item.name}</div>
  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
  
  </div>
</div>


          <div>{item.icon}</div>
          </Link>)}
        </div>

    </nav>
  )
};

export default Nav;
