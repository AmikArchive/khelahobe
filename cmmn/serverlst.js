var server_links = [
  'https://d3awnlgqz0szay.cloudfront.net/out/v1/b841c366cbe540e6a106c3ba83e5c8d6/index.m3u8',
  'https://talgach.xyz/bdix14Join:@fifaxlive.m3u8',
  'https://mprod-cdn.toffeelive.com/toffee/fifa-paid/match-1/master_1000.m3u8',
  'http://live.sportstv.com.tr/hls/low/sportstv_fhd/index.m3u8',
  'http://103.159.4.38:8091/CH2-SP2/index.m3u8',
  'http://103.159.4.38:8091/CH1-SP1/index.m3u8',
  'http://103.159.4.38:8091/CH3-SP3/index.m3u8',
  'http://redlabmcdn.s.llnwi.net/nv02/ryowa7hd/index.m3u8',
  'https://talgach.xyz/sntsd-join:@fifaxlive.m3u8',
  'https://talgach.xyz/FWC-Join:@fifaxlive.m3u8',
  'https://talgach.xyz/FWC2-Join:@fifaxlive.m3u8',
  'https://talgach.xyz/FWC4-Join:@fifaxlive.m3u8',
  'https://talgach.xyz/FWC5-Join:@fifaxlive.m3u8',
  'http://clientsportals.com:2095/live/zsjc2FSW/mrFswGP1/14415.m3u8',
  'http://123.254.72.24:1935/tvlive/livestream2/playlist.m3u8',
  'http://clientsportals.com:2095/live/zsjc2FSW/mrFswGP1/27738.m3u8',
  'http://175.107.244.52:4457/play/a070/index.m3u8',
  'http://185.105.4.106:1935/live/Bahrain+Sports/playlist.m3u8',
  'https://bl.uma.media/live/394904/HLS/1_5/1/1/playlist.m3u8',
  'http://190.61.102.67:31589/play/a08j/index.m3u8',



  'http://103.159.4.38:8091/CH7-SP7/index.m3u8',
  'http://103.159.4.38:8091/CH10-SP10/index.m3u8',
  'http://103.159.4.38:8091/CH6-SP6/index.m3u8',  
  'http://103.159.4.38:8091/CH3B-SP3/index.m3u8',
  'http://103.159.4.38:8091/CH3A-SP3/index.m3u8',
  'http://103.159.4.38:8091/CH3C-SP3/index.m3u8',
  'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8',
  'http://208.86.19.13:81/517.stream/index.m3u8',
  'http://217.174.225.146/hls/ch004_720/index.m3u8',
  'http://175.107.244.52:4457/play/a06x/index.m3u8',
  'http://217.174.225.146/hls/ch004_720/index.m3u8',
  'http://albtv.in:8080/live/BrankoVorkapic/KZi8zfrk57/372.m3u8'


]

var makeEpisodeList = []; 
for (var i = 0; i <= server_links.length-1; i++) {
  makeEpisodeList.push(`<li><a href="./server.html?url=${server_links[i]}">Server-${i+1}</a></li>`);
}
var episodeHtml = makeEpisodeList.join(" ");
var servers = ` <ul class="srvrlst"> ${episodeHtml} </ul>`;
