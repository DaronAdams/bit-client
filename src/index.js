'use strict';
const fs = require('fs');
const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('r_83000.torrent'));
console.log(torrent.announce.toString('utf8'));