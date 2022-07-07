'use strict';
const fs = require('fs');
const torrent = fs.readFileSync('r_83000.torrent');
console.log(torrent.toString('utf8'));