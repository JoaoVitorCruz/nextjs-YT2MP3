import style from '../styles/videoSelector.module.css'

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

<<<<<<< HEAD
    return <div className="flex entrar rounded-lg overflow-hidden w-full bg-gray-800 text-white md:mx-auto md:w-8/12 mb-5">
        <div className="w-4/12 my-auto">
            <img src={thumb} className="w-full transition rounded-lg" alt="Thumbnail" />
            <div className="text-center py-1 px-3 bg-gray-700 opacity-1 rounded-full mx-auto w-1/2 text-white my-2">{duration}</div>
=======
    return <div className={style.video_container}>
        <div className={style.thumb_container}>
            <img src={thumb} alt="Thumbnail" />
            <span>{duration}</span>
            <div className={style.clear}></div>
>>>>>>> parent of d7202d7 (atualização no layout e tailwind)
        </div>
        
        <div className={style.info}>
            <h3 className={style.title}>{title}</h3>
            <h4 className={style.author}>{author}</h4>
            
<<<<<<< HEAD
            <div className="my-2 ml-2">
=======
            <div className={style.downloadOptions}>
>>>>>>> parent of d7202d7 (atualização no layout e tailwind)
                <label>Baixar: </label>
                <button onClick={()=>{download(url, title, 'audio')}}>Music</button>
                <button onClick={()=>{download(url, title, 'video')}}>Video</button>
            </div>
        </div>
      
    </div>
}

export default VideoSelector