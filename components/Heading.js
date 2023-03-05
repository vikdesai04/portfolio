import React from 'react'
import { GITHUB_LINK, TAMUHACK_LINK, EMAIL} from '../utils/Constants'
import { useToast } from '@chakra-ui/react'
import { useState } from "react"

export default function Heading() {

  const toast = useToast()
  const [styleNum, setStyleNum] = useState(0)

  function copyToClipboard() {
    navigator.clipboard.writeText(EMAIL);
    if(!toast.isActive("copied")) {
      toast({
        id: "copied",
        title: 'Email copied to clipboard',
        status: 'success',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  function setStyle() {
    if(styleNum == 3) {
      setStyleNum(0)
    } else {
      setStyleNum(styleNum+1)
    }
  }

  function getStyle() {
    if(styleNum == 0) {
      return "visible lg:p-2 rounded-xl border-2 border-white"
    } else if(styleNum == 1) {
      return "visible lg:bg-purple-50 lg:px-2 rounded-xl border-2 border-pink-600"
    } else if(styleNum == 2) {
      return "gradient lg:p-[10px] blend"
    } else {
      return "visible lg:bg-purple-50 border-2 border-white blend lg:px-2 rounded-xl" 
    }
  } 

  //default: visible lg:p-2 rounded-xl
  //slack code: visible lg:bg-purple-50 lg:p-2 rounded-xl
  //gradient: gradient blend

  return (
    <div className="hidden sm:flex justify-center pt-[10vh] sm:pt-[20vh] z-50">
      <h1 className="text-[40px] lg:text-[70px] font-bold w-[65%] lg:w-[75%] xl:w-[65%]">
        <span className="blend">I&apos;m </span>
        <a className={`${getStyle()}`}>
          <span onClick={() => copyToClipboard()} className="visible redtext blend">Abhishek </span>
          <div onClick={() => setStyle()} className="inline-block rounded-xl">
            <span className="redtext w-[4ch]">{styleNum == 3 ? "Less " : "More"}</span>
          </div>
        </a>
        <span className="blend">
          , an
        </span>
        <br className="hidden xl:inline" /> <span className="blend">
        aspiring    
        </span> <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className={`${getStyle()}`}>
          <span className="visible redtext blend">software engineer</span>

        </a>
        <br className="hidden xl:inline" /> <span className="blend">
          and
        </span> <a href={TAMUHACK_LINK} target="_blank" rel="noopener noreferrer"  className={`${getStyle()}`}>
          <span className="visible redtext blend">hackathon enthusiast</span>
        </a>
      </h1>
    </div>
  )
}
