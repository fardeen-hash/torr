var express = require("express");
var router = express.Router();

const TorrentSearchApi = require('torrent-search-api');
// TorrentSearchApi.enableProvider('Torrent9');
const providers = TorrentSearchApi.getProviders();
const activeProviders = TorrentSearchApi.getActiveProviders();
TorrentSearchApi.enablePublicProviders();
/* GET users listing. */
router.get("/", async function (req, res, next) {
//  res.send(providers);
 const torrents = await TorrentSearchApi.search('Taxi Driver', 'Movies');
//  console.log(activeProviders);
//  console.log(providers);
 console.log("******************SEARCH******************");
 const rand = Math.floor(Math.random() * 10);
 const torrent = torrents[rand];
 const torrentHtmlDetail = await TorrentSearchApi.getTorrentDetails(torrent);
 const magnet = await TorrentSearchApi.getMagnet(torrent);
 console.log(rand);
 res.send(magnet); 
//  console.log(torrentHtmlDetail);
 console.log(torrents[rand]);
 const buffer = await TorrentSearchApi.downloadTorrent(torrent);

});

module.exports = router;
