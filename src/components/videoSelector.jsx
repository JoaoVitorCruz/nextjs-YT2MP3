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

    return <div className={style.video_container}>
        <div className={style.thumb_container}>
            <img src={thumb} alt="Thumbnail" />
            <span>{duration}</span>
            <div className={style.clear}></div>
        </div>
        
        <div className={style.info}>
            <h3 className={style.title}>{title}</h3>
            <h4 className={style.author}>{author}</h4>
            
            <div className={style.downloadOptions}>
                <label>Baixar: </label>
                <button onClick={()=>{download(url, title, 'audio')}}>Music</button>
                <button onClick={()=>{download(url, title, 'video')}}>Video</button>
            </div>
        </div>
      
    </div>
}

export default VideoSelector