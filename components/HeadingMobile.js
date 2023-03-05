import React from 'react'
import { MOBILE_NAME, EMAIL, MOBILE_CHARACTERIZATIONS} from '../utils/Constants';
import Typewriter from 'typewriter-effect';
import { useToast } from '@chakra-ui/react';

export default function HeadingMobile() {

  const toast = useToast()
  
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
  
  return (
    <div className="flex sm:hidden justify-center pt-[10vh]">
      <h1 className="text-[40px] lg:text-[70px] font-bold w-[80%] ">
        <span className="blend px-2">hi, i&apos;m</span>
        <br />
        <div className="visible inline-block bg-purple-50 px-2 rounded-xl">
          <a className="redtext" onClick={() => copyToClipboard()} target="_blank" rel="noopener noreferrer">
            <span className="visible">{MOBILE_NAME}</span>
          </a>
        </div>
        <div className="px-2">
          <Typewriter
            options={{
              strings: MOBILE_CHARACTERIZATIONS,
              delay: 75,
              deleteSpeed: 35,
              wrapperClassName: "text-2xl blend",
              cursorClassName: "invisible",
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </h1>
    </div>
  )
}
