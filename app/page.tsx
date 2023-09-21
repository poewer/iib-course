'use client'

import Script from 'next/script';
import NavBar from '@/components/NavBar';


export default function Home() {
  return (
    <main>
      <NavBar />
      <h1 className='text-center text-2xl'>Hello Michal Białek</h1>
      <Script type="text/javascript" src="https://s.skimresources.com/js/250980X1734811.skimlinks.js"></Script>
    </main>    
  )
}
