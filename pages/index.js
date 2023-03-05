import CustomCursor from "../components/CustomCursor"
import Head from "next/head"
import Heading from "../components/Heading"
import HeadingMobile from "../components/HeadingMobile"
import LinksDesktop from "../components/LinksDesktop"
import LinksGrid from "../components/LinksGrid"
import { useState, useEffect } from "react"
import NowPlaying from "../components/NowPlaying"
import { NextSeo } from "next-seo"

export default function Home() {
  const [isDark, setDark] = useState(false)

  useEffect(() => {

    const disableselect = (e) => {  
      return false  
    }  
    document.onselectstart = disableselect  
    document.onmousedown = disableselect
    
    if(localStorage.getItem('isDark') == 'true') {
      let toggler = document.getElementById('toggler')
      let darkMode = document.getElementById('darkmode') 

      toggler.classList.add('active')
      darkMode.classList.add('active')
      setDark(true)
    }

  }, [])

  function toggleColor() {
    let toggler = document.getElementById('toggler')
    let darkMode = document.getElementById('darkmode')

    toggler.classList.toggle('active')    
    darkMode.classList.toggle('active')    

    setDark(!isDark)
    localStorage.setItem('isDark', JSON.stringify(!isDark))
  }

  return (
  <div className="h-screen overflow-hidden overflow-y-hidden max-w-screen">
    <NextSeo
      title="Abhishek More Personal Website"
      description="Personal Website for Abhishek More"
      openGraph={{
        url: 'https://www.abhishekmore.com',
        title: 'Abhishek More',
        description: 'Personal Website for Abhishek More',
        images: [
          {
            url: '/sitesc.png ',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/png',
          },
        ],
        site_name: 'SiteName',
      }}
    />
    <Head>
      <title>Abhishek More</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div>
        <div id="toggler" className="toggler" onClick={toggleColor}></div>
        <div id="container" className="container">
          <div id="darkmode" className="darkmode"></div>
        </div>
    </div>

    <Heading />
    <HeadingMobile />

    <LinksDesktop />
    <LinksGrid />

    <NowPlaying />

    <CustomCursor dark={isDark} />
  </div>
  )
}
