import ytsr from "ytsr";

async function DownloadUrl (req,res) {
    const data = await ytsr(req.query.url, {pages:1})
    res.status(200).json(data)
}

export default DownloadUrl