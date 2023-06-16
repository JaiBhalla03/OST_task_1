import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/components/Hero";
import Events from "@/components/Events";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={'overflow-hidden'}>
        <Hero/>
        <Events/>
      <div className={'h-screen'}></div>
    </main>
  )
}
