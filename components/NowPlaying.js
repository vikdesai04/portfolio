import React from 'react'
import useSWR from 'swr';
import { FaSpotify } from 'react-icons/fa'

export default function NowPlaying() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher, { refreshInterval: 1000 });

  if(!data?.isPlaying) {
    return <></>
  }

  return (
    <div className="mx-4"> 
      <div className="flex sm:hidden justify-center pt-4">
          <a href={data?.songUrl} className="blend opacity-50 text-sm">{data?.title.toLowerCase()} \\ {data?.artist.toLowerCase()}</a>
      </div>
      <div className="flex sm:hidden justify-center items-center pt-3">
        <FaSpotify className="blend opacity-50" />
        <p className="text-xs opacity-50 ml-2 blend">now playing</p>
      </div>
    </div>
  )
}
