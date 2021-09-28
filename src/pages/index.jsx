import Head from 'next/head'
import SearchBar from '../components/searchBar'
import VideoSelector from '../components/videoSelector'
import { useState } from 'react'
import Image from 'next/image'


export default function Home() {
let [searchResults, setSearchResult] = useState(false)

return (
<div>

	<Head>
		<title>YT⬇</title>
		<link rel="icon" href="/favicon.ico" />
	</Head>

	<header className="flex justify-center bg-gray-800">
		<h2 className="text-gray-100 font-bold text-3xl py-3 ">YT⬇ | Bem vindo!</h2>
	</header>

	<section className="flex justify-center my-5 ">
		<div className="w-full md:w-9/12 lg:w-6/12 xl:w-5/12">
			<SearchBar setSearchResult={setSearchResult} />
		</div>
	</section>

	{!searchResults && [true].map((val, key)=>{
	return (<div key={key} className="bg-red absolute inset-1/4">


		<div className="text-white text-xl text-center border-4 border-gray-700 border-dashed">
			<div className="p-6">
				<p className="text-yellow-500 font-black text-2xl text-center">AVISO:</p>
				<p> os arquivos de <span className="animate-pulse text-pink-300">audio</span> fornecidos pelo ytDown
					estão no formato <code className="font-black text-red-400">.webm</code></p>
				<p>Estamos trabalhando em um conversor rapido e pratico para o formato<code
						className="font-black text-green-400">.mp3</code></p>
			</div>
		</div>

	</div>)
	})}

	<section className="mt-5 mx-1 rounded-lg shadow-md">
		{searchResults && searchResults.map((val, key)=>{
		if (val.type !== 'video'|| val.duration == null) return;

		return
		<VideoSelector title={val.title} url={val.url} key={key} author={val.author} duration={val.duration}
			thumbnail={val.bestThumbnail.url} />
		})}
	</section>

	<footer className="flex items-end rounded-t-lg h-screen -mt-36">
		<div className="bg-gray-800 py-7 -mt-16 w-full text-center text-gray-100 text-xl font-bold">
			<p className="animate-bounce">João Vitor Cruz</p>

			<div className="flex justify-center mt-2">
				<div className="flex justify-around w-3/12 md:w-2/12">

					<a href="https://www.github.com/JoaoVitorCruz">
						<Image src="/whatsapp.svg" className="cursor-pointer" height="35" width="35" />
					</a>

					<a href="https://wa.link/84h3sj">
						<Image src="/github.svg" className="cursor-pointer mx-5 bg-gray-100 rounded-full" height="35"
							width="35" />
					</a>

					<a href="https://www.instagram.com/proxy_167/">
						<Image src="/instagram.svg" className="cursor-pointer rounded-xl" height="35" width="35" />
					</a>

				</div>
			</div>

		</div>
	</footer>

</div>
)
}