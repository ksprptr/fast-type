import Footer from '@/layout/Footer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className={inter.className}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  ) 
}
