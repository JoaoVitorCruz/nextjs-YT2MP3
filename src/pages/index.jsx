import Head from 'next/head'
import SearchBar from '../components/searchBar'
import VideoSelector from '../components/videoSelector'
import { useState } from 'react'
import style from '../styles/home.module.css'


export default function Home() {
  let [searchResults, setSearchResult] = useState(false)

  return (
    <div>
      <Head>
        <title>YT⬇</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={style.header}>
        <h2>YT⬇ | Bem vindo!</h2>
      </header>

      <SearchBar setSearchResult={setSearchResult}/>

      {searchResults && searchResults.map((val, key)=>{
        if (val.type !== 'video'|| val.duration == null) return;

        return <VideoSelector
        title={val.title} url={val.url} key={key}
        author={val.author} duration={val.duration} thumbnail={val.bestThumbnail.url}/>
      })}
      
    </div>
  )
}

