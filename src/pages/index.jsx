import Head from 'next/head'
import SearchBar from '../components/searchBar'
import VideoSelector from '../components/videoSelector'
import { useState } from 'react'


export default function Home() {
  let [searchResults, setSearchResult] = useState(false)

  return (
    <div>
      <Head>
        <title>YT2MP3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar setSearchResult={setSearchResult}/>

      {searchResults && searchResults.map((val, key)=>{
        return <VideoSelector title={val.title} url={val.url} key={key}/>
      })}
      
    </div>
  )
}

