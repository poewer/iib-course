'use client'

import Script from 'next/script';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import About from '@/components/about';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <main>
      <About />
    </main>
  )
}
