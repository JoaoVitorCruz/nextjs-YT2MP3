import Head from 'next/head'
import SearchBar from '../components/searchBar'
import VideoSelector from '../components/videoSelector'
import { useState } from 'react'
<<<<<<< HEAD
import GitHubIcon from '@material-ui/icons/GitHub'
import WhatsappIcon from '@material-ui/icons/Whatsapp'
import InstagramIcon from '@material-ui/icons/Instagram'
=======
import style from '../styles/home.module.css'

>>>>>>> parent of d7202d7 (atualização no layout e tailwind)

export default function Home() {
  let [searchResults, setSearchResult] = useState(false)

  return (
    <div>
      <Head>
        <title>YT⬇</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<<<<<<< HEAD
        <header className="flex justify-center bg-gray-800">
          <h2 className="text-gray-100 font-bold text-3xl py-3 ">YT⬇ | Bem vindo!</h2>
        </header>

        <section className="flex justify-center my-5 ">
          <div className="w-full md:w-9/12 lg:w-6/12 xl:w-5/12">
            <SearchBar setSearchResult={setSearchResult}/>
          </div>
        </section>

        {!searchResults && [true].map((val, key)=>{
          return (<div key={key} className="bg-red absolute inset-1/4">

            
            <div className="text-white text-xl text-center border-4 border-gray-700 border-dashed">
              <div className="p-6">
                <p className="text-yellow-500 font-black text-2xl text-center">AVISO:</p>  
                <p> os arquivos de <span className="animate-pulse text-pink-300">audio</span> fornecidos pelo ytDown estão no formato <code className="font-black text-red-400">.webm</code></p>
                <p>Estamos trabalhando em um conversor rapido e pratico para o formato<code className="font-black text-green-400">.mp3</code></p>
              </div>
            </div>
          
          </div>)
        })}


        <section className="mt-5 mx-1 rounded-lg shadow-md">
          {searchResults && searchResults.map((val, key)=>{
            if (val.type !== 'video'|| val.duration == null) return;

            return <VideoSelector
            title={val.title} url={val.url} key={key}
            author={val.author} duration={val.duration} thumbnail={val.bestThumbnail.url}/>
          })}
        </section>

        <footer className="flex items-end rounded-t-lg h-screen -mt-36">
          <div className="bg-gray-800 py-7 -mt-16 w-full text-center text-gray-100 text-xl font-bold">
            <p className="animate-bounce">João Vitor Cruz</p>

          <div className="flex justify-center mt-2">
            <a href="https://www.github.com/JoaoVitorCruz">
              <GitHubIcon className="bg-gray-900 cursor-pointer" />
            </a>
            {'   '}
            <a href="https://wa.link/84h3sj">
              <WhatsappIcon className=" bg-gray-100 text-green-600 mx-3 cursor-pointer"/>
            </a>
            {'   '}
            <a href="https://www.instagram.com/proxy_167/">
              <InstagramIcon className="bg-gradient-to-r from-yellow-400 via-red-500 cursor-pointer to-pink-500"/>
            </a>
          </div>
            
          </div>
        </footer>
=======
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
>>>>>>> parent of d7202d7 (atualização no layout e tailwind)
      
    </div>
  )
}

