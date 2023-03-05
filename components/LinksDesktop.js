import React from 'react'
import { RESUME_LINK, GITHUB_LINK, LINKEDIN_LINK, DEVPOST_LINK } from '../utils/Constants'

export default function LinksDesktop() {
  return (
    <div className="hidden lg:flex justify-between w-[65%] lg:w-[75%] xl:w-[65%] m-auto pt-20">
        <a className={`text-3xl font-bold blend`} href={RESUME_LINK} target="_blank" rel="noopener noreferrer">Resume &rarr;</a>
        <a className={`text-3xl font-bold blend`} href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">Github &rarr;</a>
        <a className={`text-3xl font-bold blend`} href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">LinkedIn &rarr;</a>
        <a className={`text-3xl font-bold blend`} href={DEVPOST_LINK} target="_blank" rel="noopener noreferrer">Devpost &rarr;</a>

    </div>
  )
}
