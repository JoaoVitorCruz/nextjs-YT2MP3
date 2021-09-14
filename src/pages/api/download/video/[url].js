const ytdl = require('ytdl-core')
const fs = require('fs')

function videoDownload(req,res) {
    const url = req.query.url
    const title = req.query.title
    res.setHeader('content-disposition', `attachment;\ filename="${title}.mp4"`)
    
    ytdl(url,{filter : "videoandaudio"}).pipe(res)
}

export default videoDownload