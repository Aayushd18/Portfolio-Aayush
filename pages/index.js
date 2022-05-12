import Head from 'next/head'
import Image from 'next/image'
import { Home } from '../components/Home';
import { Navbar } from '../components/Navbar';

export default function Main() {
  return (
    <div>
      <Head>
        <title>Portfolio | Aayush</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/logo-removebg-preview.png" />
      </Head>
      <Navbar />
      <Home />
    </div>
  )
}
