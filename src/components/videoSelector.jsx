import Image from 'next/image'

function VideoSelector(props) {
    const title = props.title
    const url = props.url
    const author = props.author.name
    const thumb = props.thumbnail
    const duration = props.duration

    function download(url, title, type) {
        const encodedURL = encodeURIComponent(url)
        const finalURL = encodedURL + `?title=${encodeURIComponent(title)}`

        window.open(`/api/download/${type}/${finalURL}`)
    }

    return <div className="flex entrar rounded-lg overflow-hidden w-full bg-gray-800 text-white md:mx-auto md:w-8/12 mb-5">
        <div className="w-4/12 my-auto">
            <Image src={thumb} className="w-full transition rounded-lg" alt="Thumbnail"  />
            <div className="text-center py-1 px-3 bg-gray-700 opacity-1 rounded-full mx-auto w-1/2 text-white my-2">{duration}</div>
        </div>
        
        <div className="w-8/12">
        
        <div className="mx-2">
            <h3 className="font-bold mb-1">{title}</h3>
            <h4>{author}</h4>
        </div>
            
            <div className="my-2 ml-2">
                <label>Baixar: </label>
                <button 
                className="px-4 py-1 border rounded-full shadow-md shadow color-gray-100 mx-1 hover:bg-gray-100 hover:text-gray-800 transition"
                onClick={()=>{download(url, title, 'audio')}}>
                    Música
                </button>
                
                <button 
                className="px-4 py-1 border rounded-full shadow-md shadow hover:bg-gray-100 hover:text-gray-800 transition color-gray-100"
                onClick={()=>{download(url, title, 'video')}}>
                    video
                </button>
            </div>
        
        </div>

    </div>
}

export default VideoSelector