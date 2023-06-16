import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Jobs from "@/components/Jobs";
import NewFeeds from "@/components/NewFeeds";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={'overflow-hidden'}>
        <Hero/>
        <NewFeeds/>
        <Events/>
        <Jobs/>
    </main>
  )
}
