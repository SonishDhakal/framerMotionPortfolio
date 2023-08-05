import { useRouter } from 'next/router';
import Layout, { sora } from '../components/Layout';
import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import Transition from '../components/Transition';

//components





function MyApp({ Component, pageProps }) {

  const router = useRouter()
  return <Layout className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}`} >
    <AnimatePresence mode='wait'>
      <motion.div key={router.route} className='h-full'>
       <Transition />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </Layout>;
}

export default MyApp;
