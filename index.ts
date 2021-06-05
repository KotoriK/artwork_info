import fetch from 'node-fetch'
import { Agent } from 'http'
import Cheerio from 'cheerio'
import { PreloadData } from './api'
export default async function fetchArtwork(artworkId: number, agent?: Agent | ((parsedUrl: URL) => Agent)) {
    const resp = await fetch('https://www.pixiv.net/artworks/' + artworkId, agent && { agent })
    if (resp.ok) {
        const html = await resp.text()
        const $ = Cheerio.load(html)
        const json_preload_data = $('#meta-preload-data').attr('content')
        if (json_preload_data) {
            const preload_data = JSON.parse(json_preload_data) as PreloadData
            return preload_data.illust[artworkId]
        } else {
            throw 'unable to parse data.'
        }
    } else {
        throw `HTTP ${resp.status}`
    }
}
