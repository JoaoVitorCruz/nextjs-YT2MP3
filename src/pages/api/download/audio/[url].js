const ytdl = require('ytdl-core')
const fs = require('fs')

function audioDownload(req,res) {
    const url = req.query.url
    const title = req.query.title
    res.setHeader('content-disposition', `attachment;\ filename="${title}.mp3"`)
    
    ytdl(url,{filter : "audioonly"}).pipe(res)
}

export default audioDownload