function VideoSelector(props) {
    const title = props.title
    const url = props.url

    function download(url, title, type) {
        const encodedURL = encodeURIComponent(url)
        const finalURL = encodedURL + `?title=${encodeURIComponent(title)}`

        window.open(`/api/download/${type}/${finalURL}`)
    }

    return <div>
        <h3>{title}</h3>
        <label>Baixar: </label>
            <button onClick={()=>{download(url, title, 'audio')}}>Música</button>
            <button onClick={()=>{download(url, title, 'video')}}>Video</button>
        <hr />      
    </div>
}

export default VideoSelector