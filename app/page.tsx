'use client'

import Script from 'next/script';
import NavBar from '@/components/NavBar';
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <NavBar />
      <h1 className='text-center text-2xl'>Hello Michal Białek</h1>
      <Script type="text/javascript" src="https://s.skimresources.com/js/250980X1734811.skimlinks.js"></Script>
      <ul className='p-9'>
        <li>
          <Link className='text-2xl' href={'https://Pdiskshortnearn.xyz/h0evQzyd'}>Link1</Link>
        </li>
        <li>
          <Link className='text-2xl' href={'https://Pdiskshortnearn.xyz/8rJ9v'}>Link2</Link>
        </li>
      </ul>
    </main>
  )
}
