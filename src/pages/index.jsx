import Head from 'next/head'
import SearchBar from '../components/searchBar'
import VideoSelector from '../components/videoSelector'
import { useState } from 'react'

export default function Home() {
  let [searchResults, setSearchResult] = useState(false)

  return (
    <div>
      <Head>
        <title>YT⬇</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 h-screen w-screen static">
        <header className="flex justify-center bg-gray-900">
          <h2 className="text-gray-100 font-bold text-3xl py-3 ">YT⬇ | Bem vindo!</h2>
        </header>

        <section className="flex justify-center my-5 ">
          <div className="w-full mx-2 md:w-9/12 lg:w-6/12 xl:w-5/12">
            <SearchBar setSearchResult={setSearchResult} />
          </div>

        </section>

        <section className="mt-5 mx-2 rounded-lg shadow-md md:w-8/12 md:mx-auto">
          {searchResults && searchResults.map((val, key)=>{
            if (val.type !== 'video'|| val.duration == null) return;
            return <VideoSelector
            title={val.title} url={val.url} key={key}
            author={val.author} duration={val.duration} description={val.description} thumbnail={val.bestThumbnail.url}/>
          })}
        </section>
      </main>

      
    </div>
  )
}

