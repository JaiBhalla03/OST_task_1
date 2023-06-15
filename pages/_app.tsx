import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "@/components/NavBar";
import {AnimatePresence} from "framer-motion";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AnimatePresence mode={'wait'}>
        <NavBar/>
        <Component {...pageProps} />
          <Footer/>
      </AnimatePresence>
  )
}
