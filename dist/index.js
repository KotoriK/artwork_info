"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const cheerio_1 = __importDefault(require("cheerio"));
async function fetchArtwork(artworkId, agent) {
    const resp = await node_fetch_1.default('https://www.pixiv.net/artworks/' + artworkId, agent && { agent });
    if (resp.ok) {
        const html = await resp.text();
        const $ = cheerio_1.default.load(html);
        const json_preload_data = $('#meta-preload-data').attr('content');
        if (json_preload_data) {
            const preload_data = JSON.parse(json_preload_data);
            return preload_data.illust[artworkId];
        }
        else {
            throw 'unable to parse data.';
        }
    }
    else {
        throw `HTTP ${resp.status}`;
    }
}
exports.default = fetchArtwork;
