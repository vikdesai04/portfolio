import React from 'react'
import { DEVPOST_LINK, GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK } from '../utils/Constants'

export default function LinksGrid() {
  return (
    <div className="flex flex-col sm:flex sm:flex-row lg:hidden justify-center w-[80%] md:w-[65%] m-auto pt-10 px-2 sm:px-0 sm:pt-20">
        <div className="px-0 sm:px-8">
            <div className="py-3">
              <a className="hidden sm:block text-2xl sm:text-3xl lg:text-3xl font-bold blend" href={RESUME_LINK} target="_blank" rel="noopener noreferrer">Resume &rarr;</a>
              <a className="block sm:hidden text-2xl sm:text-3xl lg:text-3xl font-bold blend" href={RESUME_LINK} target="_blank" rel="noopener noreferrer">resume &rarr;</a>
            </div>
            <div className="py-3">
              <a className="hidden sm:block text-2xl sm:text-3xl lg:text-3xl font-bold my-2 blend" href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">Github &rarr;</a>
              <a className="block sm:hidden text-2xl sm:text-3xl lg:text-3xl font-bold my-2 blend" href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">github &rarr;</a>
            </div>
        </div>
        <div className="px-0 sm:px-8">
            <div className="py-3">
              <a className="hidden sm:block text-2xl sm:text-3xl lg:text-3xl font-bold blend" href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">LinkedIn &rarr;</a>
              <a className="block sm:hidden text-2xl sm:text-3xl lg:text-3xl font-bold blend" href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">linkedin &rarr;</a>
            </div>
            <div className="py-3">
              <a className="hidden sm:block text-2xl sm:text-3xl lg:text-3xl font-bold my-2 blend" href={DEVPOST_LINK} target="_blank" rel="noopener noreferrer">Devpost &rarr;</a>
              <a className="block sm:hidden text-2xl sm:text-3xl lg:text-3xl font-bold my-2 blend" href={DEVPOST_LINK} target="_blank" rel="noopener noreferrer">devpost &rarr;</a>
            </div>
        </div>
    </div>
  )
}
